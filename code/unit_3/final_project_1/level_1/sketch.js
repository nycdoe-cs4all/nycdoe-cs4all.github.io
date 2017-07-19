//Possible image paths, possible font names, possible captions
var images = ["images/pupper.jpg", "images/snek.png"];
var fonts = ["Gloria Hallelujah", "PressuruRegular"];
var captions = [
      "pls no boop DO NOT", 
      "i heckin warned u", 
      "am scary cober I do a flat hiss don't heck with me am much venom", 
    ];

var chosenImage;
var chosenFont;
var chosenCaption;

function preload(){
  //PICK A RANDOM IMAGE
  //Pick a random number between 0 and the length of the images array, 
  //round it down to an integer number using "floor",
  //and store it in the pos variable
  var pos = floor( random(images.length));

  //Get the name of the image file at the picked position and load that file
  //store it in the chosenImage variable
  chosenImage = loadImage(images[pos]);
}

function setup() {
  createCanvas(400, 400);

  //PICK A RANDOM TAGLINE
  pos = floor(random(captions.length));
  chosenCaption = captions[pos];
  
  //PICK A RANDOM FONT
  pos = floor(random(fonts.length));
  chosenFont = fonts[pos]; 
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