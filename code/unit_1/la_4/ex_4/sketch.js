function setup() {
  createCanvas(600, 120);
  noStroke();
}

function draw() {
  background(180);
  
  for(var x = 30; x < width; x = x + 30){
    ellipse(x, 30, 15, 15);
  }
  for(var y = 30; y < height; y = y + 30){
    ellipse(30, y, 15, 15);
  }
  
}