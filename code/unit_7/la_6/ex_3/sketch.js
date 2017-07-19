var textInput;
var words = "";
var sound;

function setup() { 
  createCanvas(400, 400);
	
	textInput = createInput("");
	textInput.position(140, 420);
	textInput.input(playSound);
	textInput.changed(updateText);

	sound = loadSound("../../media/sounds/9098__ddohler__typewriter.m4a");
} 

function draw() { 
  background(220, 0, 0);
	text(words, 150, 200);
}

function playSound(){
	sound.play();
}

function updateText(){
	words = textInput.value();
}