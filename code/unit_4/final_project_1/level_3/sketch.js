
var angle = 0;
var x = 300;
var y = 100;
var s = 1; 
var h; 

function setup() { 
  createCanvas(600, 400);
  colorMode(HSB);
  noStroke();
} 

function draw() { 
  background(100, 4, 80);
  x = width/2 + cos(angle) * s; 
  y = height/2 + sin(angle) * s;
  s = s + 0.2;
  mouthHeight = map(sin(angle), -1, 1, 30, 80);
  h = map(sin(angle), -1, 1, 50+s/10, 50+s/5);
  
  translate(x, y);

  //Face
  fill(h,205,173);//rosy beige
  ellipse(0, 0, 100, 100);

  //Eye 1
  fill(30);//dark gray
  ellipse(0, 10, 10, 10);

  //Eye 2
  ellipse(20, 10, 10, 10);

  //Mouth
  fill(340,55,80);//light pink
  beginShape();
  curveVertex(-15,  mouthHeight);
  curveVertex(-15,  30);
  curveVertex(15,  30);
  curveVertex(15, mouthHeight);
  endShape();
  
  angle += 0.03;
  
}

  