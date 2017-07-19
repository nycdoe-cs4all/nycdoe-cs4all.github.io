function setup() { 
 	createCanvas(600, 200);
 	noStroke();
} 

function draw() { 
 	background(131, 175, 155);

	//LEFT HAPPY FACE
	translate(300, 100);

	//Face
	fill(249,205,173);//rosy beige
	ellipse(0, 0, 100, 100);

	//Eye 1
	fill(30);//dark gray
	ellipse(0, 10, 10, 10);

	//Eye 2
	ellipse(20, 10, 10, 10);

	//Mouth
	fill(252,157,154);//light pink
	arc(0, 25, 30, 30, 0, radians(180), PIE); 
	

	//RIGHT HAPPY FACE
	translate(110, 0);

	//Face
	fill(249,205,173);//rosy beige
	ellipse(0, 0, 100, 100);

	//Eye 1
	fill(30);//dark gray
	ellipse(0, 10, 10, 10);

	//Eye 2
	ellipse(20, 10, 10, 10);

	//Mouth
	fill(252,157,154);//light pink
	arc(0, 25, 30, 30, 0, radians(180), PIE); 
}