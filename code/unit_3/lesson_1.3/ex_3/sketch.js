var x=300//x location of the column

function setup() {
	createCanvas(600, 600);
}
function draw() {
	background(220);

	//for(initialize;condition;increment)
	for(y=0;y<=height;y=y+40){//increment the y value instead of the x value

		fill(255,0,0);//add a red fill
		ellipse(y,y,40,40); //draw an ellipse at the y AND x-location of the variable y
		fill(0,255,0);//add a green fill
		ellipse(y,y,30,30);
		fill(0,0,255);//add a blue fill
		ellipse(y,y,20,20)
		fill(255,0,255);//add a purple fill
		ellipse(y,y,10,10)
	}
}
