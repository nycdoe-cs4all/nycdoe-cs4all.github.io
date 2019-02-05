function setup( ){
	createCanvas(600,120);
}

function draw( ){
	background(220);
	//create a row of ellipse
	for(x=10;x<width;x=x+20){
		ellipse(x,10,15,15)
	}
	//create a column with x value 10 since the row begins with that x value
	for(y=10;y<height;y=y+20){
		ellipse(10,y,15,15)
	}
	//create a column with x value 30 since the next ellipse in the row was incremented by 20
	for(y=10;y<height;y=y+20){
		ellipse(30,y,15,15)
	}
	//create a column with x value 50 since the next ellipse in the row was incremented by 20
	for(y=10;y<height;y=y+20){
		ellipse(50,y,15,15)
	}
	//create a column with x value 70 since the next ellipse in the row was incremented by 20
	for(y=10;y<height;y=y+20){
		ellipse(70,y,15,15)
	}
}
