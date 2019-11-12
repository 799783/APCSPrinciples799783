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
    rect(this.loc.x*this.w,this.loc.y*this.w,this.w,this.w);
    for (var i=0; i<this.body.length; i++){
      rect(this.body[i].x*this.w,this.body[i].y*this.w, this.w, this.w);
    }
  }

checkEdges(){
  //if hits left side
  if(this.loc.x<0){
    endGame='yes';
  }
  if(this.loc.x>width/this.w){
    //if hits right side
    endGame='yes';
  }
  if(this.loc.y<0){
    //if hits top
    endGame='yes';
  }
  if(this.loc.y>height/this.w){
    //if hits bottom
    endGame='yes';
  }
}

  update(){
    if(keyIsPressed&&
      keyCode===RIGHT_ARROW){
        head.vel.x=1;
        head.vel.y=0;
      }
      if(keyIsPressed&&
        keyCode===LEFT_ARROW){
          head.vel.x=-1;
          head.vel.y=0;
        }
        if(keyIsPressed&&
          keyCode===UP_ARROW){
            head.vel.x=0;
            head.vel.y=-1;
          }
          if(keyIsPressed&&
            keyCode===DOWN_ARROW){
              head.vel.x=0;
              head.vel.y=1;
            }
    for (var i=this.body.length-1; i>0; i--){
      this.body[i].x.add(this.vel.x);
      this.body[i].y.add(this.vel.y);
    }
    head.loc.add(this.vel);

  }

tangled(){

}

hitFood(){
  console.log(food[numberFood].loc.x);
    if(head.loc.x===food[numberFood].loc.x&&
        head.loc.y===food[numberFood].loc.y){
          food.splice(numberFood,1);
          this.body.push(createVector(head.loc.x,head.loc.y));
          hitFood='yes';
  }
    }
}
