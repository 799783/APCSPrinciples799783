//  Joe Untrecht
// 	9/16 Paddle Game
//  This is a comment
//  The setup function function is called once when your program begins
class Snake{
  constructor(x,y,dx,dy,w,id){
    this.loc=createVector(x,y);
    this.vel=createVector(dx,dy);
    this.vel.x=0;
    this.vel.y=0;
    this.w=25;
    this.clr=color(255,0,0);
    this.id=id;
  }

  run(){
    this.render();
    this.checkEdges();
    this.update();
    this.hitFood();
  }

  render(){
    background(20,20,20);
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
    if(keyIsPressed&&
      keyCode=== RIGHT_ARROW){
        this.vel.x=3;
        this.vel.y=0;
      }
    if(keyIsPressed&&
      keyCode=== LEFT_ARROW){
        this.vel.x=-3;
        this.vel.y=0;
        }
    if(keyIsPressed&&
      keyCode=== UP_ARROW){
        this.vel.x=0;
        this.vel.y=-3;
      }
    if(keyIsPressed&&
      keyCode=== DOWN_ARROW){
        this.vel.x=0;
        this.vel.y=3;
        }
    this.loc.add(this.vel);
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
