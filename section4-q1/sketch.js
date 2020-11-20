
let x;
let y;
let size;

function setup(){
  createCanvas(200, 200);
  x = 0;
  y = 100;
  size = 60;
}

function draw(){
  background(160, 192, 255);
  x = (x + 1) % y;
  // BLANK[1]
  ellipse(width / 2, height / 2, size);
    if(x <= 50){
    size += 1
  }
  else{
    size -= 1
  }
}
