var myState = 0;

function setup() {
  // put setup code here
  createCanvas(1000, 500);
}

function draw() {
  // put drawing code here
  background('black');

  switch (myState) {
    case 0:
    fill("white");
    text("Why do we tell actors to break a leg?", 100, 100) ;
    timer ++ ;
    if (timer > 200){
      myState = 1 ;
      timer = 0 ;
    }
    break ;

    case 1:
    text("Because every play has a cast!", 100, 100) ;
    timer ++ ;
    if (timer > 200){
      myState = 0 ;
    }
    break;


  }
}
