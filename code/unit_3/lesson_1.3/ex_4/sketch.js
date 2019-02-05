
function setup() {
	createCanvas(600, 120);
}
function draw() {
	background(220);
	x = 0;
	//for(initialize;condition;increment)
	for(y = 0; y <= height; y = y+10){ //increment y by 10 so that more shapes are visible
		// multiply the x value by 5 so that horizontal spacing is 5 times greater than vertical
		ellipse(x + y, 40, 40);
		x = x+50;
	}
}
