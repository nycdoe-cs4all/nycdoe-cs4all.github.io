function setup() {
  createCanvas(600, 120);
}

function draw() {
  var x = 10; //set the initial size to 10

  rectMode(CENTER); //set the rectMode to center
  background(0);
  fill(255, 0, 0); //set the initial fill to red

  if (mouseX > 200) {
    x = 60;
  }
  //draw a rect at the center of the canvas
  rect(width / 2, height / 2, x, x);
}
