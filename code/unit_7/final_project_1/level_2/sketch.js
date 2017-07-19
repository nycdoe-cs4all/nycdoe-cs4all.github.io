//HTML INTERFACE VARS
var yellowBtn, magentaBtn, cyanBtn;
var smallBtn, bigBtn;
var clearBtn;

//CANVAS VARS
var drawingWeight;
var drawingColor;
var backgroundColor;

function setup(){
  
  createCanvas(600, 240);

  backgroundColor = 255;

  drawingColor = color(255, 255, 0);
  drawingWeight = 2;
  
  //HTML INTERFACE
  createP("Stroke Controls");
  yellowBtn = createButton("Yellow");
  magentaBtn = createButton("Magenta");
  cyanBtn = createButton("Cyan");
  createP("");

  smallBtn = createButton("Small");
  bigBtn = createButton("Big");
  
  createP("");
  clearBtn = createButton("Clear");

  yellowBtn.mousePressed(yellow);
  magentaBtn.mousePressed(magenta);
  cyanBtn.mousePressed(cyan);
  smallBtn.mousePressed(smaller);
  bigBtn.mousePressed(bigger);
  clearBtn.mousePressed(clear);
  
}

function draw(){
  
  //Set drawing weight and color
  strokeWeight(drawingWeight);
  stroke(drawingColor);
  //Draw a line from the previous mouse position to the current mouse position
  line(pmouseX, pmouseY, mouseX, mouseY);
  
}

function yellow(){
  //yellow, with transparency = 180
  drawingColor = color(255, 255, 0, 180);
}

function magenta(){
  //magenta, with transparency = 180
  drawingColor = color(255, 0, 255, 180);
}

function cyan(){
  //cyan, with transparency = 180
  drawingColor = color(0, 255, 255, 180);
}

function smaller(){
  drawingWeight = drawingWeight - 1;

    if(drawingWeight < 1){
      drawingWeight = 1;
    }
    strokeWeight(drawingWeight);
}

function bigger(){
  drawingWeight = drawingWeight + 1;

    if(drawingWeight > 70){
      drawingWeight = 70;
    }
    strokeWeight(drawingWeight);
}

function clear(){
  background(backgroundColor);
}

//When the user presses a key, this function is called: 
function keyTyped(){
  
  //If the key is 'c', re-draw the background
  if(key == 'c'){
    clear();
  }
  //If the key is 1, 2, or 3, change drawing color:
  else if(key == '1'){
    yellow();
  }
  else if(key == '2'){
    magenta();
  }
  else if(key == '3'){
    cyan();
  }
  //If the key is = or -, change stroke weight
  else if(key == '='){
    bigger();
  }
  else if(key == '-'){
    smaller();
  }
  return false;
}