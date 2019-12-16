//Joe Untrecht
//12/03 Vector
//ball.js
class Planet{
  constructor(x,y){
    this.loc= createVector(x,y);
    this.clr = color(random(255),random(255),random(255));
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
    for (var i=0; i<planet.length; i++){
      if(this.loc.dist(ship.loc)<100){
        this.loc=createVector(random(width),random(height));
      }
    }
  }
  render(){
    //renders planet
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, this.w, this.w);
    }

}
//end ball class
