var bleep;
var woof;
var bass;
var pluck;

function preload(){
	bleep = loadSound("../../media/sounds/blip.wav");
	woof = loadSound("../../media/sounds/pug_woof.m4a");
	bass = loadSound("../../media/sounds/bass.wav");
	pluck = loadSound("../../media/sounds/pluck.wav");
}

function setup() {
  createCanvas(600, 400);
  background(204);
}

function draw() {
  
}

function keyPressed(){
	
	if(key == 'A'){
		bleep.play();
	}
	if(key == 'S'){
		woof.play();
	}
	if(key == 'D'){
		bass.play();	
	}
	if(key == 'F'){
		pluck.play();	
	}
	
}






