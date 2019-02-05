function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //create a size variable outside of the loop
  var size = 400;

  //this loop will repeat five times since the variable was initialized to 0
  ///(initialize the variable; check for a condition; increment the variable)
  for (var i = 0; i < 5; i = i + 1) {

    //draw ellipses in the center of the canvas set to the size variable
    ellipse(width / 2, height / 2, size, size);

    //every time the loop runs(which will be 5 times) the size is decreased by 60
    size = size - 60;
  }

}
