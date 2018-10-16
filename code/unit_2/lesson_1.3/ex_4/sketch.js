function setup() {
  createCanvas(600, 120);
}

function draw() {
	background(220);
    rectMode(CENTER);

    //If mouseX is in between width/2 - half of the rect
    //width/2 + half of the rect, draw a red fill
    if ((mouseX  > width/3 - 20) && (mouseX < width/3 + 20) && (mouseY > height / 2 - 20) && (mouseY < height/2 + 20)){
        fill1 = 'red';
    }
    else if ((mouseX  > width/2 - 20) && (mouseX < width/2 + 20) && (mouseY > height / 2 - 20) && (mouseY < height/2 + 20)){
        fill2  = 'blue';
    }
    else{
        fill1  = 'white';
        fill2 = 'white';
    }

    fill(fill1);
    rect(width/3, height/2, 40,40);
    fill(fill2);
    rect(width/2, height/2, 40,40);
}
