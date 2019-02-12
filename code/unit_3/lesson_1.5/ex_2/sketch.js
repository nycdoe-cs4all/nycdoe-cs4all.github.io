function setup( ){
	createCanvas(600,120);
}
function draw( ){
	background(220);

	//create a row of ellipse
	for(x=30;x&lt;width;x=x+30){
		//each time the loop is cycled through a column will be drawn at that x location
		for(var y= 30;y&lt;height;y=y+30){
			ellipse(x,y,15,15)
		}
	}

}
