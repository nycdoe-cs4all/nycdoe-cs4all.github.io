var img;

function setup() {
  img = loadImage("../../media/pupper.jpg");
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(204);
  image(img, 0, 0);
}