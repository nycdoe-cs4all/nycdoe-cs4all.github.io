function setup() {
  createCanvas(600, 120);
}

function draw() {
  //set the background to a light gray
  background(204);

  //TRIANGLE
  fill(230); //set the fill color to a middle gray
  noStroke(0); //set the stroke color to black
  triangle(65, 88, 74, 38, 115, 71);

  //QUAD
  //because we don't set fill and stroke to be different before
  //calling the quad function, it will be drawn with the 
  //same settings as the triangle
  quad(370, 56, 404, 31, 432, 80, 397, 78);
  
  //SPIKY SHAPE
  fill(130); //set the fill color to a middle gray
  stroke(0); //set the stroke color to black
  strokeWeight(5); //set the stroke weight to 5

  beginShape();
  vertex(225, 43);
  vertex(245, 50);
  vertex(247, 36);
  vertex(265, 50);
  vertex(290, 53);
  vertex(262, 56);
  vertex(278, 85);
  vertex(251, 66);
  vertex(210, 70);
  vertex(230, 55);  
  endShape(CLOSE);
  
  //ARC
  fill(20); //set the fill color to a dark gray
  stroke(255); //set the stroke color to white
  strokeWeight(2); //set the stroke weight
  arc(527, 57, 40, 40, 0, 2*PI/3);
  
  
  //To help you find the right point positions, use this line:
  fill(0); //set the fill color to black
  noStroke(); //set the stroke to none
  text(mouseX + ", " + mouseY, 20, 20);
  //We will explain how it works later on.
}

