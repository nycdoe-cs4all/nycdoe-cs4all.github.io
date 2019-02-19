function setup( ){
  createCanvas(600,120);
}

function draw( ){
  background(180);
  var x = 20;// declare and initialize a variable for the x location

  while(width > x){ // as long as x is less that the canvas width
    ellipse(x,60,40,40); //draw an ellipse at that x location
    x=x+100//increase the value of x by 100
  }

}
