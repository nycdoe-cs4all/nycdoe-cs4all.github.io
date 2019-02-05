var tree

function preload() {
  tree = loadImage("birch.png")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(tree,200,300);
}
