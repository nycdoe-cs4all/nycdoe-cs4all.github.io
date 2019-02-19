function setup( ){
    createCanvas(600,120);
}

function draw( ){
    background(180);

    var x = 0;// The row will begi at the initialized x position so changing the to 0 starts on the left
    while(width/2 > x){ // this condition will now be met when x reaches half of the canvas
        ellipse(x,60,40,40); //draw an ellipse at that x location
        x=x+50//increase the value of x by 50 so that they are 50 pixels apart
    }

}
