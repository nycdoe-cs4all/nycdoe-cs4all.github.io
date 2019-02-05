function setup() {
  createCanvas(600, 120);
}
function draw() {
  background(220);

  //for(initialize;condition;increment)
  for(y=0;y<=height;y=y+10){//increment y by 10 so that more shapes are visible

  //multiply the x value by 5 so that the horizonal spacing is 5 times greater than veritcal
	ellipse(y*5,y,40,40); //draw an ellipse at the y AND x-location of the variable y

	}
}
