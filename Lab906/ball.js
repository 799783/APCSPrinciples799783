//Joe Untrecht
//828 Vector
class Ball{
  constructor(x,y,dx,dy,id){
    this.loc= createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255),random(255),random(255));
    this.acc=createVector(0,0);
    this.id=id;
    if (this.id<0){
      this.w=50;
    }
    else{
      this.w=15
    }

  }

  run(){
    this.render();
    this.checkEdges();
    this.update();
  }
  checkEdges(){
    if(this.id>=0){
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
  if(this.id<0){
    if(this.loc.x>800){
      this.loc.x=0
    }
    if(this.loc.x<0){
      this.loc.x=800
    }
    if(this.loc.y>800){
      this.loc.y=0
    }
    if(this.loc.y<0){
      this.loc.y=800
    }
  }
  }

  update(){
    //var distToMainBallatt
    //var distToMainBallrep
//    if(this.id >= 0){
  //    distToMainBallatt = this.loc.dist(attractor.loc);
//      distToMainBallrep = this.loc.dist(repeller.loc);
//      if (distToMainBallatt<500){
//        //attraction
//        this.acc= p5.Vector.sub(mainBallatt.loc,this.loc);
//        this.acc.normalize();
  //      this.acc.mult(.5);
//      }
//      if(distToMainBallrep<200){
        //repulsion
//        this.acc=p5.Vector.sub(this.loc,mainBallrep.loc);
//        this.acc.normalize();
//        this.acc.mult(0.5);
//      }
//    }
    this.vel.limit(5);
    this.loc.add(this.vel);
    this.vel.add(this.acc);
  }
  render(){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, this.w, this.w);
    }

}
//end ball class
