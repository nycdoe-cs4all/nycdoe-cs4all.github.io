function setup() {
  createCanvas(600, 200);
  noStroke();
}

function draw() {
  background(131, 175, 155);
  randomSeed(0);
  for (var i = 35; i < width + 40; i += 40) {
    var scalar = random(0.25, 1.0);
    drawHappyFace(i, 100, scalar);
  }
}

function drawHappyFace(x, y, s){
  push();
  translate(x, y);
  scale(s);
  //Face
  fill(249,205,173);//rosy beige
  ellipse(0, 0, 100, 100);

  //Eye 1
  fill(30);//dark gray
  ellipse(0, 10, 10, 10);

  //Eye 2
  ellipse(20, 10, 10, 10);

  //Mouth
  fill(252,157,154);//light pink
  arc(0, 25, 30, 30, 0, radians(180), PIE); 
  pop();
}
