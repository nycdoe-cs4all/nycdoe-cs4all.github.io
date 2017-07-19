function setup() {
  createCanvas(600, 120);
  background(204);
}

function draw() {
  var angle = map(mouseX, 0, width, 0, TWO_PI);
  translate(width/2, height/2);
  rotate(angle);
  rect(-40, -20, 80, 40);
}