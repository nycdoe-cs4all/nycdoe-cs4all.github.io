function setup() {
  createCanvas(600, 120);
  noStroke();
}

function draw() {
  background(180);
  
  for(var x = 100; x < width; x = x + 100){
    ellipse(x, 60, 40, 40);
  }
  
}