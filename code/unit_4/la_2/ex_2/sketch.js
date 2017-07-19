var speedX = 2.5;
var speedY= 1.6;
var x;
var y;

function setup() {
  createCanvas(600, 120);
  x = width/2;
  y = height/2;
}

function draw() {
  background(0);
  x = x + random(-speedX, speedX);
  y = y + random(-speedY, speedY);
  ellipse(x, y, 20, 20);
}