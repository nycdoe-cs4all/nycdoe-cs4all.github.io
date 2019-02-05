function setup() {
    createCanvas(600, 600);
}
function draw() {
    background(220);

    //for(initialize;condition;increment)
    for(y=0;y<=height;y=y+40){//increment y by 10 so that more shapes are visible

        //draw an ellipse at y location of the variable y
        ellipse(300,y,20,20);

    }
    for(x=0;x<=width;x=x+40){//increment y by 10 so that more shapes are visible

        //draw an ellipse at y location of the variable y
        ellipse(x,x,20,20);
    }
}
