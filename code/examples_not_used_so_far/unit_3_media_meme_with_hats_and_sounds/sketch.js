// description: 'On click, have the doggos bark and the sneks hiss (ADD SOUND).</br>Add an interface to your generator. Allow people to pick their stroke and fill; .</br> have the textSize adapt depending on the text length; to choose between two different image sources (for example, pick between the doggo folder and the snek folder).  </br> Add quick DOM intro for this? or do this part in last unit?',

//Interface elements
//(see this tutorial: https://github.com/processing/p5.js/wiki/Beyond-the-canvas)
//(and the p5 reference on DOM: )
var fillButonYellow, fillButtonGreen;
var hatButton, noHatButton;
var fillColor;

//Sound efects source: http://www.partnersinrhyme.com/soundfx/animals/Snakes.shtml

var fonts = ["Gloria Hallelujah", "PressuruRegular"];
              

var taglines = ["pls no boop DO NOT", 
            "am scary cober I do a flat hiss don't heck with me am much venom", 
            "i heckin warned u"];

var imgs = [
              { path:"images/pupper.jpg",
                text_area:{
                        x:20,
                        y:250,
                        w:350,
                        h:100
                      },
                hat:{
                		x:80,
						y:-50,
						w:200,
						h:200
                	},
                sound:"sounds/bark.wav"
              },
              { path:"images/snek.png",
              	hat:{
                		x:275,
						y:55,
						w:60,
						h:60
                	},
                text_area:{
                        x:15,
                        y:10,
                        w:150,
                        h:300
                      },
                sound:"sounds/hiss.wav"
              }
            ];

hats = ["images/hats/scumbagHat.png", "images/hats/topHat.png"];
var drawHat = true;

var img;
var img_data;

var font;
var tagline;

var sound;
var hat;

function preload(){
  tagline = taglines[floor(random(taglines.length))];
  font = fonts[floor(random(fonts.length))]; 

  var img_pos = floor(random(imgs.length));
  img_data = imgs[img_pos]; //save image data to access text position later
  img = loadImage(img_data.path);

  var hat_pos = floor(random(2)); //a random number between 0 and 1
  hat = loadImage(hats[hat_pos]);

  sound = loadSound(img_data.sound);
  
}

function setup() {
  createCanvas(400, 400);

  fillColor = color(255, 255, 0);

  fillButtonYellow = createButton('YELLOW');
  fillButtonYellow.position(420, 20);
  fillButtonYellow.mousePressed(setFillYellow);

  fillButtonGreen = createButton('GREEN');
  fillButtonGreen.position(480, 20);
  fillButtonGreen.mousePressed(setFillGreen);

  hatButton = createButton('TOGGLE HAT');
  hatButton.position(420, 60);
  hatButton.mousePressed(toggleHat);
  
}

function draw() {

  //draw image
  image(img, 0, 0, width, height);

  
  if(drawHat){
  	//draw hat
  	image(hat, img_data.hat.x, img_data.hat.y, img_data.hat.w, img_data.hat.h);	
  }
  
  
  //draw text
  textFont(font); 
  textSize(30);
  strokeWeight(3);
  stroke(0);
  fill(fillColor);
  
  text(tagline, img_data.text_area.x, img_data.text_area.y, img_data.text_area.w, img_data.text_area.h);

  //To help place elements
  // text(mouseX + ", " + mouseY, 40, 40);
  
}

function mousePressed(){
	sound.play();
}

function setFillYellow(){
	fillColor = color(255, 255, 0);
}

function setFillGreen(){
	fillColor = color(100, 255, 0);
}

function toggleHat(){
	drawHat = !drawHat;
}






