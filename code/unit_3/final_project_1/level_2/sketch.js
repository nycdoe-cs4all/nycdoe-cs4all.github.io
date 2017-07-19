//Possible image paths, possible font names, possible taglines
var images = ["images/pupper.jpg", "images/snek.png"];
var fonts = ["Gloria Hallelujah", "PressuruRegular"];
var taglines = [
      "pls no boop DO NOT", 
      "i heckin warned u", 
      "am scary cober I do a flat hiss don't heck with me am much venom", 
    ];

var chosenImage;
var chosenFont;
var chosenTagline;

var fontColor;
var fontSize;
var posX;
var posY;

function preload(){
  //PICK A RANDOM IMAGE
  //Pick a random number between 0 and the length of the images array, 
  //round it down to an integer number using "floor",
  //and store it in the pos variable
  var pos = floor(random(images.length));

  //Get the name of the image file at the picked position and load that file
  //store it in the chosenImage variable
  chosenImage = loadImage(images[pos]);
}

function setup() {
  createCanvas(400, 400);

  //PICK A RANDOM TAGLINE
  pos = floor(random(taglines.length));
  chosenTagline = taglines[pos];
  
  //PICK A RANDOM FONT
  pos = floor(random(fonts.length));
  chosenFont = fonts[pos];
  
  //Set default values
  fontColor = color(255, 255, 0);
  fontSize = 24;
  posX = 60;
  posY = 300;
}

function draw() {
  //Draw image
  image(chosenImage, 0, 0, width, height);
  
  //Draw text
  textFont(chosenFont); 
  textSize(fontSize);
  strokeWeight(3);
  stroke(0);
  fill(fontColor);
  text(chosenTagline, posX, posY, 300, 200);
}

function mouseClicked(){
  fontColor = color(random(0, 255), random(0, 255), random(0, 255));
  fontSize = random(20, 100);
  posX = random(20, width/3);
  posY = random(20, height/3);
}

