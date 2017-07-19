var r, g, b;

//rectangle button
var x = 80;
var y = 30;
var w = 80;
var h = 60;

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

  	  //draw the rectangle button over the mouse trail
  	  rect(x, y, w, h);

}

//whenever the mouse is pressed
function mousePressed(){
	//if the mouse is over the rectangle
	if ((mouseX > x) && (mouseX < x+w) &&
	    (mouseY > y) && (mouseY < y+h)) {

	    //set the red, green, and blue variables to a random value
	    r = random(0, 255); 
	    g = random(0, 255); 
	    b = random(0, 255);

	  } 
    
}