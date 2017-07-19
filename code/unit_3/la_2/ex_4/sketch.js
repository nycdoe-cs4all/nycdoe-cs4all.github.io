var possible_dog_images;
var dog;

var heart;

var dog1, dog2, heart;



function preload(){
	//create an array of dog image file names
	possible_dog_images = [
		"../../media/pupper.png",
       	"../../media/doggo.gif", 
    ];

    //pick a random dog image
  	var pos = floor(random(possible_dog_images.length));

  	//load the picked image
  	dog = loadImage(possible_dog_images[pos]);

  	//load the heart image
	heart = loadImage("../../media/heart.svg");

}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(204);
  
  image(dog, 0, 0);
  image(heart, random(-10, 10), random(-4, 4), width, height);
  
  
}


