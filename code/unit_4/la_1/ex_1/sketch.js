var x; 

function setup() {
  createCanvas(600, 120);
  x = 0; // Start at the left edge of the canvas
}

function draw() {
  background(0);
  x = x + 1;  // Move slightly to the right

  ellipse(x, 60, 20, 20);
}