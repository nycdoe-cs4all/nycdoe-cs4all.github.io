function setup(){
	createCanvas(600, 240);
}

function draw() {
  background(180); 
  // Displays the frame count
  
  text("I’m drawing", 20, 20);
  text(frameCount, 100, 20);


  ellipse(300, 80, 10, 10);
}