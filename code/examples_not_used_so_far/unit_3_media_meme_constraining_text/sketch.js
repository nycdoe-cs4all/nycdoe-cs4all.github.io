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
                      }
              },
              { path:"images/snek.png",
                text_area:{
                        x:15,
                        y:10,
                        w:150,
                        h:300
                      }
              }
            ];

var img;
var img_data;
var font;
var tagline;

function preload(){
  tagline = taglines[floor(random(taglines.length))];
  font = fonts[floor(random(fonts.length))]; 

  var img_pos = floor(random(imgs.length));
  img_data = imgs[img_pos]; //save image data to access text position later
  img = loadImage(img_data.path);
  
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //draw image
  image(img, 0, 0, width, height);
  
  //draw text
  textFont(font); 
  textSize(30);
  strokeWeight(3);
  stroke(255, 255, 0);
  fill(0);
  
  text(tagline, img_data.text_area.x, img_data.text_area.y, img_data.text_area.w, img_data.text_area.h);
  
}