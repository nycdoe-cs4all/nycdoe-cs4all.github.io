function setup() {
  createCanvas(600, 120);
  background(204);
}

function draw() {
  rotate(mouseX / 100.0);
  rect(-80, -10, 160, 20);
}