function setup() {
    createCanvas(600, 600);
}
function draw() {
    background(220);
    x = width;
    //for(initialize;condition;increment)
    for(y=0;y<=height;y=y+40){//increment y by 10 so that more shapes are visible

        //draw an ellipse at y location of the variable y
        ellipse(y,y,20,20);

    }
    for(y=0;y<=height;y=y+40){//increment y by 10 so that more shapes are visible

        //draw an ellipse at y location of the variable y
        ellipse(x,y,20,20);
        x=x-40; //subtract 40 from x each loop
    }
}
