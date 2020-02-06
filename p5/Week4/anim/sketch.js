var x = 0;


function setup() {
  // put setup code here
  createCanvas(800,800)
}

function draw() {
  background ('blue');

  push();
  translate(x, 0);
  guy();
  pop();

  x = x + 5;
  if(x > width){
    x = -300;
  }
  // put drawing code here
}






function guy(){

  rectMode(CENTER);
  ellipseMode(CENTER);



    // put drawing code here
  background(0,0,255);
  fill(255, 235, 153);
  ellipse(500,160,125,125);//Head
  fill(255, 0, 0);
  rect(500,400,175,300);//base of shirt
  fill(0,0,0);
  rect(460,662,70,225);//pants
  rect(540,662,70,225);//pants
  fill(255,0,0);
  rect(375,350,55,200);
  rect(625,350,55,200);
  fill(255,235,153);
  noStroke();
  rect(500,225,55,50);//neck
  fill(191,128,255);
  ellipse(460,775,75,50);//shoe
  ellipse(540,775,75,50);//shoe
  fill(255,0,0);
  ellipse(407,262,25,25);//shoulder
  ellipse(592,262,25,25);//shoulder
  fill(0,0,0);
  ellipse(475,140,25,25);
  ellipse(525,140,25,25);
  rect(500,191,40,15);
  fill(0,255,0);
  ellipse(156,110,250,250);
  fill(153, 102, 0);
  rect(150,450,100,450);
  fill(255, 255, 0);
  ellipse(1600,100,200,200);

  //stuff that we always want to show




}
