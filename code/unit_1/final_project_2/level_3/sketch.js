
//Try changing the value of these two variables:
var rows = 20;
var points = 10;

function setup() {
  createCanvas(600, 600);
  background(0);

  noLoop();
  
}

function draw() {

  stroke(255);
  fill(0);
  
  var x_start = 200;
  var x_end = 400;
  var x_increment = (x_end - x_start)/points;

  var y_min = 100;
  var y_max = 200;
  var y_increment = (height - (y_max - y_min))/ rows / 2;
  
  
  for(var j = 0; j < rows; j++){
    beginShape();
    vertex(0, y_max);
    vertex(x_start - x_increment/2, y_max);
    var x = x_start;

    for(var i = 0; i < points; i++){
      
      y = random(y_min, y_max);
      vertex(x, y);
      x = x + x_increment;//move to the right
     
    }
    vertex(x_end, y_max);
    vertex(width, y_max);
    endShape(); 

    y_min += y_increment; //move down
    y_max += y_increment; //move down
    x = x_start; //return to the far left
  }
  
}