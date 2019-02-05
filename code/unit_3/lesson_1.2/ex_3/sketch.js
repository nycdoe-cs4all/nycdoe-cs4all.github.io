var y1=30//y location for the first row
var y2=90//y location for the second row

function setup() {
	createCanvas(600, 120);
}
function draw() {
	background(220);

	//WHILE LOOP
	var x= 100;//initialize the variable to 100
	while(x<width){ //check for a condition (keep this loop going as long as this is true)
		//draw design
		fill(255,0,0);//add a red fill
		ellipse(x,y1,40,40); //draw an ellipse at the x-location of the variable x and y1
		fill(0,255,0);//add a green fill
		ellipse(x,y1,30,30);
		fill(0,0,255);//add a blue fill
		ellipse(x,y1,20,20)
		fill(255,0,255);//add a purple fill
		ellipse(x,y1,10,10)
		x=x+100//increment the variable (every time you run through the loop, add 100 to x)
	}

	//FOR LOOP
	//for(initialize;condition;increment)
	for(x=100;x<width;x=x+100){//the for loop contains all of the same elements but in 1 line

		fill(255,0,0);//add a red fill
		ellipse(x,y2,40,40); //draw an ellipse at the x-location of the variable x and y2
		fill(0,255,0);//add a green fill
		ellipse(x,y2,30,30);
		fill(0,0,255);//add a blue fill
		ellipse(x,y2,20,20)
		fill(255,0,255);//add a purple fill
		ellipse(x,y2,10,10)
	}
}
