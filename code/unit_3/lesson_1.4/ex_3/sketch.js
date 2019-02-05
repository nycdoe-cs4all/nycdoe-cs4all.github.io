function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(220);

	for (var x = 100; x < width; x = x + 100) {
		ellipse(x,200,x/10,x/10)
	}

}
