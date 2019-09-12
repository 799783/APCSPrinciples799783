//  Joe Untrecht
// 	8/28 Vector
//  This is a comment
//  The setup function function is called once when your program begins
class Paddle{
  constructor(x,y,w,h){
    this.loc=createVector(x,y);
    this.w= 100;
    this.h=25;
    this.clr= color(random(255),random(255),random(255));
  }
run(){
  this.render();
  this.checkEdges();
  this.update();
}
render(){
  fill(this.clr);
  rect(this.loc.x,this.loc.y,this.w,this.h);
}
checkEdges(){

}
update(){

}
}
