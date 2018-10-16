var r, g, b;
var d;

//circular button
var x = 300;
var y = 60;
var radius = 60;

function setup() {
  createCanvas(600, 120);
  strokeWeight(8);
  smooth();

  //set the starting color to a dark gray
  r = 70;
  g = 70;
  b = 70;

}

function draw() {
    //set the fill to whatever values are held by r, g, and b
    stroke(r, g, b);
    //draw a continuous line
    line(pmouseX, pmouseY, mouseX, mouseY);

    //calculate the distance between the mouse and the center of the ellipse
    d = dist(mouseX, mouseY, x, y);

    //if the mouse is over the circle
    if (d < radius) {
        //turn the fill on for 'mouse over' effect
        stroke(r, g, b);
        fill(0);
        // console.log("over");
    }
    else{ //if it isn't over the circle
      //set the fill to (r,g,b) for 'mouse over' effect
      fill(r, g, b);
    }

    //draw the rectangle button over the mouse trail
    ellipse(x, y, radius, radius);

    if (mouseIsPressed){
        if (d < radius) {
          //set the red, green, and blue variables to a random value
          r = random(0, 255);
          g = random(0, 255);
          b = random(0, 255);
        }
    }

}
