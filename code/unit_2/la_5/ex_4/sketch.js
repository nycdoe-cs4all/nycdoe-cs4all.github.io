function setup() {
  createCanvas(600, 120);
  background(204);
}

function draw() {
  var angle = map(mouseY, 0, height, 0, TWO_PI);
  rotate(angle);
  rect(60, 60, 80, 40);
}