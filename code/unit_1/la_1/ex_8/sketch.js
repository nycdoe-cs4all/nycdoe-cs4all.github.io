
function setup() {
  createCanvas(600, 120);
}

function draw() {
  background(20);
  //face
  fill(255);
  ellipse(300, 80, 100, 100);
  
  //eye 1
  fill(0);
  ellipse(300, 90, 10, 10);
  
  //eye 2
  ellipse(320, 90, 10, 10);
  
  //mouth
  // arc(300, 225, 30, 30, 0, radians(180), PIE);
  
  //mouth
    arc(300, 105, 30, 30, 0, radians(180), PIE);
  
}