var bob;//declaring the variable

function setup() {
  createCanvas(600, 120);
  bob=70;//set an initial value for the variable
}

function draw() {
background(180);
//use the variable
ellipse(120,bob,60,60);
ellipse(200,bob,60,60);
ellipse(280,bob,60,60);
ellipse(360,bob,60,60);
ellipse(440,bob,60,60);

}
