var r, g, b;

function setup() {
  createCanvas(600, 120);

  //set the starting color to black
  r = 0;
  g = 0;
  b = 0;
  noStroke();
}

function draw() {
    //set the fill to whatever values are held by r, g, and b
	  fill(r, g, b);
  	ellipse(mouseX, mouseY, 9, 9);
    
    if(mouseIsPressed){ // if the mouse is pressed
        //set the red, green, and blue variables to a random value
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
    }
}
