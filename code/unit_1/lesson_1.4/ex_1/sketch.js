function setup(){
    createCanvas(600, 120);
}

function draw() {
    beginShape();
    vertex(x, y); //Coordinate of Vertex 1
    vertex(x, y); //Coordinate of Vertex 2
    vertex(x, y); //Coordinate of Vertex 3
    vertex(x, y); //Coordinate of Vertex 4
    vertex(x, y); //Coordinate of Vertex 5
    endShape(CLOSE);
}
