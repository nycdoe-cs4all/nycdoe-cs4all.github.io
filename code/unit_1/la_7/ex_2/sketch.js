var x = 25;
var h = 20;
var y = 25;

function setup() {
  createCanvas(600, 120);
  
  background(204);
  rect(x, y, 300, h);        // Top
  x = x + 10;
  rect(x, y + h, 300, h);    // Middle
  x = x - 25;
  rect(x, y + h*2, 300, h);  // Bottom
}

function draw() {
  
  
}