function setup() {
  createCanvas(600, 120);
  
}

function draw() {
  //map the mouseX from its original range (from 0 to the width of the canvas)
  //to our desired range (from 0, or black, to 255, or white)
  var gray = map(mouseX, 0, width, 0, 255);
  background(gray);  
}