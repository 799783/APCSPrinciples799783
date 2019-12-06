//Joe Untrecht
//12/03 Vector
//ball.js
class Planet{
  constructor(x,y,dx,dy){
    this.loc= createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255),random(255),random(255));
    this.acc=createVector(0,0);
    this.w=50;

  }

  run(){
    this.render();
    this.checkEdges();
    this.update();
  }
  checkEdges(){
    //teleports planet if it hits any edges
    if(this.loc.x>800){
      this.loc.x=0;
    }
    if(this.loc.x<0){
      this.loc.x=800;
    }
    if(this.loc.y>800){
      this.loc.y=0;
    }
    if(this.loc.y<0){
      this.loc.y=800;
    }

  }

  update(){
    //if the ship gets close to planet
    //planet moves
    this.vel.limit(3);
    this.loc.add(this.vel);
    this.vel.add(this.acc);
  }
  render(){
    //renders planet
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, this.w, this.w);
    }

}
//end ball class
