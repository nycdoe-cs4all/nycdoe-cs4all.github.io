function setup() {
  createCanvas(600, 120);
  noStroke();
  
}

function draw() {
  background(0);

for(var x = 30; x < width; x = x + 30){
    for(var y = 30; y < height; y = y + 30){
    	fill(x, y, 255);
    	//Try these:
    	// fill(255, x, y);
    	// fill(x, 255, y);
	    ellipse(x, y, 15, 15);
	  }
  }
  
}