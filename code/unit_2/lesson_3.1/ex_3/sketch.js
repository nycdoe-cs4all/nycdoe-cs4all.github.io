var size;

function setup() {
  createCanvas(600, 120);
  textSize(50);
  noStroke();
  background(180);
  fill(255, 0, 0);

  size = 20;
}

function draw() {
  if (keyIsPressed) {
    if (key == "c") {
      //if the 'c' key is pressed, clear the screen
      background(180);
    } else if (key == "l") {
      //if the 'l' key is pressed, make the size smaller
      size--;
    } else if (key == "m") {
      //if the 'm' key is pressed, make the size bigger
      size++;
    } else if (key == "r") {
      fill(255, 0, 0);
    } else if (key == "g") {
      fill(0, 255, 0);
    } else if (key == "b") {
      fill(0, 0, 255);
    }
  }
  ellipse(mouseX, mouseY, size, size);
}
