
function setup() {
  createCanvas(600, 120);
  strokeWeight(2);
}

function draw() {
  background(204);
  for (var i = 20; i < 400; i += 20) {
    line(i, 0, i + i/2, 80);
  }
}