//Joe Untrecht
//1203 Vector
//ship.js
var dist;
var min;
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
    //finds smallest distance
    min=0;
    for (var i=0; i<planet.length; i++){
      dist[i]=this.loc.dist(planet[i].loc);
      if (i>0){
        if(dist[i]<dist[min]){
          min=i;
        }
      }
    }
    //moves ship with attraction
    this.acc=p5.Vector.sub(planet[min].loc,this.loc);
    this.acc.normalize();
    this.acc.mult(.5);
    this.vel.add(this.acc);
    this.vel.limit(3);
    this.loc.add(this.vel);
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
//end ball class
