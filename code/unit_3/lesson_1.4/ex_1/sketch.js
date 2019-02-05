function setup() {
	createCanvas(600, 120);
	noStroke();
}

function draw() {
	background(180);

	///(initialize the variable; check for a condition; increment the variable)
	for (var x = 100; x < width; x = x + 100) {

		//draw an ellipse with the x location of the variable called x
		//set the size to x/10
		ellipse(x, 60, x / 10, x / 10);
	}

}
