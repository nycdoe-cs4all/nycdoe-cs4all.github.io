var colors = ['red','orange', 'yellow', 'green', 'blue', 'indigo', 'purple']
var sizes = [40, 45, 50, 60, 75, 85, 100];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  var position = sizes[0] / 2;
  for(i = 0; i < colors.length; i++){
    fill(colors[i]);
    ellipse(width / 2, position, sizes[i])
  	position = position + sizes[i]
  }
}
