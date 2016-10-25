function setup() {
  createCanvas(800,600);
  background(204)
}

function draw() {
  push();
  translate(width/2,height/2);
  rect(0,0,75,75);
  pop();
  rect(0,0,75,75);
  
}