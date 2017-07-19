var x, y;
var radius;

function setup() {
  createCanvas(600, 200);
	ellipseMode(CENTER);
  noStroke();

  x = 300;
  y = 100;
  radius = 40;
  
}

function draw() {
    background(230);
		if(mouseIsOverEllipse()){
			fill(0);
		}
		else{
			fill(255);
		}
		ellipse(x, y, radius, radius);
}

function mouseIsOverEllipse(){
	var result;
  var d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    result = true;
  } else {
    result = false;
  }
  return result;
}