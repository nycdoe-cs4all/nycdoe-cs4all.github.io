function setup() {
  createCanvas(600, 200);
}

function draw() {
  background(220);

  for (var x = 0; x < width; x = x + 100) {
      fill(0,0,x);

    ellipse(x, 100, 40, 40);
  }
}
