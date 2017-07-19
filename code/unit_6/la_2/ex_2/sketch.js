//declare variable
var bubble1;

function setup() {
  createCanvas(600, 120);
  
  //assign literal object to variable
  bubble1 = {
    x: random(0,width),
    y: random(0, height),
    display: function() {
      stroke(255);
      noFill();
      ellipse(this.x, this.y, 24, 24);
    },
    move: function() {
      this.x = this.x + random(-1, 1);
      this.y = this.y + random(-1, 1);
    }
  }
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.display();
}