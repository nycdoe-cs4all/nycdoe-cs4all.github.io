//Adapted from an ml5 sample project - thanks, guys!

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
const classifier = ml5.imageClassifier('MobileNet', modelReady);

// A variable to hold the image we want to classify
var img;

function setup(){
 console.log("ran setup")
 createCanvas(windowWidth,windowHeight)
 background(220);
}

function draw(){
  img = createImg("dog.jpg", imageReady)
  img.position(width/2,0)
  img.size(200,200)
}

// Change the status when the model loads.
function modelReady(){
 console.log("ran modelReady")
 text("Model loaded", width/2, height/2)
}

// When the image has been loaded,
// get a prediction for that image
function imageReady() {
 console.log("ran imageReady");
 classifier.predict(img, gotResult);
}

// A function to run when we get any errors and the results
function gotResult(err, results) {
 if (err) {
   console.error(err);
 }
 console.log("ran gotResult")
 // The results are in an array ordered by probability.
 rect(0,height/2+10,width,100)
 text("I think it is " + results[0].className, width/2, height/2+25);
 text("With a confidence of " + nf((results[0].probability)*100, 0, 2) + "%",width/2,height/2+50)
}
