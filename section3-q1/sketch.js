
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 30, 50);
}

function balloon(t, x, y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 5; //余白の大きさ
  fill(255,0 ,0);
  rect(x, y, w + p * 2, h + p * 2);
  fill(255);
  text(t, x + p, y + h + p);
}
