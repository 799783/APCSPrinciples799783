//  Joe Untrecht
class Button{
  constructor(x,y,w,h,id,a,b,c){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.id=id;
    this.a=random(255);
    this.b=random(255);
    this.c=random(255);
  }
run(){
  //main function in class
  this.render();

}

render(){
  fill(this.a,this.b,this.c);
  rect(this.loc.x,this.loc.y,this.w,this.h);
}

}
