//add during codealong
var imgPicker;
var listOfImg = ["cat.jpg", "dog.jpg", "mouse.jpg", "robin.jpg"]
console.log(listOfImg.length)
//end code along additions

//setup just like in every p5 sketch!
function setup(){
 createCanvas(windowWidth,windowHeight)
 background(220);

//add during codealong
//adjust to take the length of array
 imgPicker = createSlider(0,(listOfImg.length)-1,1)
 imgPicker.position(width/2,220)
//end code along additions
}

function draw(){
//add during code along
var imgSelect = imgPicker.value()

//during codealong, update img = to reflect array
  img = createImg(listOfImg[imgSelect], imageReady)
  img.position(width/2,0)
  img.size(200,200)
//end code along additions
}
