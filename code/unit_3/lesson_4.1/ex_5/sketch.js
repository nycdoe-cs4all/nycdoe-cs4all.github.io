function setup() {
  createCanvas(600, 120);
  textFont("Gloria Hallelujah");
}

function draw() {
  background(255, 255, 0);
  textSize(32);
  text("pls no boop DO NOT", 110, 60);
  textSize(14);
//text will wrap within a 200 by 50 box with it’s top corner at (170,90)
  text("pls no boop DO NOT", 170, 90,200,50);
}
