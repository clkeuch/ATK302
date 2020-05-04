var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;


function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=60451,us&units=imperial&';
  var myIDString = 'appid=4cd42262d800f606a6d7e55fbde1e293'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background(200) ;
    text("The weather in " + weather.name, 20, 20) ;
    text("temperature = " + weather.main.temp, 20, 50) ;
    text("Wind speed =" + weather.wind.speed, 20, 80) ;
    rect(300, 10, 10, weather.main.temp) ;
// parse the weather object and put some text or images using at least 3 different weather data!
      break;

  }
}
