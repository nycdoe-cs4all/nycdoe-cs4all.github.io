var img;
var hue;

function preload(){
	img = loadImage("../../media/pupper.jpg");
}

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
}

function draw() {
  background(204);
  
  tint(hue, 100, 100);
  image(img, 40, 40, mouseX, mouseY);
}

function mousePressed(){
	hue = random(360);
}


