function setup() {
  createCanvas(600, 120);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);
  ellipse(0, 0, 40, 40);
  ellipse(5, 5, 10, 10);
  ellipse(-5, -5, 5, 5);
  ellipse(55, 10, 10, 10);
  ellipse(-55, -5, 5, 5);
}