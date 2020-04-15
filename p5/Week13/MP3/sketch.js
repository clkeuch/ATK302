var cars = [];
var frogPos;
var myState = -1;
var maxTimer = 20*60 ;

var timer = 0;
var song1;
var ducky;
var pickle;

function preload() {
  song1 = loadSound('Assets/Mario.mp3');

}

function setup() {
  createCanvas(800, 800);

  for (var i = 0; i < 15; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(400, height - 100);
  //test

  textAlign(CENTER);
  imageMode(CENTER);
  dinosaur = loadImage('Assets/dinosaur.png');
  pickle = loadImage('Assets/pickle.png');

}

function draw() {

  switch (myState) {

    case -1:
      song1.loop(); // this is what starts the sound
      myState = 0;
      break;


    case 0: // menu
      background('green');
      fill('white');
      textSize(24);
      text("Welcome to my game!", width / 2, height / 2)
      break;

    case 1: // game state
      game();
      timer++;
      if (timer > maxTimer) {
        myState = 3;
      }
      break;

    case 2: // win state
      background('blue')
      text("Yay you won!", width / 2, height / 2)
      break;

    case 3: // lose
      background('red')
      text("You Lost!", width / 2, height / 2)
      break;
  }



}

function reset() {
  timer = 0;

  for (var i = 0; i < 20; i++) {
    cars.push(new Car());
  }
}

function game() {



  background('lightblue');

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);

    }
  }
  if (cars.length == 0) {
    myState = 2;
  }

  // frog
  //fill('green');
  //circle(frogPos.x, frogPos.y, 50, 50);
  image(dinosaur, frogPos.x, frogPos.y, 100, 100);
  checkForKeys();
}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}


// our Car class!!!!!
function Car() {
  // atributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  // methods
  this.display = function() {
    //fill(this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, 30, 30);
    image(pickle, this.pos.x, this.pos.y, 50, 50);

  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2:
      reset();
      myState = 0;
      break;

    case 3:
      reset();
      myState = 0;
      break;
  }
}
