var song;
var fft;
var button;

var volhistory = [];
var w;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('12.mp3');
}

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0,64);
  w = width/64;
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  stroke(255);
  for (var i = 0 ; i < spectrum.length; i++){
    var amp = spectrum[i];
    var y = map(amp, 0, 256, height, 0);
    fill(i, 255, 255);
    rect(i*w,y,w,height - y);
    }
  console.log(spectrum);
  noFill();
}