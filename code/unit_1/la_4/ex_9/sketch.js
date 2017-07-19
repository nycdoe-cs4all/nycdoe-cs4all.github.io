
function setup() {
  createCanvas(600, 120);
  noStroke();

}

function draw() {
  background(131,175,155);//greenish blue

  var x;
  var y;

  for(var i = 0; i < 25; i++){
  	for(var j = 0; j < 5; j++){
  		x = i*30;
  		y = j*30;
	  	//Face
		fill(249,205,173);//rosy beige
		ellipse(x, y, 20, 20);

		//Eye 1
		fill(30);//dark gray
		ellipse(x, y+2, 2, 2);

		//Eye 2
		ellipse(x+3, y+2, 2, 2);

		//Mouth
		fill(252,157,154);//light pink
		arc(x, y+5, 6, 6, 0, radians(180), PIE); 
  	  
  	}
  }
  
}