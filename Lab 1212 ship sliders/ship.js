//Joe Untrecht
//1212 Vector
//ship.js

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
    //teleports ship if they hit edges
    if(this.loc.x<0 ) this.loc.x=width;
    if(this.loc.x>width) this.loc.x=0;
    if(this.loc.y<0 ) this.loc.y=height;
    if(this.loc.y>height) this.loc.y=0;
  }

  update(){
    //ships move according to planet's position
    this.acc=p5.Vector.sub(planet.loc,this.loc)
    this.acc.normalize();
    this.acc.mult(sliderAttraction.value());
    this.vel.add(this.acc);
    this.vel.limit(sliderLimit.value());
    this.loc.add(this.vel);
    if ((this.loc.dist(planet.loc))<20){
      this.loc=createVector(random(800),random(800));
      planet.loc=createVector(random(width),random(height));
      planet.vel=createVector(random(-3,3),random(-3,3));
    }
  }

  render(){
    //renders ship
    this.heading=this.vel.heading();
      fill(this.clr);
      push();
      //rotates and translates ship
        translate(this.loc.x,this.loc.y);
        rotate(this.heading +1.5);
        triangle(-10,16,10,16,0,-16);
      pop();
    }

}
