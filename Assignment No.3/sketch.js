let sky1, sky2, sky3, roomColor, sunColor;
let sunX = 180, sunY = 0;
let daytime = 1, dayShift = 0, blink = 0, skyChange = 0;
let eyesX = 160, eyesY = 125;
function setup() {
  createCanvas(400, 600);
  sky1 = 57;
  sky2 = 189;
  sky3 = 249;
  roomColor = 170;
  sunColor = color('#FFFF00');
}
function draw() {
  background(roomColor);
  noStroke();
  fill('#EADEB2');                         //body
  rect(95,240,210,300,30);
  stroke('#663300');                       //clothing pattern
  strokeWeight(10);
  line(0,330,400,470);
  stroke('#331900');
  line(0,500,400,270);
  stroke('#804040');
  line(0,350,400,270);
  stroke('#999933');
  line(0,355,400,240);
  stroke('#993333');
  strokeWeight(15);
  line(0,450,400,380);
  stroke('#808080');
  strokeWeight(20);
  line(0,270,400,400);
  stroke('#004000');
  strokeWeight(4);
  line(0,600,400,300);
  stroke('#CCCC66');
  line(0,150,400,650);
  noStroke()
  fill(roomColor);                     //clearing out the lines outside the body
  rect(0,0,95,600);
  rect(305,0,95,600);
  if(dayShift == 1){
    if(daytime == 1 && skyChange == 0){
      if(sky1 != 249) sky1 += 3;
      if(sky2 != 115) sky2 -= 2;
      if(sky3 != 21) sky3 -= 3; 
      if(sky1 == 249 && sky2 == 115 && sky3 == 21)skyChange = 1;
    }
    if(daytime == 1 && skyChange == 1){
        if(sky1 != 27) sky1 -= 6;
        if(sky2 != 4) sky2 -= 3;
        if(sky3 != 0) sky3 -= 1;
    }
    if(daytime == -1 && skyChange == 0){
      if(sky1 != 249) sky1 += 6;
      if(sky2 != 115) sky2 += 3;
      if(sky3 != 21) sky3 += 1; 
      if(sky1 == 249 && sky2 == 115 && sky3 == 21)skyChange = 1;
    }
    if(daytime == -1 && skyChange == 1){
        if(sky1 != 57) sky1 -= 3;
        if(sky2 != 189) sky2 += 2;
        if(sky3 != 249) sky3 += 3;
    }
  }
  if(dayShift == 1 && daytime == 1) roomColor -= 1;
  else if(dayShift == 1 && daytime == -1) roomColor += 1;
  if(dayShift == 0) skyChange = 0;
  fill(sky1,sky2,sky3);                     //window
  rect(30,60,200,140);
  if(dayShift == 1){                     //sun setting
    if(daytime == 1){
      sunColor = color('#FFFF00');
    }
    if(daytime == -1){
      sunColor = color('#A9A9A9');
    }
    fill(sunColor);
    circle(sunX,sunY,50);
    sunX -= 1;
    sunY += 2;
    if(sunX == 68 && sunY == 224){
      dayShift = 0;
      daytime *= -1;
    }
  }
  else{
    sunX = 180;
    sunY = 0;
  }
  fill('#C06000');
  rect(27,57,6,146);
  rect(127,57,6,146);
  rect(27,57,206,6);
  rect(27,127,206,6);
  rect(27,197,206,6);
  fill(roomColor);
  rect(0,0,width,57);
  rect(0,203,width,30);
  rect(0,203,100,100);
  fill('#EADEB2');                       //arms
  quad(30,290,30,350,95,320,95,260);
  quad(305,270,305,370,320,430,380,430);
  fill(255);                               //inner shirt
  triangle(165,240,200,290,235,240);
  fill('#DECFB2');                        //collar
  quad(165,240,200,290,145,310,145,240);
  quad(235,240,200,290,255,310,255,240);
  fill(150);                               //zipper
  rect(195,290,10,500);
  fill(165);
  rect(190,290,20,20);
  stroke('#2C2C5D');                     //tumbler
  strokeWeight(25);
  noFill();
  rect(30,280,60,90);
  stroke(90);
  strokeWeight(17);
  line(130,260,130,210);
  noStroke();
  fill('#2C2C5D');
  rect(60,245,90,150);
  rect(67,295,76,450);
  fill('#FF8000');
  ellipse(105,290,70,30);
  fill('#C19171');                      //hands
  ellipse(30,320,50,60);
  ellipse(350,430,60,50);
  fill('#B58571');
  rect(165,210,70,30);
  fill('#C19171');                        //head
  ellipse(200,140,160,180);
  stroke(0);                               //mouth
  strokeWeight(5);
  line(200,180,193,187);
  line(200,180,207,187);
  if(mouseX - 160 >= 5)eyesX = 160 + 5;    //eyes
  else if(mouseX - 160 <= -5)eyesX = 160 - 5;
  else eyesX = mouseX;
  if(mouseY - 125 >= 5)eyesY = 125 + 5;
  else if(mouseY - 125 <= -5)eyesY = 125 - 5;
  else eyesY = mouseY;
  if(blink == 0){
    noStroke();
    fill(100);
    arc(eyesX,eyesY+10,40,20,0,PI);
    arc(eyesX+80,eyesY+10,40,20,0,PI);
    fill(0);
    stroke(255);
    strokeWeight(2);
    arc(eyesX,eyesY,30,30,radians(340),radians(200),OPEN);
    arc(eyesX+80,eyesY,30,30,radians(340),radians(200),OPEN);
    fill(255);
    circle(eyesX+2,eyesY,5);
    circle(eyesX+80+2,eyesY,5);
  }
  else{
    stroke(5);
    noFill();
    line(eyesX-15, eyesY, eyesX+15, eyesY);
    line(eyesX-15+80, eyesY, eyesX+15+80, eyesY);
    blink = 0;
  }
  noStroke()                                //hair
  fill(0);
  arc(200,140,160,180,radians(215),radians(325),OPEN);
  arc(200,140,160,180,radians(180),radians(245),OPEN);
  arc(200,140,160,180,radians(295),radians(0),OPEN);
  triangle(140,90,260,90,240,117);
  triangle(140,90,260,90,170,105);
  triangle(200,90,200,50,290,80);
  triangle(200,90,200,50,115,85);
  triangle(200,90,200,50,190,40);
  triangle(200,90,200,50,160,50);
  triangle(135,110,150,80,110,110);
  triangle(265,110,250,80,290,120);
  noFill();
  stroke(210);                           //glasses
  strokeWeight(5);
  arc(200,130,20,5,radians(180),radians(0));
  ellipse(157,130,60,40);
  ellipse(243,130,60,40);
  noStroke();
  fill(100);                             //table
  rect(0,450,400,600);
  if(mouseIsPressed) blink = 1;
}
function keyPressed(){if(key == ' ' && dayShift == 0) dayShift = 1;}