//bubble x and y arrays
var x = [];
var y = [];


function setup() {
  createCanvas(600, 120);
  //Bubble 1 x and y positions
  x[0] = random(0, width);
  y[0] = random(0, height);

  //Bubble 2 x and y positions
  x[1] = random(0, width);
  y[1] = random(0, height);

  //Bubble 3 x and y positions
  x[2] = random(0, width);
  y[2] = random(0, height);

}

function draw() {
  background(0);

  moveBubbles();
  displayBubbles();
  
}

function moveBubbles(){
  //move Bubble 1
  x[0] = x[0] + random(-1, 1);
  y[0] = y[0] + random(-1, 1);

  //move Bubble 2
  x[1] = x[1] + random(-1, 1);
  y[1] = y[1] + random(-1, 1);

  //move Bubble 3
  x[2] = x[2] + random(-1, 1);
  y[2] = y[2] + random(-1, 1);
}

function displayBubbles(){
  stroke(255);
  noFill();

  //display Bubble 1
  ellipse(x[0], y[0], 24, 24);

  //display Bubble 2
  ellipse(x[1], y[1], 24, 24);

  //display Bubble 3
  ellipse(x[2], y[2], 24, 24);
}
