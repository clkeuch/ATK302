var song1;

function preload() {
    song1 = loadSound('assets/Bell.mp3');
}

function setup() {

  createCanvas(720,200);
  background(255,0,0);
  song1.play();  // put setup code here
}

function draw() {


  // put drawing code here
}

function mouseReleased(){
  if (song1.isPlaying()){
song1.pause();
}else{
  song1.play();
}

function touchStarted() {
  getAudioContext().resume();
}
