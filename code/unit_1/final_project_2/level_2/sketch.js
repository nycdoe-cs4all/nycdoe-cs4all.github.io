
function setup() {
  createCanvas(600, 600);
  background(0);

  noLoop();
  
}

function draw() {

  stroke(255);
  fill(0);

  // var rows = 3;
  // for(var j = 0; j < rows; j++){
  
    //First line
    var points = 10;
    var x_start = 200;
    var x_end = 400;
    var y_min = 100;
    var y_max = 200;

    beginShape();
    vertex(0, y_max);
    vertex(x_start, y_max);
    var x = x_start;

    for(var i = 0; i < 10; i++){
      
      y = random(y_min, y_max);
      vertex(x, y);
      x = x + 20;
     
    }
    vertex(x_end, y_max);
    vertex(width, y_max);
    endShape(); 

    //Second line
    var y_min = 150;
    var y_max = 250;
    x = x_start;

    beginShape();
    vertex(0, y_max);
    vertex(x_start, y_max);
    var x = x_start;

    for(var i = 0; i < 10; i++){
      
      y = random(y_min, y_max);
      vertex(x, y);
      x = x + 20;
     
    }
    vertex(x_end, y_max);
    vertex(width, y_max);
    endShape(); 

    //Third line
    var y_min = 200;
    var y_max = 300;
    x = x_start;

    beginShape();
    vertex(0, y_max);
    vertex(x_start, y_max);
    var x = x_start;

    for(var i = 0; i < 10; i++){
      
      y = random(y_min, y_max);
      vertex(x, y);
      x = x + 20;
     
    }
    vertex(x_end, y_max);
    vertex(width, y_max);
    endShape(); 

    //Fourth line
    var y_min = 250;
    var y_max = 350;
    x = x_start;

    beginShape();
    vertex(0, y_max);
    vertex(x_start, y_max);
    var x = x_start;

    for(var i = 0; i < 10; i++){
      
      y = random(y_min, y_max);
      vertex(x, y);
      x = x + 20;
     
    }
    vertex(x_end, y_max);
    vertex(width, y_max);
    endShape(); 

    //Fifth line
    var y_min = 300;
    var y_max = 400;
    x = x_start;

    beginShape();
    vertex(0, y_max);
    vertex(x_start, y_max);
    var x = x_start;

    for(var i = 0; i < 10; i++){
      
      y = random(y_min, y_max);
      vertex(x, y);
      x = x + 20;
     
    }
    vertex(x_end, y_max);
    vertex(width, y_max);
    endShape(); 

  
  
}