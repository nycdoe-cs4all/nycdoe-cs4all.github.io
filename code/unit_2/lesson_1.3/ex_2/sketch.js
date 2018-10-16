function setup() {
  createCanvas(600, 120);
}

function draw() {
  rectMode(CENTER);
  background(220);
  rectMode(CENTER);

  //if the mouse is between 100-200 OR 400-500, draw an ellipse
  if (mouseX > 100 && mouseX < 200 || mouseX > 400 && mouseX < 500) {
    ellipse(width / 2, height / 2, 40, 40) //draw and ellipse
  } else {
    rect(width / 2, height / 2, 40, 40) //draw a rect
  }

}
