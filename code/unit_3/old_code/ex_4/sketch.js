var img1;
var img2;

function preload() {
  img1 = loadImage("../../media/lunar.jpg");
  img2 = loadImage("../../media/capsule.jpg");
}

function setup() {
  createCanvas(600, 120);
  background(204);
}

function draw() {
  image(img1, -120, 0);
  image(img1, 130, 0, 240, 120);
  image(img2, 300, 0, 240, 120);
}