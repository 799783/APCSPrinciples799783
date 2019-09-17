//Joe Untrecht
class Ball{
  constructor(x,y,dx,dy,w){
    this.loc= createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255),random(255),random(255));
    this.acc=createVector(0,0.5);
    this.w=20;

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
      this.vel.y=this.vel.y+2
    }
    if(this.loc.y>height){
      this.vel.y = -this.vel.y;
    }
  }

  update(){
    this.loc.add(this.vel);
    this.vel.limit(25)
    this.vel.add(this.acc);
  }
  render(){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, this.w, this.w);
    }
  isColliding(){
    if(this.loc.x>paddle.loc.x&&
        this.loc.x<paddle.loc.x+paddle.w&&
        this.loc.y+(this.w/2)>paddle.loc.y&&
        this.loc.y+(this.w/2)<paddle.loc.y+25){
          this.vel.y=-this.vel.y;
          score=score+1;
        }
    if(this.loc.x>paddle.loc.x&&
        this.loc.x<paddle.loc.x+paddle.w&&
        this.loc.y-(this.w/2)<paddle.loc.y+paddle.h&&
        this.loc.y-(this.w/2)>paddle.loc.y+(paddle.h-25)){
          this.vel.y=-this.vel.y;
        }
        }


  }
//end ball class
