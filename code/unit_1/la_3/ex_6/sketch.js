//Declare variables
var x;
var y;

var backgroundHue;
var faceHue;
var backgroundGrayValue;
var mouthHue;

function setup() {
  createCanvas(600, 120);
  noStroke();

  //Initialize variables
  x = random(50, 550);
  y = random(50, 70);

  //Set the color mode to HSB
  colorMode(HSB);

  // Pick a greenish-blue hue value for the background
  backgroundHue = random(153, 182);

  // Pick a pinkish-yellow hue for the face
  faceHue = random(12, 53);

  // Pick a dark gray for the eyes
  backgroundGray = random(10, 30);

  // Pick a pinkishRed for the mouth
  mouthHue = random(340, 350);

}

function draw() {

  background(backgroundHue, 46, 75);//sky blue

  //Face
  fill(faceHue, 22, 96);//emoji yellow
  ellipse(x, y, 100, 100);
  
  //Eye 1
  fill(backgroundGray);//dark gray
  ellipse(x, y+10, 10, 10);
  
  //Eye 2
  ellipse(x+20, y+10, 10, 10);
  
  //Mouth
  fill(mouthHue, 55, 80);//reddish orange
  arc(x, y+25, 30, 30, 0, radians(180), PIE);  

  
  
}