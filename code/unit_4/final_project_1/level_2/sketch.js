var x, y;
var angle;
var eyeHeight = 10;
var mouth = 0;

function setup() { 
  createCanvas(600, 400);
  noStroke();
  x = 300; 
  y = 100;
  angle = 0;
} 

function draw() { 
  background(131, 175, 155);
  
  translate(x, y);

  //Face
  fill(249,205,173);//rosy beige
  ellipse(0, 0, 100, 100);

  //Eye 1
  fill(30);//dark gray
  ellipse(0, 10, 10, eyeHeight);

  //Eye 2
  ellipse(20, 10, 10, 10);

  //Mouth
  fill(252,157,154);//light pink
  arc(0, 25, mouth, mouth, 0, radians(180), PIE); 
  
  y = map(sin(angle), -1, 1, 50, height - 50);
  eyeHeight = map(sin(angle), -1, 1, 2, 10);
  mouth = map(sin(angle), -1, 1, 25, 30);
  
  angle += 0.04;
}
