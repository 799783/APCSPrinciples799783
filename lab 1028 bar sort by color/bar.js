//  Joe Untrecht
class Bar{
  constructor(x,y,w,h,a,b,c){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.a=random(255);
    this.b=random(255);
    this.c=random(255);
    this.colorAv=((this.a+this.b+this.c)/3);
  }
run(){
  //main function in class
  this.render();

}
render(){
  fill(this.a,this.b,this.c);
  rect(this.loc.x,this.loc.y,this.w,this.h);
}
set(i){
  this.loc.x=i*25;
}
}
