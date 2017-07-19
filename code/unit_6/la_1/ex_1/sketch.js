var x;
var y;


function setup() {
  createCanvas(600, 120);

  x = random(0, width);
  y = random(0, height);

}

function draw() {
  background(0);

  moveBubble();
  displayBubble();
}


function moveBubble(){
  x = x + random(-1, 1);
  y = y + random(-1, 1);
}

function displayBubble(){
  stroke(255);
  noFill();
  ellipse(x, y, 24, 24);
}