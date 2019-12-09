//  Joe Untrecht
// 	8/28 Vector
//  This is a comment
//  The setup function function is called once when your program begins
//global
var balls=[];
//put setup code here
function setup(){
  var cnv=createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(235);
  loadBalls();
  for(var i=0; i<balls.length; i++){
    balls[i].run();
  }
}

function draw(){
  bubblesort();
}

function move(){
  for(var i=0; i<balls.length; i++){
    balls[i].set(i);
  }
  background(235);
  for(var i=0; i<balls.length; i++){
    balls[i].run();
  }
}

function bubblesort(){
    for (var j=0; j<balls.length-1; j++){
      if(balls[j].a<balls[j+1].a){
        swap(balls, j, j+1);
        move();
      }
    }
  }



function loadBalls(){
  for (var x=0; x<20; x++){
    balls[x]= new Ball((40*x),400,40,40)
  }
}

function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
