function setup(){
	createCanvas(600, 240);
	background(0);
	noStroke();
}

function draw() {
	fill(255, 100);
	ellipse(mouseX, mouseY, 10, 10);
}