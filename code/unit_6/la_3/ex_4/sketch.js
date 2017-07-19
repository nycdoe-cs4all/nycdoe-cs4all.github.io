/* 
Based on Dan Shiffman's video 6.7 p5.js clicking on objects
Code for video https://vimeo.com/channels/learningp5js/141919520
*/

var bubbles = [];

function setup() {
  createCanvas(600, 120);
  for (var i = 0; i < 10; i++) {
    var x = random(width);
    var y = random(height);
    bubbles.push(new Bubble(x, y));
  }
}

function mouseClicked() {
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked();
  }
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

/////
function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(255, 100);

  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, 48, 48);
  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 24) {
      this.col = color(255, 0, 200);
    }
  }

}