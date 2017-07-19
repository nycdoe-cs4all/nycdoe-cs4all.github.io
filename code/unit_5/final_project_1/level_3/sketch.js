var x, y;
var radius;

function setup() {
  createCanvas(600, 400);
  ellipseMode(CENTER);
  noStroke();
  background(230);

  x = 300;
  y = 200;
  radius = 100;
  
}

function draw() {

}

function mouseClicked(){
  //pick a random number between 0 and 1
  var r = random();
  //if the number is bigger than 0.5 (which is likely to happen half of the time)
  if(r > 0.5){
    drawHappyFace(mouseX, mouseY, random());
  }
  else{
    drawSickFace(mouseX, mouseY, random());
  }
  

}

function keyPressed(){
  if(key =='C'){
    background(230);
  }
}

function drawHappyFace(x, y, s){
  push();
  translate(x,y);
  scale(s);
  //Face
  fill(249,205,173);//rosy beige
  ellipse(0, 0, radius, radius);

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

function drawSickFace(x, y, s){
  push();
  translate(x, y);
  scale(s);
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



