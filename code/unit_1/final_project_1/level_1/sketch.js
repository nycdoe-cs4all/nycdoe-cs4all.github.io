
function setup() {
  createCanvas(600, 400);
  
  //Use the Hue, Saturation, Brightness color model
  colorMode(HSB);

  //Turn off drawing strokes
  noStroke();

  //Draw rectangles from their center 
  //(makes it easier to center it on the screen)
  rectMode(CENTER);

  //Only run the draw loop once. Try commenting this out and see what happens.
  noLoop();

}

function draw() {
  //Set the background color
  background( 0, //hue. the background would be red if the saturation wasn't zero.
              0, //saturation. zero means no color (black, gray, white)
              random(100)); //brightness. this will be a shade of gray, between 0 (black), and 100 (white)
  
  //brightness: 100 gives us a light color
  fill( random(0, 90), //hue. a color between red (when 0), and green (when 90)
        100, //saturation. 100 means the color is vibrant.
        100);//brightness. 100 means maximum light.

  //Draw the rectangle
  rect(width/2, //x. width/2 indicates the horizontal center of the canvas.
      height/2, //y. height/2 indicates the vertical center of the canvas.
      random(width/3, 2*width/3), //width. this will be between a third of the width of the and two thirds.
      random(height/3, 2*height/3));//height. this will be between a third of the height of the canvas and two thirds.
    
}
