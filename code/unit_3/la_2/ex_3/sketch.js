var dog1, dog2, heart;



function preload(){
  dog1 = loadImage("../../media/pupper.png");
  dog2 = loadImage("../../media/doggo.gif");
  heart = loadImage("../../media/heart.svg");

}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(204);
  
  image(dog1, 0, 0);
  image(dog2, mouseX, mouseY, 200, 200);
  image(heart, random(-10, 10), random(-4, 4), width, height);
  
  
}


