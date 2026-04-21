let padX, padY, padWidth;
let xPos, xDir, yPos, yDir, diam, speed;
let gameStart = 1;
let gameOver = 0;
let randomColor1, randomColor2, bounced = 1;
let t = 0;
let bricks = [1,1,1,1,1];

function setup() {
  createCanvas(1000,1200);
  speed = 12;
  xPos = width / 2;
  xDir = -speed;
  yPos = (height - 200) / 2;
  yDir = speed;
  diam = 50;
  padWidth = 200;
  randomColor1 = color('#FF0000');
  randomColor2 = colorGenerate();
}

function draw() {
  //background
  background(128);
  
  //drawing lower part
  fill(200);
  noStroke();
  rect(0,height-200,width,200);
  fill(randomColor2);
  circle(100, height - 200 + 100, 70);
  noFill();
  stroke(255);
  square(40,height - 200 + 40 , 120);
  
  //drawing ball
  fill(200);
  stroke(randomColor1);
  strokeWeight(10);
  circle(xPos,yPos,diam);
  if(gameOver == 0){
    xPos = xPos + xDir;
    yPos = yPos + yDir;
  }
  
  //drawing the bounce pad
  padX = mouseX - padWidth/2;
  padY = height - 230;
  fill(0);
  noStroke();
  rect(padX, padY, padWidth, 30);
  
  //baounce pad hitbox
  hitbox();
  
  //changing ball color
  if(yDir == -speed && bounced == 1 && gameOver != 1){
    bounced = 0;
    gameStart = 0;
    randomColor1 = randomColor2;
    randomColor2 = colorGenerate();
  }
}

function hitbox() {
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
}

function colorGenerate() {
  let randomN = Math.floor(random(16));
    if(randomN >= 1 && randomN <= 3){
      return color('#FF0000');
    }
    if(randomN >= 4 && randomN <= 6){
      return color('#FFFF00');
    }
    if(randomN >= 7 && randomN <= 9){
      return color('#0000FF');
    }
    if(randomN >= 10 && randomN <= 12){
      return color('#00FF00');
    }
    if(randomN >= 13 && randomN <= 15){
      return color('#FF00FF');
    }
    if(randomN == 0){
      return color('#000000');
    }
}

/*
function summonBricks() {
  let randomN;
  let i = 0;
  while(i < bricks.length){
    if ( bricks[i] === ) {
      randomN = Math.floor(random(1,6));
      if(randomN >= 1 && randomN <= 3){
        fill('#FF0000');
      }
      if(randomN >= 4 && randomN <= 6){
        return color('#FFFF00');
      }
      if(randomN >= 7 && randomN <= 9){
        return color('#0000FF');
      }
      if(randomN >= 10 && randomN <= 12){
        return color('#00FF00');
      }
      if(randomN >= 13 && randomN <= 15){
        return color('#FF00FF');
      }
      noStroke();
      rect(i*180+20, 0, 180,100);
      i++;
    }
  }
}
*/
