function setup() {
  createCanvas(600, 120);
}

function draw() {
  background(204);

  //Draw a triangle by setting the (x, y) 
  //coordinates of its three vertices
  triangle(65, 88, 74, 38, 115, 71);

  //Draw a quadrilateral by setting the (x, y) 
  //coordinates of its four vertices
  quad(370, 56, 404, 31, 432, 80, 397, 78);
  
  //Draw a shape by setting the coordinates to each of its vertices, 
  //however many you would like
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
  endShape();
  //If you would like your shape to close:
  //endShape(CLOSE);
  
  //Draw an arc at position (527, 57), of width=40 and height=40, 
  //from zero radians to PI/4 radians 
  //(PI radians are 180 degrees; PI/4 are 45 degrees)
  arc(527, 57, 40, 40, 0, PI/4);
  //See more documentation about arcs here: http://p5js.org/reference/#/p5/arc
  
  
  //To help you find the right point positions, use this line:
  text(mouseX + ", " + mouseY, 20, 20);
  //We will explain how it works later on.
}