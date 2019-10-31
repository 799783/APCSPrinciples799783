//  Joe Untrecht
// 	9/16 Paddle Game
//  This is a comment
//  The setup function function is called once when your program begins

class Snake{
  constructor(x,y,dx,dy,w,id){
    this.loc=createVector(x,y);
    this.vel=createVector(dx,dy)
    this.w=25;
    this.clr=color(255,0,0);
    this.id=id;
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
