//Declare variables
var x;
var y;

function setup() {
  createCanvas(600, 120);

  //Initialize variables
  x = random(50, 550);
  y = random(50, 70);

  noStroke();

}

function draw() {
  background(131,175,155);//greenish blue

  for(var i=0; i< 6; i++){
  	for(var j=0; j< 6; j++){
  	  //Face
	  fill(249,205,173);//rosy beige
	  ellipse(x, y, 100, 100);
	  
	  //Eye 1
	  fill(30);//dark gray
	  ellipse(x, y+10, 10, 10);
	  
	  //Eye 2
	  ellipse(x+20, y+10, 10, 10);
	  
	  //Mouth
	  fill(252,157,154);//light pink
	  arc(x, y+25, 30, 30, 0, radians(180), PIE); 
  	}
  }

   
  
}