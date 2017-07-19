function setup() {
  createCanvas(600, 120);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);
  scale(mouseX / 60.0);
  rect(-15, -15, 30, 30);
}