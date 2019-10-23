//  Joe Untrecht
class Bar{
  constructor(x,y,w,h,c){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
  }
run(){
  //main function in class
  this.render();
  this.update();

}
render(){
  fill(0,255,255);
  rect(this.loc.x,this.loc.y,this.w,this.h);
}

update(){
  for (var i=bars.length-1;i>0; i--){
    for (var j=0; j<i; j++){
      if(bars[j].h>bars[j+1].h){
        swap(bars, j, j+1);
      }
    }
  }
}

}

function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
