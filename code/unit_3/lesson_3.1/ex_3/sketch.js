var tree;

function preload() {
  tree = loadImage("birch.png")
}

function setup() {
  createCanvas(400, 400);
  //Loop is off so it would load faster
  noLoop()
}

function draw() {
  background(128);
  image(tree,200,200,100,200);
 }
