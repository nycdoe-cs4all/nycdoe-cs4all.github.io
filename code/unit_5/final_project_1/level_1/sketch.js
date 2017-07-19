var x, y;
var radius;

function setup() {
  createCanvas(600, 400);
  ellipseMode(CENTER);
  noStroke();

  x = 300;
  y = 200;
  radius = 100;
  
}

function draw() {
    background(230);
    if(mouseIsOver()){
      drawHappyFace(x,y,true);
    }
    else{
      drawHappyFace(x,y,false);
    }
    
}

function mouseIsOver(){
  var result;
  var d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function drawHappyFace(x, y, blink){
  push();
  translate(x,y);
  //Face
  fill(249,205,173);//rosy beige
  ellipse(0, 0, radius, radius);

  //Eye 1
  fill(30);//dark gray
  ellipse(0, 10, 10, 10);

  //Eye 2
  if(blink){
    rect(10, 10, 10, 2);
  }
  else{
    ellipse(20, 10, 10, 10);
  }
  

  //Mouth
  fill(252,157,154);//light pink
  arc(0, 25, 30, 30, 0, radians(180), PIE); 
  pop();
}