//  Joe Untrecht
// 	9/16 Paddle Game
//  This is a comment
//  The setup function function is called once when your program begins

class Food{
  constructor(x,y,w,id){
    this.loc=createVector(x,y);
    this.w=w;
    this.clr=color(0,255,0);
    this.id=id;
  }

  run(){
    this.render();
    this.update();
  }

  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.w,this.w);
  }

  update(){

  }

}
