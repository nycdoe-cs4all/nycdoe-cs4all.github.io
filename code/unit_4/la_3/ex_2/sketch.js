var angle = 0.0;
var offset = 60;
var scalar = 30;
var speed = 0.05;

function setup() {
  createCanvas(600, 120);
  background(204);
}

function draw() {
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  ellipse( x, y, 40, 40);
  angle += speed;
}

//skip this one: 
// var angle = 0.0;
// var speed = 0.05;

// function setup() {
//   createCanvas(600, 120);
// }

// function draw() {
//   background(0);
//   var y1 = 60 + sin(angle) * 40;
//   var y2 = 60 + sin(angle + 0.4) * 40;
//   var y3 = 60 + sin(angle + 0.8) * 40;
//   ellipse( 80, y1, 40, 40);
//   ellipse(120, y2, 40, 40);
//   ellipse(160, y3, 40, 40);
//   angle += speed;
// }