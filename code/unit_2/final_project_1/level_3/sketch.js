// Include a tool palette: buttons for picking different colors, size, stroke, rotation
var paintColor;

function setup(){
  createCanvas(600, 400);
  background(0);
  
  paintColor = color(255, 0, 0);
  
  
}

function draw(){
  if(mouseIsPressed){
    //Set the stroke color
    stroke(paintColor);

    //Draw a line from the previous mouse position to the current mouse position
    line(pmouseX, pmouseY, mouseX, mouseY);

  }

  //TOOL PALETTE
  noStroke();
  //RED
  fill(255, 0, 0);
  rect(0, 360, 200, 40);

  //GREEN
  fill(0, 255, 0);
  rect(200, 360, 200, 40);//G

  //BLUE
  fill(0, 0, 255);
  rect(400, 360, 200, 40);//B
  
 

}

function mousePressed(){
  if(360 < mouseY){
    if( 0 < mouseX && mouseX < 200) {
        //mouse is over the RED square
        paintColor = color(255, 0, 0);
    }
    else if(200 < mouseX && mouseX < 400 ){
      //mouse is over the GREEN square
      paintColor = color(0, 255, 0);

    }
    else if(400 < mouseX && mouseX < 600 ){
      paintColor = color(0, 0, 255);
    }
   
  }

}