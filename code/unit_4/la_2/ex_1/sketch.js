var x, y;
var speedX, speedY;

function setup() {
  createCanvas(600, 120);
  x = 0;
  y = 60; 
  speedX = 1;
  speedY = 1
}

function draw() {
  background(0);
  x = x + speedX;
  y = y + speedY; 
  ellipse(x, y, 20, 20);
}
