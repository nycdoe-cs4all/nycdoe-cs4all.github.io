function setup() {
  createCanvas(600, 120);
}

function draw() {
  background(220);

  for (x = 100; x < width; x = x + 100) {

    //face color
    fill(50, 200, 200);
    //draw an ellipse at that x location
    ellipse(x, 60, 50, 50);
    //add a black fill
    fill(0);
    //draw a smaller ellipse 7 pixels to the right of the face center for right eye
    ellipse(x + 7, 55, 7, 5);
    //draw a smaller ellipse 7 pixels to the left of the face center for left eye
    ellipse(x - 7, 55, 7, 5);

    /*the mouth is assigned a height of x/25 so that the height grows through the loop
    but not as drastically as x alone. 100 is added to x each loop. If it is divided
    by 25, it increments by 4 each loop*/

    //draw an ellipse a little bit lower than center
    ellipse(x, 70, 7, x / 25);
  }

}
