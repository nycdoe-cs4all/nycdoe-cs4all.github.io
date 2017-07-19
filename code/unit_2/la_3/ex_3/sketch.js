var size;

function setup() {
  createCanvas(600, 120);
  textSize(50);
  noStroke();
  background(180);

  size = 20;
}

function draw() {
  

  if (keyIsPressed) {
    if(key == ' '){ //if the space key is pressed, clear the screen
      background(180);
    }
    else if(key == 'L'){ //if the 'b' key is pressed, make the size bigger
      size++;
    }
    else if(key == 'M'){ //if the 's' key is pressed, make the size smaller
      size--;
    }
    else if(key == 'r'){
      fill(255, 0, 0); 
      text("r", 20, 20);
    }
    else if(key == 'g'){
      fill(0, 255, 0);
      text("g", 20, 20);
    }
    else if(key == 'b'){
      fill(0, 0, 255); 
      text("b", 20, 20);
    }
    
  }
  
  ellipse(mouseX, mouseY, size, size);

}