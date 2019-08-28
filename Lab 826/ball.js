//Joe Untrecht
//821
class Ball{
  constructor(x,y,dx,dy){
    this.x= x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    //this.clr = color(random(255),random(255),random(255));
    this.w= random(10,70);
    this.shape=random(1,2);
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }
  checkEdges(){
    if(this.x<0){
      this.dx = -this.dx;
    }
    if(this.x>width){
      this.dx = -this.dx;
    }
    if(this.y<0){
      this.dy = -this.dy;
    }
    if(this.y>height){
      this.dy = -this.dy;
    }
  }

  update(){
    this.clr = color(random(255),random(255),random(255));
    this.x=this.x + this.dx;
    this.y = this.y + this.dy;
  }
  render(){
    if (this.shape<.9){
      fill(this.clr);
      ellipse(this.y, this.x, this.w, this.w);
    }
    else{
      fill(this.clr);
      rect(this.y,this.x,this.w,this.w)
    }

  }
}//end ball class
