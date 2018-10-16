function setup(){
    createCanvas(600, 120);
}

function draw() {
    // start by setting the canvas to white
    background(225);
    // when the x location of the mouse is
    // greater than 300, color the canvas black
    if(mouseX > 300){
        background(0)
    }
}
