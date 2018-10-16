var x, y;
var diameter;

function setup() {
  createCanvas(600, 120);
  ellipseMode(CENTER);
  noStroke();

  x = 300;
  y = 60;
  diameter = 40;
}

function draw() {
  background(230);
  var d = dist(mouseX, mouseY, x, y);
  if (d < diameter/2) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(x, y, diameter, diameter);
}