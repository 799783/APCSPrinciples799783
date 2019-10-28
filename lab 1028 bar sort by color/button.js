//  Joe Untrecht
class Button{
  constructor(x,y,w,h,id){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.id=id;
  }
run(){
  //main function in class
  this.render();

}

render(){
  if(this.id===0){
    fill(255,0,0);
  }
  if(this.id===1){
    fill(0,255,0);
  }
  if(this.id===2){
    fill(0,0,255);
  }
  rect(this.loc.x,this.loc.y,this.w,this.h);
}

}
