//  Joe Untrecht
// 	9/16 Paddle Game
//  This is a comment
//  The setup function function is called once when your program begins
segments=[];
head=1;
hitFood='no';
numberFood=0;
food=[];
score=0;
w=25;
headerHeight=32;
function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  endGame='no';
  loadHead();
  loadFood();
}

function draw() {
  runSnake();
  runFood();
if(hitFood==='yes'){
  numberFood=numberFood+1;
  addSegments();
}
//if (endGame==='yes'){
  //remove();
  //clear();
//}
}

function loadHead(){
  head=new Snake(0,0,25,25,0);
}

function loadFood(){
  food[0]= new Food(random(800),random(800),25,0);
}

function runFood(){
  for (var i=0; i<food.length;i++){
    food[i].run();
  }
}

function runSnake(){
  head.run();
  for (var i=0; i<segments.length; i++){
    segments[i].run();
  }
}

function addSegments(){
  segments[numberFood-1]= new Snake(head.loc.x-head.w,head.loc.y,25,25,numberFood-1)
}
