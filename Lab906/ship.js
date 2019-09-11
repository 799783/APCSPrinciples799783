//Joe Untrecht
//828 Vector
class Ship{
  constructor(x,y,dx,dy){
    this.loc= createVector(x,y);
    this.vel = createVector(dx,dy);
    this.angle= 0;
    this.acc=createVector(0,0);
    this.clr=color(random(255),random(255),random(255));

  }

  run(){
    this.render();
    this.checkEdges();
    this.update();
  }
  checkEdges(){
    if(this.loc.x<0 ) this.loc.x=width;
    if(this.loc.x>width) this.loc.x=0;
    if(this.loc.y<0 ) this.loc.y=height;
    if(this.loc.y>height) this.loc.y=0;
  }

  update(){
    var distattractor;
    var distrepeller;
    distattractor=this.loc.dist(attractor.loc);
    distrepeller=this.loc.dist(repeller.loc);
    if(distattractor<500){
      //attraction
      this.acc=p5.Vector.sub(attractor.loc,this.loc)
      this.acc.normalize();
      this.acc.mult(.5);
    }

    if(distrepeller<200){
      //replusion
      this.acc=p5.Vector.sub(this.loc,attractor.loc)
      this.acc.normalize();
      this.acc.mult(.5);
      this.angle=repeller.loc.heading();
    }

    this.vel.add(this.acc);
    this.vel.limit(2);
    this.loc.add(this.vel);
  }
  render(){
      fill(this.clr);
      triangle(-5,8,5,8,0,-8);
      push();
        translate(this.loc.x,this.loc.y);
        rotate(this.loc.heading());
        triangle(-5,8,5,8,0,-8);
      pop();
    }

}
//end ball class
