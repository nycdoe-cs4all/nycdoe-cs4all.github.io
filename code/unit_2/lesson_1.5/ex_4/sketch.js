function setup() {
  createCanvas(600, 120);
  colorMode(HSB);
  
}

function draw() {
  //map the mouseX from its original range (from 0 to the width of the canvas)
  //to our desired range (from 0, or red, throught the entire color wheel, and back to red at 360)
  var hue = map(mouseX, 0, width, 0, 360);
  background(hue, 100, 100);  
}