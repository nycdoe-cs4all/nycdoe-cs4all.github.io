var tree;

function preload() {
  tree = loadImage("birch.png")
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  //I turned the loop off so it would load faster
  noLoop()
}

function draw() {
  background(220);

  for(x=0; 300 > x; x+=50){
    tint(180,70,60)
    image(tree,x,0,150,200);
  }

  for(x=0; 300 > x; x+=50){
    tint(70,50,60)
    image(tree,x,100,150,200);
  }

  for(x=0; 300 > x; x+=50){
    tint(20,20,80)
    image(tree,x,200,150,200);
  }


}
