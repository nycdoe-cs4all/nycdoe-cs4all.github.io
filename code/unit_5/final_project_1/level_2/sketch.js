var x, y;
var radius;
var blink;

function setup() {
  createCanvas(600, 400);
  ellipseMode(CENTER);
  noStroke();
  
  x = 300; 
  y = 200;
  radius = 100;
  blink = false;
}

function draw() {
    background(230);
    if(mouseIsOver()){
      blink = true;
    }
    else{
      blink = false;
    }
  
    if(key == 's'){
      sick();
    }
    else{
      happy();
    }
  
    
}

function happy(){
  push();
  translate(x, y);
  
  //Face
  fill(249,205,173);//rosy beige
  ellipse(0, 0, 100, 100);
  
  //Eye 1
  fill(30);//dark gray
  ellipse(0, 10, 10, 10);
  
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

function sick(){
  push();
  translate(x, y);
  
  //Face
  fill(233,247,172);//greenish
  ellipse(0, 0, 100, 100);
  
  //Eye 1
  stroke(30);//dark gray
  strokeWeight(2);
  line(-5, 5, 5, 15);
  line(-5, 15, 5, 5);
  
  //Eye 2
  line(15, 5, 25, 15);
  line(15, 15, 25, 5);

  //Mouth
  line(-10, 28, 10, 28);
  
  pop();
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

