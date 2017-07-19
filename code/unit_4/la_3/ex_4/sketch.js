
//TO USE in LA 3: change gray value with SIN

// <p>For example, below, we calculate the sine of a growing angle, and map the result to a value between 0 and 255  Then we use this value to set the background color of the sketch. As you can see, it cycles smoothly from black, through all gradations of gray, to white, and then back, forever: </p>

// var angle = 0.0;

// function setup() {
//   createCanvas(600, 120);
// }

// function draw() {
//   var sinval = sin(angle);
//   print(sinval);
//   var gray = map(sinval, -1, 1, 0, 255);
//   background(gray);
//   angle += 0.1;
// }

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