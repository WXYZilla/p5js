let padX, padY, padWidth;
let xPos, xDir, yPos, yDir, diam, speed;
let gameStart = 1;
let gameOver = 0;
let randomColor1, randomColor2, randomN, bounced = 1;

function setup() {
  createCanvas(600,800);
  speed = 5;
  xPos = width / 2;
  xDir = -speed;
  yPos = (height - 200) / 2;
  yDir = speed;
  diam = 50;
  padWidth = 200;
  randomColor1 = color('#FF0000');
}

function draw() {
  background(128);
  fill(200);
  noStroke();
  rect(0,600,width,200);
  noFill();
  stroke(255);
  square(40,height - 200 + 40 , 120);
  
  fill(200);
  stroke(randomColor1);
  strokeWeight(10);
  circle(xPos,yPos,diam);
  if(gameOver == 0){
  xPos = xPos + xDir;
  yPos = yPos + yDir;
  }
  
  padX = mouseX - padWidth/2;
  padY = height - 230;
  fill(0);
  noStroke();
  rect(padX, padY, padWidth, 30);
  
  if(xPos - diam/2 - 10 < 0 || xPos + diam/2 + 10 > width) xDir *= -1;
  if(yPos + diam/2 + 10 > height - 200) gameOver = 1;
  if(yPos - diam/2 - 10 < 0) yDir = speed;
  if(xPos > padX && xPos < padX + padWidth && yPos > height-200-30-diam/2-10){
    yDir = -speed;
    bounced = 1;
  }
  else if(yPos + diam/2+10 > height-230 && (xPos - padX) ** 2 + (height-200-30 - yPos) ** 2 < (diam/2 + 10) ** 2){
    yDir = -speed;
    xDir = abs(xDir) * -1;
    bounced = 1;
  }
  else if(yPos + diam/2+10 > height-230 && (xPos - padX - padWidth) ** 2 + (height-200-30 - yPos) ** 2 < (diam/2 + 10) ** 2){
    yDir = -speed;
    xDir = abs(xDir);
    bounced = 1;
  }
    if(yDir == -speed && bounced == 1){
    bounced = 0;
    gameStart = 0;
    randomN = Math.floor(random(16));
    if(randomN >= 1 && randomN <= 3){
      randomColor1 = ('#FF0000');
    }
    if(randomN >= 4 && randomN <= 6){
      randomColor1 = ('#FFFF00');
    }
    if(randomN >= 7 && randomN <= 9){
      randomColor1 = ('#0000FF');
    }
    if(randomN >= 10 && randomN <= 12){
      randomColor1 = ('#00FF00');
    }
    if(randomN >= 13 && randomN <= 15){
      randomColor1 = ('#FF00FF');
    }
    if(randomN == 0){
      randomColor1 = ('#000000');
    }
  }
}