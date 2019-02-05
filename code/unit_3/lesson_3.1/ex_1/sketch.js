var tree

function setup() {
  tree = loadImage("../../media/birch.jpg")
  createCanvas(400, 400);
  //Loop is off so it would load faster
  noLoop()
}

function draw() {
  background(64);
  tint(180,70,60);
  image(tree,200,300,100,200);
}
