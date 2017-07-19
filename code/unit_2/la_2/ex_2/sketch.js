var x, y;
var radius;

function setup() {
  createCanvas(600, 120);
  ellipseMode(CENTER);
  noStroke();

  x = 300;
  y = 60;
  radius = 40;
}

function draw() {
  background(230);
  var d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(x, y, radius, radius);
}