var myState = 0;
var timer = 0;
var Parents ;
var x=0;


function setup() {
  // put setup code here
  createCanvas(1500, 800);

  Chris = loadImage("assets/Chris.jpg");
  ChrisKeuch = loadImage("assets/ChrisKeuch.jpg");
  Bros = loadImage("assets/Bros.jpg");
  Parents = loadImage("assets/Parents.jpg");
  ckeuch = loadImage("assets/ckeuch.jpg");

}

function draw() {
  // put drawing code here

  switch (myState) {
    case 0:
      background('#A6DAEF');
      textSize(35);
      text("Hello. My name is Christopher Keuch! I am going to tell you a little bit about myself today!", 100, 100);
      image(Chris, 600,200,300,600);



      fill("blue");


      timer++;
      if (timer > 200) {
        myState = 1;
        timer = 0;
      }


      break;

    case 1:
      background('#A6DAEF');
      fill("blue");
      textSize(35);
      text("I am currently a junior and my dream is to one day to become a graphic designer!", 100, 100);
      image(ChrisKeuch, 550,200,400,500);

      break;

    case 2:
      background('#A6DAEF');
      textSize(35);
      text("I have two older brothers, and I consider them my role models.", 100, 100);
      image(Bros, 200,200, 700,500) ;

      break;

    case 3:
      background('#A6DAEF');
      textSize(30);
      text("I love my parents very dearly! Without them I would not be here and I am forever grateful for them!", 100, 100);
      image(Parents,550,200,300,650);




      break;



    case 4:
      background('#A6DAEF');
      textSize(35);
      text("Thank you all for listening and I hope everyone has a great Spring Break!",100, 100);
      image(ckeuch,x,200,300,600);
      x++;
      if (x > width) x=0;


      break;


  }


}


function mouseReleased() {
  console.log(mouseX + ", " + mouseY);
}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 4) {
    myState = 0;
  }


}
