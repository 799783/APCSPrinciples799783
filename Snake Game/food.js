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
    //fill(this.clr);
    //rect(this.loc.x*this.w,this.loc.y*this.w,this.w,this.w);
    image(img,this.loc.x*this.w,this.loc.y*this.w);
  }

  update(){
    textSize(25);
    fill(0,0,255);
    text('Score: '+ numberFood, 650,20);
    }

}
