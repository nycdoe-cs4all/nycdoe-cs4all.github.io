function setup() { 
  createCanvas(600, 400);

  //Turn off drawing strokes
  noStroke();

  //Only run the draw loop once. Try commenting this out and see what happens ––we will look into why on Unit 2.
  noLoop();
  
} 

function draw() { 
  //Set background to white (255)
  background(255);

  //Repeat 240 times:
  for(var i = 0; i < 240; i++){
    //Declare a variable called diameter and initialize it with a random number between 5 and 25
    var diameter = random(5, 25);
    
    //Set the fill color to blue
    fill(18, 79, 177);
    //Draw ellipse #1
    ellipse(random(0, width), //Set the width to a random number between 0 and the width of the canvas
            random(0, height),//Set the height to a random number between 0 and the height of the canvas
            diameter,         //Set the width to the value of the diameter variable
            diameter);        //Set the height to the value of the diameter variable
    
    //Set the fill color to yellow
    fill(243, 217, 12);
    //Draw ellipse #2
    ellipse(random(0, width), random(0, height), diameter, diameter);
    
    //Set the fill color to green
    fill(25, 152, 68);
    //Draw ellipse #3
    ellipse(random(0, width), random(0, height), diameter, diameter);
    
    //Set the fill color to red
    fill(230, 0, 13);
    //Draw ellipse #4
    ellipse(random(0, width), random(0, height), diameter, diameter);
  }
  
}


