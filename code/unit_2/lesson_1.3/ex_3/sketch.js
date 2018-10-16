function setup() {
  createCanvas(600, 120);
}

function draw() {
	background(220);
    rectMode(CENTER);

    //If mouseX is in between width/2 - half of the rect
    //width/2 + half of the rect, draw a red fill
    if ((mouseX  > width/2 - 20) && (mouseX < width/2 + 20) && (mouseY > height / 2 - 20) && (mouseY < height/2 + 20)){
        fill(255,0,0);
    }
    else{
        fill(255);
    }
    rect(width/2, height/2, 40,40);
}
