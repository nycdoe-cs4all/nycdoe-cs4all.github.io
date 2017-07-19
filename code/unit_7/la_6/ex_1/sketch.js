var header;


function setup() { 
	header = createElement("h1", "Hover on me");
	header.mouseOver(changeText);

	createCanvas(600, 120);
} 

function draw() { 
  background(220);
}

function changeText(){
	header.html("Too late.");
}
