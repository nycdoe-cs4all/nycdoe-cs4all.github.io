function setup() {
  createCanvas(600, 120);
}

function draw() {
  rectMode(CENTER);
  background(220);

  //on condition that mouseX is between 200 and 400
  if (mouseX > 200 && mouseX < 400) {
    ellipse(width / 2, height / 2, 40, 40); //draw and ellipse
  } else {
    rect(width / 2, height / 2, 40, 40); //draw a rect
  }

}
