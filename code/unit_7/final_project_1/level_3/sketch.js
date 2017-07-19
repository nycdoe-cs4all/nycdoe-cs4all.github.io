//HTML INTERFACE
var pupperBtn, snekBtn;
var gloriaBtn, pressuruBtn;
var generateBtn;
var captionInput;

var pupperImage, snekImage;

var chosenImage;
var chosenFont;
var chosenCaption;

function preload(){
  pupperImage = loadImage("images/pupper.jpg");
  snekImage = loadImage("images/snek.png");

}

function setup() {
  createCanvas(400, 400);

  //default values
  chosenImage = snekImage;
  chosenCaption = "pls no boop DO NOT";
  chosenFont = "PressuruRegular"; 

  //HTML INTERFACE
  createP("Picture");
  pupperBtn = createButton("Pupper");
  snekBtn = createButton("Snek");

  createP("Font");
  gloriaBtn = createButton("Gloria");
  pressuruBtn = createButton("Pressuru");
  
  createP("Caption");
  captionInput = createInput();
  
  // createP("");
  // generateBtn = createButton("Generate");

  pupperBtn.mousePressed(pupper);
  snekBtn.mousePressed(snek);
  gloriaBtn.mousePressed(gloria);
  pressuruBtn.mousePressed(pressuru);  
  captionInput.changed(caption);

  // generateBtn.mousePressed(generate);
}

function draw() {
  //Draw image
  image(chosenImage, 0, 0, width, height);
  
  //Draw text
  textFont(chosenFont); 
  textSize(30);
  strokeWeight(3);
  stroke(255, 255, 0);
  fill(0);
  text(chosenCaption, 20, 250, 400, 400);
}

function pupper(){
  chosenImage = pupperImage;
}

function snek(){
  chosenImage = snekImage;
}

function gloria(){
  chosenFont = "Gloria Hallelujah";
}

function pressuru(){
  chosenFont = "PressuruRegular";
}

function caption(){
  chosenCaption = captionInput.value();
}



