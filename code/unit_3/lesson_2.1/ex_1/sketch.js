var colors = ['red', 'blue', 'green'];
function setup() {
  createCanvas(600, 120);
}

function draw() {
  background(220);
	// fill with our first color from the array
	fill(colors[0]);
	rect(265, 0, 70, 40);
  
	fill(colors[1]);
	rect(265, 40, 70, 40);

  fill(colors[2]);
  rect(265, 80, 70, 40);
}
