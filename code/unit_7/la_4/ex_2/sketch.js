var numFrames = 12; // The number of frames

  var images = []; // Make the array

  var currentFrame = 0;

  function preload() {
    for (var i = 0; i < numFrames; i++) {
      var imageName = "../../media/frame-" + nf(i, 4) + ".png";
      images[i] = loadImage(imageName); // Load each image

    }
  }

  function setup() {
    createCanvas(600, 120);
    background(240);
    frameRate(24);
  }

  function draw() {
    image(images[currentFrame], 0, 0);
    currentFrame++; // Next frame

    if (currentFrame == images.length) {
      currentFrame = 0;  // Return to first frame

    }
  }