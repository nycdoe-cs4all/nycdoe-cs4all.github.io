var x, y;
var speedX, speedY;

function setup() {
  createCanvas(600, 120);
  x = 0;
  y = 60; 
  speedX = 1;
  speedY = 1
}

function draw() {
  background(0);
  x = x + speedX;
  y = y + speedY; 
  ellipse(x, y, 20, 20);
}


// var speed = 2.5;
// var x;
// var y;

// function setup() {
//   createCanvas(600, 120);
//   x = width/2;
//   y = height/2;
// }

// function draw() {
//   background(0);
//   x += random(-speed, speed);
//   y += random(-speed, speed);
//   ellipse(x, y, 20, 20);
// }

// var radius = 40;
// var x = -radius;
// var speed = 0.5;

// function setup() {
//   createCanvas(600, 120);
//   ellipseMode(RADIUS);
// }

// function draw() {
//   background(0);
//   x += speed;  // Increase the value of x

//   if (x > width+radius) {  // If the shape is off screen

//     x = -radius;  // move to the left edge

//   }
//   arc(x, 60, radius, radius, 0.52, 5.76);
// }