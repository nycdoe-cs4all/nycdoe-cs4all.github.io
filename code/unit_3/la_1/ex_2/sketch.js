var img;

function preload() {
  img = loadImage("../../media/pupper.jpg");
}

function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(204);
  image(img, 0, 0);
}