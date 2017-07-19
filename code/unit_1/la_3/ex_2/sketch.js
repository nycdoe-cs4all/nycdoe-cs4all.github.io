function setup() {
  createCanvas(600, 120);

}

function draw() {
  background(0);
  noStroke();

  // Set the fill color to red
  fill(255, 0, 0, 250);//set transparency to 250
  rect(152, 0, 60, height);

  // Set the fill color to green
  fill(0, 255, 0, 180);//set transparency to 180
  rect(0, 66, width, 40);

  // Set the fill color to blue
  fill(0, 0, 255, 70);//set transparency to 70
  rect(285, 0, 80, height);

  
}