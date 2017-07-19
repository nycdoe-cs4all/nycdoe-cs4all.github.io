//This example uses a workaround because slider.input is not recognized ––it updates the ellipse's x in draw.
//In the tutorial, code is shown step-by step
var x = 0;
var y = 40;
var gravity = 0;


var slider;
var button;

function setup(){
    slider = createSlider(0, 600, 10);
    slider.position(200, 220);

    createCanvas(600, 200);
    
    // slider.input(updateX);
    slider.changed(drop);

    button = createButton("Reset");
    button.mousePressed(reset);
    button.position(555, 220);
}

function draw(){
    background(0);
    x = slider.value();
    y = y + gravity;
    ellipse(x, y, 40, 40);
}

// function updateX(){
    
// }

function drop(){
    gravity = 10;
}

function reset(){
    x = 0;
    y = 40;
    gravity = 0;

}



