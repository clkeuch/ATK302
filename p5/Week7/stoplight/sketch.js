var timer = 0;
var myState = 0;


function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  fill('yellow');
  rect(width / 2, height / 2, 150, 400);

  switch (myState) {
    case 0: //red light
      fill('black');
      ellipse(width/2, height/2, 100, 100);
      fill('black');
      ellipse(width/2, height/2-110, 100);
      fill('red');
      ellipse(width/2, height/2+110, 100);
      timer++ ;
      if(timer > 200) {
        timer = 0 ;
        myState = 1;
      }
      break;
    case 1: //green light
    fill('green');
    ellipse(width/2, height/2, 100, 100);
    fill('black');
    ellipse(width/2, height/2-110, 100);
    fill('black');
    ellipse(width/2, height/2+110, 100);


    timer++ ;
    if(timer > 200) {
      timer = 0 ;
      myState = 2;
    }
    break;

    case 2: //yellow light
    fill('black');
    ellipse(width/2, height/2, 100, 100);
    fill('yellow');
    ellipse(width/2, height/2-110, 100);
    fill('black');
    ellipse(width/2, height/2+110, 100);


    timer++ ;
    if(timer > 200) {
      timer = 0 ;
      myState = 0;
    }


  }
}
