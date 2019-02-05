function setup( ){
	createCanvas(600,120);
}
function draw( ){
	background(220);

	//create a row of ellipse
	for(x=0;x<=width;x=x+40){
		//each time the loop is cycled through a column will be drawn at that x location
		for(var y= 0;y<=height;y=y+40){
			fill(255,0,0); // red fill
			ellipse(x,y,40,40);
			fill(0,255,255); // green fill
			ellipse(x,y,30,30);
			fill(0,0,255); // blue fill
			ellipse(x,y,20,20);
			fill(255,0,255); // purple fill
			ellipse(x,y,10,10);
		}
	}

}
