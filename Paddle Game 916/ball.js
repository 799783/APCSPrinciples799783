//Joe Untrecht
class Ball{
  constructor(x,y,dx,dy,w,id){
    this.loc= createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255),random(255),random(255));
    this.acc=createVector(0,0.5);
    this.w=20;
    this.id=id;

  }
  run(){
    this.checkEdges();
    this.render();
    this.isColliding();
    this.update();
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
    for(var i=balls.length-1;i>=0;i--){
      if(balls[i].isColliding()){
        if(this.vel.y>0){
          balls.splice(i,1);
          score=score+1;
          //console.log(score)
        }
        if(this.vel.y<0){
          balls.splice(i,1);
          health=health-1;
          //console.log(health)
        }
      }
    }
    this.loc.add(this.vel);
    this.vel.limit(25)
    this.vel.add(this.acc);
    if(balls.length<=0&& iteration<=3&& health>0){
      if(gameMode==='easy'){
        loadObjects(5);
      }
      if(gameMode==='medium'){
        loadObjects(10);
      }
      if(gameMode==='hard'){
        loadObjects(25);
      }
      runBalls();
      iteration=iteration+1;
    }
  }
  render(){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, this.w, this.w,this.id);
    }

  isColliding(){
    if(this.loc.x>paddle.loc.x&&
        this.loc.x<paddle.loc.x+paddle.w&&
        this.loc.y+(this.w/2)>paddle.loc.y&&
        this.loc.y+(this.w/2)<paddle.loc.y+paddle.h){
          return (true);
        }else{
          return (false);
        }
        }


  }
//end ball class
