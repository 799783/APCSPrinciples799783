//  Joe Untrecht
// 	9/16 Paddle Game
//  This is a comment
//  The setup function function is called once when your program begins
class Snake{
  //snake inputs
  constructor(x,y,dx,dy,w,c){
    this.loc=createVector(x,y);
    this.vel=createVector(dx,dy);
    this.w=w;
    this.clr=c;
    this.body=[];
  }

  run(){
    //overall run function
    this.render();
    this.checkEdges();
    this.update();
    this.tangled();
    this.hitFood();
  }

  render(){
    //render the head
    fill(this.clr);
    rect(this.loc.x*this.w,this.loc.y*this.w,this.w,this.w);
    //render the segments
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
    //if right key is pressed, change velocity accordingly
    if(keyIsPressed&&
      keyCode===RIGHT_ARROW){
          head.vel.x=1;
          head.vel.y=0;
      }
      //if left key is pressed, change velocity accordingly
      if(keyIsPressed&&
        keyCode===LEFT_ARROW){
            head.vel.x=-1;
            head.vel.y=0;
        }
        //if up key is pressed, change velocity accordingly
        if(keyIsPressed&&
          keyCode===UP_ARROW){
              head.vel.x=0;
              head.vel.y=-1;
          }
          //if down key is pressed, change velocity accordingly
          if(keyIsPressed&&
            keyCode===DOWN_ARROW){
                head.vel.x=0;
                head.vel.y=1;
            }
    //if the snake contains a body, change position of body by putting the segment
    // before into the position of the segment ahead
    if(this.body.length>0){
      for (var i=this.body.length-1; i>0; i--){
        this.body[i].x=this.body[i-1].x;
        this.body[i].y=this.body[i-1].y;
      }
      //puts body[0] at the prior head location
      this.body[0].x=head.loc.x;
      this.body[0].y=head.loc.y;
    }
    //changes head velocity last
    head.loc.add(this.vel);

  }

tangled(){
  //checks if the snake head hits a body part
for (var i=0; i<this.body.length; i++){
  if (head.loc.x===this.body[i].x&&head.loc.y===this.body[i].y){
    endGame='yes';
  }
}
}

hitFood(){
  //checks to see if snake head hits a Food
    if(head.loc.x===food[0].loc.x&&
        head.loc.y===food[0].loc.y){
          //load new food
          food[0]= new Food(int(random(80)),int(random(80)),10,0);
          //load new body
          this.body.push(createVector(head.loc.x,head.loc.y));
          //change score
          hitFood='yes';
  }
    }
}
