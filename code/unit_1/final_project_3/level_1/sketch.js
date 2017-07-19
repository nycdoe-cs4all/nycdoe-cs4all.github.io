function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(0);
  textSize(24);
  fill(255);
  // text(mouseX + ", " + mouseY, 40, 40);

  //LIGHT BEAMS
  noStroke();
  //Red beam
  fill(186, 44, 49);

  var x = width*2;
  var y = random(0, 2*height/3);

  triangle(255, 290, 
        x, y, 
        x, y + 20);
  //Orange beam
  fill(217, 143, 56);
  triangle(255, 290, 
        x, y + 20, 
        x, y + 40);
  //Yellow beam
  fill(254, 253, 90);
  triangle(255, 290, 
        x, y + 40, 
        x, y + 60);

  //Green beam beam
  fill(148, 197, 74);
  triangle(255, 290, 
        x, y + 60, 
        x, y + 80);
  
  //Blue beam
  fill(132, 187, 219);
  triangle(255, 290, 
        x, y + 80, 
        x, y + 100);

  //Violet beam
  fill(98, 81, 132);
  triangle(255, 290, 
        x, y + 100, 
        x, y + 120);

  //WHITE LINE
  stroke(255);
  line(0, 321, 255, 290);

  //TRIANGLE
  stroke(255);
  fill(0);
  triangle( width/2 - 100, height/2 + 80, 
            width/2, height/2 - 80, 
            width/2 + 100, height/2 + 80);


  
}

