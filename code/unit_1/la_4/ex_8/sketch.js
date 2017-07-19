function setup() {
  createCanvas(600, 120);
  noStroke();
  colorMode(HSB);
}

function draw() {
  background(0);

  // Use loop vars to count, multiply within the loop to scale them to the right range
  for(var i = 0; i <= 30; i = i + 1){ //Repeat 31 times
    for(var j = 0; j <= 6; j = j + 1){ //Repeat 7 times
    	fill(i/30 * 360, 100, 100);
	    ellipse(i*20, j*20, 20, 20);
	  }
  }
  
}