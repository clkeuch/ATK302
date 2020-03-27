var x = 0;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  ellipseMode(CENTER);
  // put setup code here
}

function draw() {

  background('lightblue');


  push();
  translate(x, 0);
  makecovid();
  x = x + 5 ;
  if (x > width){
    x = -300 ;
  }
  pop() ; // put drawing code here


}


function makecovid() {
  noStroke();
  fill("red");
  ellipse(100, 100, 100, 100);
  ellipse(140, 140, 40, 40);
  ellipse(140, 60, 40, 40);
  ellipse(50, 130, 40, 40);
}
