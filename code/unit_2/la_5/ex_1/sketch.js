function setup() {
  createCanvas(600, 120);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);
  ellipse(0, 0, 40, 40);
}