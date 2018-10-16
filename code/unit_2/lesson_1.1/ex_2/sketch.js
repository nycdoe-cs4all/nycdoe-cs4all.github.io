function setup() {
  createCanvas(600, 120);
}

function draw() {
  //set the rectMode to center
  rectMode(CENTER);
  background(0);
  //set the initial fill to red
  fill(255, 0, 0);

  if (mouseX > 300) {
    //if mouseX > 300 change the fill to blue
    fill(0, 0, 255);
  }
  //draw a rect at the center of the canvas
  rect(width / 2, height / 2, 50, 50);
}
