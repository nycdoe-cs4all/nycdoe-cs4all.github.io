function setup(){
	createCanvas(600, 240);

	background(0);
	stroke(255, 100);
}

function draw() {
	var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
	strokeWeight(weight);
	line(mouseX, mouseY, pmouseX, pmouseY);
}


