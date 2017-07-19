function setup() {
  createCanvas(600, 120);
}

function draw() {
  background(204);
  line(20, 20, 220, 100);
  if (touchIsStarted) {
    line(220, 20, 20, 100);
  }
}