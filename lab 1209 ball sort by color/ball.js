//  Joe Untrecht
class Ball{
  constructor(x,y,w,h,a,b,c){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.a=random(255);
    this.b=0;
    this.c=0;
  }
run(){
  //main function in class
  this.render();

}
render(){
  fill(this.a,this.b,this.c);
  ellipse(this.loc.x+20,this.loc.y,this.w,this.h);
}
set(i){
  this.loc.x=i*40;
}
}
