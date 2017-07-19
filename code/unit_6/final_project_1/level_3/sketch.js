var emoji = [];

function setup() {
  createCanvas(600, 600);
  background(0);
  
  //Create 25 emoji objects
  for(var i = 0; i < 25; i++){
    
    //pick a random emoji type
    var expressions = ["HAPPY", "SAD", "BLINKY"];
    var pos = int(random(0, 3));
    console.log(pos);
    emoji[i] = new Emoji(random(width), random(height), random(10, 50), expressions[pos]);
  }
  
}

function draw() {
  background(0);
  for(var i = 0; i < emoji.length; i++){
    emoji[i].move();
    emoji[i].display();
  }
  
}

//Emoji Constructor
var Emoji = function (tempX, tempY, tempSize, emoji) { 
  //emoji argument must be one of the following: "HAPPY", "SAD", "BLINKY"
  this.x = tempX;
  this.y = tempY;
  this.size = tempSize;
  this.speed = 2.5;
  this.emoji = emoji;

  this.move = function() {

    if(this.emoji == "BLINKY"){
        this.x += random(-this.speed * 1.5, this.speed * 1.5);
        this.y += random(-this.speed * 1.5, this.speed * 1.5);

      }
      else if(this.emoji == "HAPPY"){
        this.x += random(-this.speed * 1, this.speed * 1);
        this.y += random(-this.speed * 1, this.speed * 1);

      }
      else if(this.emoji == "SAD"){
        this.x += random(-this.speed * 0.2, this.speed * 0.2);
        this.y += random(-this.speed * 0.2, this.speed * 0.2); 
      }
    
  };

  this.display = function() {
      noStroke();
      if(this.emoji == "BLINKY"){
        //face
        fill(255);
        ellipse(this.x, this.y, 100, 100);

        fill(0);  
        stroke(1);
        //eye 1
        line(this.x - 10, this.y + 10, this.x, this.y + 5); //closed eye
        //eye 2
        line(this.x + 10, this.y + 5, this.x + 20, this.y + 10); //closed eye
        //smiling mouth
        arc(this.x, this.y + 25, 30, 30, 0, radians(180), PIE);  

      }
      else if(this.emoji == "HAPPY"){
        //face
        fill(100);
        ellipse(this.x, this.y, 100, 100);

        fill(0);
        //eye 1
        ellipse(this.x, this.y + 10, 10, 10);
        //eye 2
        ellipse(this.x + 20, this.y + 10, 10, 10); //normal eye
        //mouth
        arc(this.x, this.y + 25, 30, 30, 0, radians(180), PIE); 

      }
      else if(this.emoji == "SAD"){
        //face
        fill(50);
        ellipse(this.x, this.y, 100, 100);

        fill(0);
        //eye 1        
        ellipse(this.x, this.y + 10, 10, 10);
        //eye 2
        ellipse(this.x + 20, this.y + 10, 10, 10); //normal eye
        //mouth
        arc(this.x, this.y + 35, 30, 30, radians(180), 0, PIE);  
        
      }
      
  }
};



