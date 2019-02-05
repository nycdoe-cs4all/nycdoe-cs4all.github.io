var font;

function preload() {
  font = loadFont("source-code-pro-regular.ttf");
}

function setup() {
  createCanvas(600, 120);
  textFont(font);
}

function draw() {
  background(255, 255, 0);
  textSize(28);
  text("pls no boop DO NOT", 110, 60);
  textSize(14);
  text("pls no boop DO NOT", 170, 90);
}
