//Joe Untrecht
//828 Vector
var dist;
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
    dist=this.loc.dist(planet.loc);
    this.acc=p5.Vector.sub(planet.loc,this.loc)
    this.acc.normalize();
    this.acc.mult(.5);
    this.vel.add(this.acc);
    this.vel.limit(3);
    this.loc.add(this.vel);
  }

  render(){
    this.heading=this.vel.heading();
      fill(this.clr);
      push();
        translate(this.loc.x,this.loc.y);
        rotate(this.heading +1.5);
        triangle(-10,16,10,16,0,-16);
      pop();
    }

}
//end ball class
