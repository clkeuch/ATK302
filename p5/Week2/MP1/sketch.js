function setup() {
  // put setup code here
createCanvas(2000,1000);
rectMode(CENTER);
ellipseMode(CENTER);
}

function draw() {
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

  if (mouseIsPressed) {
    background(50, 72, 168);
    fill(255, 235, 153);
    ellipse(1100,430,100,100);//Head
    fill(255, 0, 0);
    rect(1100,640,150,275);//base of shirt
    fill(0,0,0);
    rect(1060,877,45,200);//pants
    rect(1140,877,45,200);//pants
    fill(255,0,0);
    rect(1010,460,30,175);//arm
    rect(1190,460,30,175);//arm
    fill(255,235,153);
    noStroke();
    rect(1100,490,30,25);//neck
    fill(191,128,255)
    ellipse(1063,970,50,25);//shoe
    ellipse(1145,970,50,25);//shoe
    fill(255,0,0)
    ellipse(1075,520,15,15);//shoulder
    ellipse(1192,520,15,15);//shoulder
    fill(0,0,0);
    ellipse(1075,410,15,15);
    ellipse(1125,410,15,15);
    rect(1100,445,40,15);
    fill(0,255,0);
    fill(164, 164, 166);
    ellipse(1600,100,200,200);
    //ellipse(156,110,250,250)
    //fill(153, 102, 0)
    //rect(150,450,100,450)
//stuff that shows when the mouse is pressed

 } else {
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
   fill(191,128,255)
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
   //when the mouse isnt pressed

 }


fill(0) ;
textSize(40) ;
text(mouseX +", " + mouseY, 40,40);
}










function mouseReleased() {
console.log(mouseX + ", " + mouseY) ;
}//Do not touch. Used for mouse function only
