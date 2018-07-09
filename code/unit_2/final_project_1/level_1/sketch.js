var drawingWeight;
var drawingColor;
var backgroundColor;

var yellowBtn, magentaBtn, cyanBtn;
var smallBtn, bigBtn;
var clearBtn;

function setup() {
  //Canvas
  createCanvas(600, 240);

  backgroundColor = 255;

  drawingColor = color(255, 255, 0);
  drawingWeight = 2;
}

function draw() {
  //Set drawing weight and color
  strokeWeight(drawingWeight);
  stroke(drawingColor);
  //Draw a line from the previous mouse position to the current mouse position
  line(pmouseX, pmouseY, mouseX, mouseY);
}

//When the user presses a key, this function is called:
function keyTyped() {
  //If the key is 'c', re-draw the background
  if (key == "c") {
    background(backgroundColor);
  }
  //If the key is 1, 2, or 3, change drawing color:
  else if (key == "1") {
    //yellow, with transparency = 180
    drawingColor = color(255, 255, 0, 180);
  } else if (key == "2") {
    //magenta, with transparency = 180
    drawingColor = color(255, 0, 255, 180);
  } else if (key == "3") {
    //cyan, with transparency = 180
    drawingColor = color(0, 255, 255, 180);
  }
  //If the key is = or -, change stroke weight
  else if (key == "=") {
    drawingWeight = drawingWeight + 1;

    if (drawingWeight > 70) {
      drawingWeight = 70;
    }
    strokeWeight(drawingWeight);
  } else if (key == "-") {
    drawingWeight = drawingWeight - 1;

    if (drawingWeight < 1) {
      drawingWeight = 1;
    }
    strokeWeight(drawingWeight);
  }
  return false;
}
