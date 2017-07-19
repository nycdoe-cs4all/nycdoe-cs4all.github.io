

function setup() {
  createCanvas(600, 120);

  noStroke();
}

function draw() {
    //draw a light gray rectangle covering the left half of the canvas
    fill(230);
    rect(0, 0, width/2, height);

    //draw a black rectangle over the right half of the canvas
    fill(0);
    rect(width/2, 0, width/2, height);

    if(mouseX > width/2){ //if the mouse is on the right side of the canvas
      //set the fill to light gray
      fill(230);
    }
    else{//otherwise
      //set the fill to black
      fill(0);
    }
    //draw an ellipse at the position of the mouse
  	ellipse(mouseX, mouseY, 30, 30);
}
