// TODO: move to later unit
function setup() {
  createCanvas(600, 200);
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
    background(120);
    fill(255);
    noStroke();
    
    fill(0);
    // var eyeX = map(distanceToMiddleX(mouseX), -width/2, width/2, -10, 10);
    // var eyeY = map(distanceToMiddleY(mouseY), -height/2, height/2, -10, 10);
    
    drawHappyFace(width/2, height/2, eyeOffset(mouseX, mouseY));
    
}

function eyeOffset(x, y){ 
  var offset = {
     x: map(x - width/2, -width/2, width/2, -10, 10),
     y: map(y - height/2, -height/2, height/2, -10, 10)
  }
  return offset;
  // console.log(asin(abs(y-height/2), abs(x-width/2)));
}

function drawHappyFace(x, y, offset){
  push();
  translate(x, y);
  // scale(s);
  //Face
  fill(249,205,173);//rosy beige
  ellipse(0, 0, 100, 100);
  
  //Eye 1
  fill(255);
  ellipse(0, 10, 20, 20);
  
  //Eye 2
  fill(255);
  ellipse(20, 10, 20, 20);
  
  //pupils
  fill(30);//dark gray  
  ellipse(0 + offset.x, 10 + offset.y, 5, 5);
  ellipse(20 + offset.x, 10 + offset.y, 5, 5);
  

  //Mouth
  fill(252,157,154);//light pink
  arc(0, 25, 30, 30, 0, radians(180), PIE); 
  pop();
}