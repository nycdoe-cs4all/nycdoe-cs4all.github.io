var happySong; // global variable to reference the sound. Change this variable name to something that represents your sound.

function preload() {
	happySong = loadSound('happybirthday.mp3'); // loadSound is used to load the sound data into memory. happySong is a reference to that data
}

function setup() {
  createCanvas(400, 400);
	happySong.play(); // .play() is a method that plays the sound. a method is a function associated with an object
}
