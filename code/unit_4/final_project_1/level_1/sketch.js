var x, y;
var speedX, speedY;

function setup() {
  createCanvas(600, 400);
  noStroke();
  
  x = 0;
  y = 60; 
  speedX = 1;
  speedY = 0;
}

function draw() {
  background(131, 175, 155);
  x = x + speedX;
  y = y + speedY; 
  
  translate(x, y);

  //Face
  fill(249,205,173);//rosy beige
  ellipse(0, 0, 100, 100);

  //Eye 1
  fill(30);//dark gray
  ellipse(0, 10, 10, 10);

  //Eye 2
  ellipse(20, 10, 10, 10);

  //Mouth
  fill(252,157,154);//light pink
  arc(0, 25, 30, 30, 0, radians(180), PIE); 
}

function keyPressed() {
  if (key === 'J') { //move left
    speedX = -1;
    speedY = 0;
  } 
  else if (key === 'L') { //move right
    speedX = 1;
    speedY = 0;
  }
  else if (key === 'I') { //move up
    speedX = 0;
    speedY = -1;
  }
  else if (key === 'K') { //move down
    speedX = 0;
    speedY = 1;
  }
}