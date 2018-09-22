function setup() {
  createCanvas(600, 120);
}

function draw() {
  background(220);
  fill(255);
  ellipse(300, 60, 100, 100);
  fill(0);
  ellipse(280, 40, 10, 10);
  ellipse(320, 40, 10, 10);
  rectMode(CENTER);
  rect(300, 70, 30, 10);
}
