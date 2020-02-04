var dog;
var kangaroo;
var lama;

function setup() {
  // put setup code here
createCanvas (800,800);

  dog = loadImage("assets/dog.jpg");
  kangaroo = loadImage("assets/kangaroo.jpg");
  lama = loadImage("assets/lama.jpg");
}

function draw() {
  // put drawing code here
  image(dog, 0, 0, 200, 200) ;
  image(kangaroo, 0, 200, 200, 200) ;
  image(lama, 0, 400, 200, 200) ;
}
