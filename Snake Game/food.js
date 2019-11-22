//  Joe Untrecht
// 	9/16 Paddle Game
//  This is a comment
//  The setup function function is called once when your program begins

class Food{
  constructor(x,y,w,id){
    //food inputs
    this.loc=createVector(x,y);
    this.w=w;
    this.clr=color(0,255,0);
    this.id=id;
  }

  run(){
    //overall run function
    this.render();
    this.update();
  }

  render(){
    //renders image on screen at position according to the food's inputs
    image(img,this.loc.x*this.w,this.loc.y*this.w);
  }

  update(){
    //displays score
    textSize(25);
    fill(0,0,255);
    text('Score: '+ numberFood, 650,20);
    }

}
