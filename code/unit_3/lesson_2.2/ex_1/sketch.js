var colors = ['red', 'blue', 'green', 'orange', 'white'];
var color1, color2;

function setup() {
  createCanvas(400, 400);
  color1 = colors[floor(random(0, colors.length))];
	color2 = colors[floor(random(0, colors.length))];
}

function draw() {
  background(220);
  rectMode(CENTER);
  fill(color1)
  rect(100,100,100,100);
  fill(color2)
  ellipse(300,250,100);
}
