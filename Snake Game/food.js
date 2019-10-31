//  Joe Untrecht
// 	9/16 Paddle Game
//  This is a comment
//  The setup function function is called once when your program begins

class Snake{
  constructor(x,y,w,h,c,id){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.clr=c;
    this.body=id;
  }

  run(){
    this.render();
    this.update();
  }

  render(){
    
  }

  update(){

  }

}
