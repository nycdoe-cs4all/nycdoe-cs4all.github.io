var tree;

function preload() {
  tree = loadImage("../../media/birch.png")
}

function setup() {
  createCanvas(400, 400);
  //Loop is off so it would load faster
  noLoop()
}

function draw() {
  background(64);
  image(tree,200,200,100,200);
 }
