function setup() {
  createCanvas(600, 120);
  noLoop();
}

function draw() {
  background(20);
  
  //Declare and initialize variables
  var x = random(0, width);
  var y = random(0, height/2);

  //Face
  fill(255);
  ellipse(x, y, 100, 100);
  
  //Eye 1
  fill(0);
  ellipse(x, y+10, 10, 10);
  
  //Eye 2
  ellipse(x+20, y+10, 10, 10);
  
  //Mouth
    arc(x, y+25, 30, 30, 0, radians(180), PIE);
  
}