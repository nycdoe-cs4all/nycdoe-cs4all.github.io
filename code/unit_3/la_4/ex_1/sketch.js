var bleep;

function preload(){
	// bleep = loadSound("../../media/sounds/lucky_dragons_-_power_melody.mp3");
	bleep = loadSound("../../media/sounds/blip.wav");
}

function setup() {
  createCanvas(600, 400);
  background(204);
}

function draw() {
  
}

function mousePressed(){
	bleep.play();
}


