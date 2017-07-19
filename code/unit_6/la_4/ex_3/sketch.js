/* 
Based on Dan Shiffman's video 6.10 p5.js checking objects intersection part 2 (part 1 is in video 6.9)
Code for video https://vimeo.com/channels/learningp5js/141919524
*/

var bubbles = [];

function setup() {
  createCanvas(600, 120);

  for (var i = 0; i < 5; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }
}

function draw() {
  background(0);

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
    for (var j = 0; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();
        bubbles[j].changeColor();
      }
    }
  }
}


/////

function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.r = 48;
  this.col = color(255);

  this.changeColor = function() {
    this.col = color(random(255), random(255), random(255))
  }
  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}