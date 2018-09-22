//Declare variables
var x;
var y;

function setup() {
  createCanvas(600, 120);

  //Initialize variables
  x = random(50, 550);
  y = random(50, 70);

}

function draw() {
  strokeWeight(4);
  stroke(30);//dark gray

  background(150,189,255);//sky blue

  //Face
  fill(255,181,61);//emoji yellow
  ellipse(x, y, 100, 100);

  //Eye 1
  fill(30);//dark gray
  ellipse(x, y+10, 10, 10);

  //Eye 2
  ellipse(x+20, y+10, 10, 10);

  //Mouth
  fill(255,98,59);//reddish orange
  arc(x, y+25, 30, 30, 0, radians(180), PIE);

  //Add a border
  noFill();
  rect(2, 2, width-4, height-4);

}
