function setup() {
  createCanvas(600, 120);
}

function draw() {
  //map the mouseX from its original range (from 0 to the width of the canvas)
  //to our desired range (from 0, or red, throught the entire color wheel, and back to red at 360)
  var r = map(mouseX, 0, width, 0, 255);
  var g = map(mouseY, 0, height, 255, 0);

  background(r, g, 0);  
}