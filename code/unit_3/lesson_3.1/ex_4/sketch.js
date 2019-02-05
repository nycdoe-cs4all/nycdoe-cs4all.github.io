var tree;

function setup() {
  createCanvas(400, 400);
  //Loop is off so it would load faster
  noLoop()
}

function draw() {
  background(64);
 //when the image has finished loading, call our imageLoaded function (defined below)
  tree = loadImage("../../media/birch.png", imageLoaded)
  }

function imageLoaded(){ //this function could be called whatever we want
	  image(tree,200,200,100,200);
}
