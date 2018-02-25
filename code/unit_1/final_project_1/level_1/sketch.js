function setup() { 
  createCanvas(600, 400);

  //Turn off drawing strokes
  noStroke();

  //Only run the draw loop once. Try commenting this out and see what happens ––we will look into why on Unit 2.
  noLoop();
} 

function draw() { 
  //Set the background color to a random shade between black (0) and white (255)
  background(random(0, 255));
  
  //Set the fill to a random shade of gray
  fill(random(255));
  //Draw rectangle #1 
  rect(random(0, width),//Set the x position to be a random number between 0 and the width of the canvas
       0,               //Set the y position to 0 (the top of the canvas)
       random(5, 40),   //Set the width of the rectangle to a random value between 5 and 40
       height);         //Set the height of the rectangle to be the same as the height of the canvas
               
  
  //Draw rectangle #2
  fill(random(255));
  rect(random(0, width), 0, random(5, 40), height);
  
  //Draw rectangle #3
  fill(random(255));
  rect(random(0, width), 0, random(5, 40), height);
  
  //Draw rectangle #4
  fill(random(255));
  rect(random(0, width), 0, random(5, 40), height);
  
  //Draw rectangle #5
  fill(random(255));
  rect(random(0, width), 0, random(5, 40), height);
  
  //Draw rectangle #6
  fill(random(255));
  rect(random(0, width), 0, random(5, 40), height);
  
  //Draw rectangle #7
  fill(random(255));
  rect(random(0, width), 0, random(5, 40), height);
  
  //Draw rectangle #8
  fill(random(255));
  rect(random(0, width), 0, random(5, 40), height);
  
  //Draw rectangle #9
  fill(random(255));
  rect(random(0, width), 0, random(5, 40), height);
  
  //Draw rectangle #10
  fill(random(255));
  rect(random(0, width), 0, random(5, 40), height);
  
}




