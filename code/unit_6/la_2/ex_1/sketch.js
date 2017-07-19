//bubble 1
var x1;
var y1;

//bubble 2
var x2;
var y2;


function setup() {
  createCanvas(600, 120);

  x1 = random(0, width);
  y1 = random(0, height);

  x2 = random(0, width);
  y2 = random(0, height);

}

function draw() {
  background(0);

  moveBubble1();
  displayBubble1();

  moveBubble2();
  displayBubble2();
}

function moveBubble1(){
  x1 = x1 + random(-1, 1);
  y1 = y1 + random(-1, 1);
}

function displayBubble1(){
  stroke(255);
  noFill();
  ellipse(x1, y1, 24, 24);
}

function moveBubble2(){
  x2 = x2 + random(-1, 1);
  y2 = y2 + random(-1, 1);
}

function displayBubble2(){
  stroke(255);
  noFill();
  ellipse(x2, y2, 24, 24);
}