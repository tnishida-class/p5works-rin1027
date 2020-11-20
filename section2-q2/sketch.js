// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i =0; i<8; i++){
    for(let j =0; j<8; j++){
 if((i+j)%2==0){
   fill(255);
 }
 else{
     fill(128);
   }

   rect(size*i, size*j, size, size);

   for(let j= 0; j<3; j++){
     if( (i+j)%2 !=0 ){
       fill(255, 0, 0);
       ellipse((size*i+size*(i+1))/2, (size*j+size*(j+1))/2, size,size);
     }
   }
  for(let j= 5; j <8; j++){
     if( (i+j)%2 !=0 ){
       fill(0);
       ellipse((size*i+size*(i+1))/2, (size*j+size*(j+1))/2, size,size);
     }
   }
    }

    }
}
