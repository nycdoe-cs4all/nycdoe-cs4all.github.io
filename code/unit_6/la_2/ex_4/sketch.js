/* 
Based on Dan Shiffman's video 6.3 p5.js Arrays of Objects 
*/

//an array of bubbles
var bubbles = [];


function setup() {
  createCanvas(600, 120);
  for (var i = 0; i < 4; i++) {
    //create a new bubble literal object and add it to the array
    bubbles[i] = {
      x: random(0, width),
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

}

function draw() {
  background(0);
  //move and display every bubble in the array
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

function mouseClicked(){
    bubbles[bubbles.length] = {
      x: random(0, width),
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