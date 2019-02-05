var tree

function preload() {
  tree = loadImage("birch.png")
}

function setup() {
  createCanvas(400, 400);
colorMode(HSB)
}

function draw() {
  background(220);
tint(180,70,60);
image(tree,200,300,100,200);

tint(180,70,60,0.3);
image(tree,250,350,100,200);
}
