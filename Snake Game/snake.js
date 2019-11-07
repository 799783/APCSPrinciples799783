//  Joe Untrecht
// 	9/16 Paddle Game
//  This is a comment
//  The setup function function is called once when your program begins
class Snake{
  constructor(x,y,dx,dy,w,c){
    this.loc=createVector(x,y);
    this.vel=createVector(dx,dy);
    this.w=w;
    this.clr=c;
    this.body=[];
  }

  run(){
    this.render();
    this.checkEdges();
    this.update();
    this.tangled();
    this.hitFood();
  }

  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.w,this.w);
  }

checkEdges(){
  //if hits left side
  if(this.loc.x<0){
    endGame='yes';
  }
  if(this.loc.x>width){
    //if hits right side
    endGame='yes';
  }
  if(this.loc.y<0){
    //if hits top
    endGame='yes';
  }
  if(this.loc.y>height){
    //if hits bottom
    endGame='yes';
  }
}

  update(){
    if(keyIsPressed){
      if (keyCode===RIGHT_ARROW){
        for(var i=0; i<segments.length;i++){
          if(segments[i].loc.y===yTurnLocation){
            segments[i].vel.x=3;
            segments[i].vel.y=0;
          }
        }
      }
      if (keyCode===LEFT_ARROW){
        for(var i=0; i<segments.length;i++){
          if(segments[i].loc.y===yTurnLocation){
            segments[i].vel.x=-3;
            segments[i].vel.y=0;
          }
        }
      }
      if (keyCode===UP_ARROW){
        for(var i=0; i<segments.length;i++){
          if(segments[i].loc.x===xTurnLocation){
            segments[i].vel.x=0;
            segments[i].vel.y=-3;
          }
        }
      }
      if (keyCode===DOWN_ARROW){
        for(var i=0; i<segments.length;i++){
          if(segments[i].loc.x===xTurnLocation){
            segments[i].vel.x=0;
            segments[i].vel.y=3;
          }
        }
      }
    }
    this.loc.add(this.vel);
  }

tangled(){

}
hitFood(){
  for (var i=0; i<food.length;i++){
    if(this.loc.x>food[i].loc.x&&
        this.loc.x<food[i].loc.x+food[i].w&&
        this.loc.y>food[i].loc.y&&
        this.loc.y<food[i].loc.y+food[i].w){
          food.splice(i,1);
          hitFood='yes';
        }
      else if(this.loc.x+this.w>food[i].loc.x&&
        this.loc.x+this.w<food[i].loc.x+food[i].w&&
        this.loc.y+this.w>food[i].loc.y&&
        this.loc.y+this.w<food[i].loc.y+food[i].w){
          food.splice(i,1);
          hitFood='yes';
        }
  }
    }
}
