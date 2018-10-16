function setup() {
  createCanvas(600, 120);
  textSize(50);
}

function draw() {
  background(180); 
  
  if (keyIsPressed) {

    textStyle(BOLD);
    text(key, 60, 60);

  }

}