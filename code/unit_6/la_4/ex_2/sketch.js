/* 
Based on Dan Shiffman's video 6.9 p5.js checking objects intersection part 1
Code for video https://vimeo.com/channels/learningp5js/141919521
*/

var b1;
var b2;

function setup() {
  createCanvas(600, 120);
  b1 = new Bubble(250, 60);
  b2 = new Bubble(350, 60);
}

function draw() {
  background(0);

  b1.update();
  b2.update();
  b1.display();
  b2.display();

  if (b1.intersects(b2)) {
    b1.changeColor();
    b2.changeColor();
  }
}

///
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