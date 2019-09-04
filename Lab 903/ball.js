//Joe Untrecht
//828 Vector
class Ball{
  constructor(x,y,dx,dy,id){
    this.loc= createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255),random(255),random(255));
    this.acc=createVector(0,.24);
    this.w=15;
    this.id=id;
    if (this.id<0){
      this.w=50
    }

  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
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
      this.loc.y=height-2;
    }
  }

  update(){
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    var distTomainBall;
    if(this.id>=0){
      distTomainBall = this.loc.dist(mainBall.loc);
      if (distTomainBall<250){
        this.acc=p5.Vector.sub(mainBall.loc,this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      if(distTomainBall<150){
        this.acc=p5.Vector.sub(this.loc,mainBall.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
      }
    }
  }
  render(){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, this.w, this.w);
    }

  }
//end ball class
