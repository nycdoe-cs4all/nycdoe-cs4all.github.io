//emoji copy and pasted from http://getemoji.com/
var emoji_symbols = ["😀", "😬", "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😉", "😊", "🙂", "🙃", "😋", "😌", "😍", "😘", "😗", "😙", "😚", "😜", "😝", "😛", "🤑", "🤓", "😎", "🤗", "😏", "😶", "😐", "😑", "😒", "🙄", "🤔", "😳", "😞", "😟", "😠", "😡", "😔", "😕", "🙁", "😣", "😖", "😫", "😩", "😤", "😮", "😱", "😨", "😰", "😯", "😦", "😧", "😢", "😥", "😪", "😓", "😭", "😵", "😲", "🤐", "😷", "🤒", "🤕", "😴"];
var emoji = [];

function setup() {
  createCanvas(600, 400);
  background(255, 194, 32);
  
  //for each symbol in the emoji_symbols array,
  //create an Emoji object and put it inside the emoji array
  for(var i = 0; i < emoji_symbols.length; i++){
    emoji[i] = new Emoji(random(width), random(height), random(10, 50), emoji_symbols[i]);
  }
  
}

function draw() {
  background(255, 194, 32);
  for(var i = 0; i < emoji.length; i++){
    emoji[i].move();
    emoji[i].display();
  }
  
}


function Emoji(x, y, size, emoji) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = 2.5;
  this.emoji = emoji;
  
  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  
  this.display = function() {
    textSize(this.size);
    text(this.emoji, this.x, this.y);
  }
}