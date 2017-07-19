function setup() {
  createCanvas(600, 120);
  background(204);
}

function draw() {
  push();
  translate(mouseX, mouseY);
  rect(0, 0, 30, 30);
  pop();
  translate(width/2, height/2);
  fill(255, 0, 0);
  rect(-15, -15, 30, 30);
}