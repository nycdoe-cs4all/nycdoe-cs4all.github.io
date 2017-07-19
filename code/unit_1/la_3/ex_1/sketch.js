function setup() {
  createCanvas(600, 120);

}

function draw() {
  background(0);
  noStroke();

  // Set the fill color to red
  fill(255, 0, 0);
  rect(152, 0, 60, height);

  // Set the fill color to green
  fill(0, 255, 0);
  rect(0, 66, width, 40);

  // Set the fill color to blue
  fill(0, 0, 255);
  rect(285, 0, 80, height);

  
}