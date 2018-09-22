var y;//declaring the variable

function setup() {
  createCanvas(600, 120);
  y=70;//set an initial value for the variable
}

function draw() {
background(180);
//use the variable
ellipse(120,y,60,60);
ellipse(200,y,60,60);
ellipse(280,y,60,60);
ellipse(360,y,60,60);
ellipse(440,y,60,60);

}
