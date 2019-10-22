//  Joe Untrecht
class Bar{
  constructor(x,y,w,h,c){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.clr= c;
  }
run(){
  //main function in class
  this.render();
  this.update();

}
render(){
  //creates paddle
  fill(this.clr);
  rect(this.loc.x,this.loc.y,this.w,this.h);
}

}
