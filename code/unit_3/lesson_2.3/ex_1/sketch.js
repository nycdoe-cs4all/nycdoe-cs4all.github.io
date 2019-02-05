var colors = ['red', 'blue', 'green']
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(i = 0; i < colors.length; i++){
    // Fill with the right color
    fill(colors[i])
    // draw a rectangle
    rect(i * 100, height / 2, 75, 75)
  }
}
