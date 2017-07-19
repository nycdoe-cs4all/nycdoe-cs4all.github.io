var x = [-20, 20];

function setup() {
  createCanvas(600, 120);
  noStroke();
}

function draw() {

  background(0);
  x[0] += 0.5;  
  x[1] += 0.5;  

  
  arc(x[0], 30, 40, 40, 0.52, 5.76);
  arc(x[1], 90, 40, 40, 0.52, 5.76);
}