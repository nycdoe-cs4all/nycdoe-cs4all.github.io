

function setup() {
  createCanvas(600, 400);
  background(0);
  
  //Use the Hue, Saturation, Brightness color model
  colorMode(HSB);

  //Draw rectangles from their center (makes it easier to center it in the screen)
  rectMode(CENTER);

  //Only run the draw loop once
  noLoop();

  //Turn off drawing strokes
  noStroke();
  
}

function draw() {
  //Pick a size for the square, between a third of the width of the canvas and two thirds.
  var size = random(width/3, 2*width/3);

  //Pick a color for the square
  var hue = random(0, 90); //somewhere between red(0) and green(90). see color wheels here: 
  var saturation = 100; //make the color saturated
  var brightness = 100; //make the color bright

  //For the background, take the hue of the square and get the opposite hue in the color wheel, by adding 180 degrees to it
  //Keep the saturation and brightness the same
  background(hue + 180, saturation, brightness);
  
  //set the fill for the square
  fill(hue, saturation, brightness);

  //Draw the square
  rect(width/2, height/2, size, size);
  
}
