
var rowsSlider;
var generateBtn; 

function setup() {
  //Interface
  rowsSlider = createSlider(1, 8, 2);

  generateBtn = createButton('Generate');
  generateBtn.mousePressed(generate);

  //Canvas
  createCanvas(600, 350);
    
  //Use the Hue, Saturation, Brightness color model
  colorMode(HSB);

  //Draw rectangles from their top-left corner
  rectMode(CORNER);

  //Only run the draw loop once
  noLoop();

  //Turn off drawing strokes
  noStroke();

  generate();
  
}

function draw() {
  
}

function generate(){
  var rows = rowsSlider.value();
  console.log("rows", rows);
  var cols = rows; //since our grid is square, set the number of rows to be the same as the number of columns

  //calculate size of squares depending on number of columns
  var size = height / cols;

  for(var j = 0; j < cols; j++){
    for(var i = 0; i < cols; i++){
      //Pick a color for the small square
      var hue = random(0, 60); //a hue between red and yellow
      var saturation = 80; //make the color saturated
      var brightness = 100; //make the color bright

      //For the background square, 
      //take the hue of the square and get the opposite hue in the color wheel, by adding 180 degrees to it
      //Make backround less saturated and less bright than the front rectangle
      fill(hue + 180, saturation - 15, brightness - 35);
      //Draw background square
      rect(i*size, j*size, size, size);
      
      //Set the fill for the small square
      fill(hue, saturation, brightness);
      //Draw small square
      rect( i*size + size/3, //x. draw a third in
            j*size + size/3, //y. draw a third down
            size/3, 
            size/3);
           
    }
  }
}
