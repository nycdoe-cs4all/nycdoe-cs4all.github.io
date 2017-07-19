//emoji copy and pasted from http://getemoji.com/
var emojiImages = [];
var emoji = [];

//adding the preload function, to make sure all images are loaded before the draw loop is called
function preload(){

  //load each image in my emojiImages folder 
  //(I have made 25 of them and named them 0.png through 25.png)
  for(var i = 0; i <= 24; i++){
    var filePath = "emojiImages/" + i + ".png";
    emojiImages[i] = loadImage(filePath);

  }
}

function setup() {
  createCanvas(600, 600);
  background(0);
  colorMode(HSB);
  
  //For each image emoji that we have loaded,
  //create an Emoji object and put it inside the emoji array
  for(var i = 0; i < emojiImages.length; i++){
    emoji[i] = new Emoji(random(width), random(height), random(20, 80), emojiImages[i]);
  }
  
}

function draw() {
  background(0);
  for(var i = 0; i < emoji.length; i++){
    emoji[i].move();
    emoji[i].display();
  }
  
}

function Emoji(tempX, tempY, tempSize, emoji) {
  this.x = tempX;
  this.y = tempY;
  this.size = tempSize;
  this.speed = 2.5;
  this.emoji = emoji;
  //assign a random color to the emoji:
  this.color = color(random(0, 90), 80, 100);
  
  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);

  }
  
  this.display = function() {
    tint(this.color);
    image(this.emoji, this.x, this.y, this.size, this.size);
  }
}