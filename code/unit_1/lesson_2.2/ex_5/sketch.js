var x; //declare a variable for the x location
var y; //declare a variable for the y location

function setup() {
  createCanvas(500, 500);
  x = 250;
  y = 250;
}

function draw() {
  background(150);
  fill(255);
  ellipse(x, y, 200, 200);
  fill(0);
  ellipse(220, 220, 30, 30);
  ellipse(280, 220, 30, 30);
  rectMode(CENTER);
  rect(250, 280, 100, 20);
}
