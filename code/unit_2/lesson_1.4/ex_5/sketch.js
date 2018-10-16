function setup(){
	createCanvas(600, 240);
	background(0);
	strokeWeight(10);
	stroke(255, 100);
}

function draw() {
	
	line(mouseX, mouseY, pmouseX, pmouseY);
}