var song;
var fft;
var button;

var volhistory = [];

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('rainbow.mp3');
}

function setup() {
  createCanvas(100, 100);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0,512);
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  stroke(255);
  for (var i = 0 ; i < spectrum.length; i++){
    var amp = spectrum[i];
    var y = map(amp, 0, 256, height, 0);
    line(i,height,i,y);
    }
  console.log(spectrum);
  noFill();
}