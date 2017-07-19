var img;

function preload() {
  img = loadImage("../../media/lunar.jpg");
}

function setup() {
  createCanvas(600, 120);
}

function draw() {
  background(0);
  image(img, 0, 0, mouseX * 2, mouseY * 2);
}