// 小手調べ
function setup(){
  noFill();
   for(let i = 0; i < 10; i++){
     let s=i*10;
    ellipse(50, 50, s, s);
     if(i>=5){
       stroke(255, 0, 0);
     }
     else{
       stroke(0, 0, 255);
  }
   }
}
