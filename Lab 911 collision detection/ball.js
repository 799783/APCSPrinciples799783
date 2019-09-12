//Joe Untrecht
class Ball{
  constructor(x,y,dx,dy){
    this.loc= createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255),random(255),random(255));
    this.acc=createVector(0,0);
    //this.w= random(10,70);

  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
    this.isColliding();
  }
  checkEdges(){
    if(this.loc.x<0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x>width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y<0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y>height){
      this.vel.y = -this.vel.y;
    }
  }

  update(){
    this.loc.add(this.vel);
    this.vel.add(this.acc);
  }
  render(){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, 10, 10);
    }
  isColliding(){
    if(this.loc.x>paddle.loc.x&&
        this.loc.x<paddle.loc.x+paddle.w&&
        this.loc.y>paddle.loc.y&&
        this.loc.y<paddle.loc.y+paddle.h){
          this.vel.x=-this.vel.x
        }
      }


  }
//end ball class
