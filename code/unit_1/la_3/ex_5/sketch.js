function setup() {
  createCanvas(600, 120);
  noStroke();

  //Change color mode
  colorMode(HSB);
}

function draw() {
  background(0);

  // Set the fill color to red
  fill(360, 100, 100);
  rect(152, 0, 60, height);

  // Set the fill color to green
  fill(120, 100, 100);
  rect(0, 66, width, 40);

  // Set the fill color to blue
  fill(240, 100, 100);
  rect(285, 0, 80, height);
  
}


