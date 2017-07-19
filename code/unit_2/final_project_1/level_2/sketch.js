// Use transform functions to change the brush size, rotation, position relative to the mouse. 

var angle;
var scaleFactor;
var increment;
var position;




function setup(){
  createCanvas(600, 600);
  background(0);

  angle = 0;
  scaleFactor = 1;
  increment = 1;
  
}

function draw(){
  //Set the stroke color
  stroke(255, 0, 0);

  //Draw a line from the previous mouse position to the current mouse position
  push();
  translate(mouseX, mouseY);
  scale(scaleFactor);
  rotate(radians(angle));
  fill(255);
  triangle(-20, 20, 0, -20, 20, 20);
  pop();
  
}

//When the user presses a key, this function is called: 
function keyTyped(){
  
  //If the key is the 'c', re-draw the background
  if(key == 'c'){
    background(0);
  }
  if(key == 'r'){
    angle = angle + 10;
  }
  if(key == 's'){
    scaleFactor = scaleFactor + increment;
    if(scaleFactor > 1.5 || scaleFactor < 0.5){
      increment = -increment;
    }
    console.log(scaleFactor);
  }

  
  return false;
}