function setup() {
	createCanvas(600, 120);
}

function draw() {
	background(220);

	//WHILE LOOP
	var x= 0;//initialize the variable to 0
	while(x<=width){ //check for a condition

		fill(255,0,0);//add a red fill
		ellipse(x,30,40,40); //draw an ellipse at the x-location of the variable x
		
		x=x+100//increment the variable (every time you run through the loop, add 100 to x)
	}

	//FOR LOOP
	//for(initialize;condition;increment)
	for(x=0;x<=width;x=x+100){//the for loop contains all of the same elements but in 1 line
		fill(0,255,0);//add a green fill
		ellipse(x,90,40,40); //draw an ellipse at the x-location of the variable x

	}
}
