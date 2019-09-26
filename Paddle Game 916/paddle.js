//  Joe Untrecht
// 	8/28 Vector
//  This is a comment
//  The setup function function is called once when your program begins
class Paddle{
  constructor(x,y,w,h){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.clr= color(255,0,0);
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
update(){
  //follows mouse
  var MouseLoc=createVector(mouseX,500);
  this.loc=p5.Vector.lerp(this.loc,MouseLoc,.9);
}

}
