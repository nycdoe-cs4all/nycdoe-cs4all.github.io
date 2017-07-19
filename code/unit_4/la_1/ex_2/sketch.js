var x; 

function setup() {
  createCanvas(600, 120);
  x = 0; // Start at the left edge of the canvas
}

function draw() {
  background(0);
  x = x + 1;  // Move slightly to the right

  if (x > 600){ // If reached the right edge of the canvas, go back to the left edge
  	x = 0;
  }

  ellipse(x, 60, 20, 20);
}