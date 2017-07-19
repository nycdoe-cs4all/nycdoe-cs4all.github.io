// x and y position arrays
var x = [];
var y = [];


function setup() {
  createCanvas(600, 120);

  //fill the array using a for loop
  for(var i = 0; i < 30; i++){
    x[i] = random(0, width);
    y[i] = random(0, height);
  }

}

function draw() {
  background(0);

  moveBubbles();
  displayBubbles();
  
}

function moveBubbles(){
  for(var i = 0; i < 30; i++){
    x[i] = x[i] + random(-1, 1);
    y[i] = y[i] + random(-1, 1);
  }
}

function displayBubbles(){
  stroke(255);
  noFill();

  for(var i = 0; i < 30; i++){
    ellipse(x[i], y[i], 24, 24);
  }

}
