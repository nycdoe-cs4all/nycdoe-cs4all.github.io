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
  ellipse(x, y, 200, 200); //Use
  fill(0);
  ellipse(x - 30, y - 30, 30, 30); //left eye
  ellipse(x + 30, y - 30, 30, 30); //right eye
  rectMode(CENTER);
  rect(x, y + 30, 100, 20); //mouth
}
