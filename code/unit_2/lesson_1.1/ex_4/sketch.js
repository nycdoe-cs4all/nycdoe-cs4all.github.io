function setup() {
  createCanvas(600, 120);
}

function draw() {
  var x=40;//set the value of x to 40
  fill(0,255,0)//set the fill to green
  background(220);

	//if mouseX is on the right side of the screen,
  //shrink the ellipse to 20
  if(mouseX>width/2){
  	x=20;
  }
  //if mouseY is on the botto half of the screen,
  //change the fill to red
  if(mouseY>height/2){
  	fill(255,0,0);
  }
  ellipse(width/2,height/2,x,x)
}
