
function setup() {
  createCanvas(600, 600);
  background(0);

  noLoop();
  
}

function draw() {

  stroke(255);
  fill(0);

  beginShape();
  vertex(0, 200);
  vertex(200, 200);
  vertex(220, random(100, 200));
  vertex(240, random(100, 200));
  vertex(260, random(100, 200));
  vertex(280, random(100, 200));
  vertex(300, random(100, 200));
  vertex(320, random(100, 200));
  vertex(340, random(100, 200));
  vertex(360, random(100, 200));
  vertex(380, random(100, 200));
  vertex(400, 200);
  vertex(width, 200);
  endShape();

  beginShape();
  vertex(0, 250);
  vertex(200, 250);
  vertex(220, random(150, 250));
  vertex(240, random(150, 250));
  vertex(260, random(150, 250));
  vertex(280, random(150, 250));
  vertex(300, random(150, 250));
  vertex(320, random(150, 250));
  vertex(340, random(150, 250));
  vertex(360, random(150, 250));
  vertex(380, random(150, 250));
  vertex(400, 250);
  vertex(width, 250);
  endShape();

  beginShape();
  vertex(0, 300);
  vertex(200, 300);
  vertex(220, random(200, 300));
  vertex(240, random(200, 300));
  vertex(260, random(200, 300));
  vertex(280, random(200, 300));
  vertex(300, random(200, 300));
  vertex(320, random(200, 300));
  vertex(340, random(200, 300));
  vertex(360, random(200, 300));
  vertex(380, random(200, 300));
  vertex(400, 300);
  vertex(width, 300);
  endShape();
  
  
}