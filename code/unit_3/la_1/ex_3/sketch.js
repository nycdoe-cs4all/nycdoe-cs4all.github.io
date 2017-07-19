var img;


function setup() {
  createCanvas(600, 400);
  background(204);
}

function draw() {
  //when the image has finished loading, call our imageLoaded function (defined below)
  img = loadImage("../../media/pupper.jpg", imageLoaded);
  
}

function imageLoaded(){ //this function could be called whatever we want
	image(img, 0, 0);
}