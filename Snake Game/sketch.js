//  Joe Untrecht
// 	9/16 Paddle Game
//  This is a comment
//  The setup function function is called once when your program begins
segments=[];
numberFood=0;
food=[];
score=0;
function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  endGame='no';
  hitFood='no';
  loadHead();
  loadFood();
  frameRate(14);
}

function draw() {
  runSnake();
  runFood();
  if(hitFood==='yes'){
    numberFood=numberFood+1;
    hitFood='no';
  }
//if (endGame==='yes'){
  //remove();
  //clear();
//}
}

function loadHead(){
  head= new Snake(0,0,0,0,10,color(255,0,0));
}

function loadFood(){
  food[0]= new Food(int(random(80)),int(random(80)),10,0);
}

function runFood(){
  food[0].run();
  //for (var i=0; i<food.length;i++){
    //food[i].run();
  //}
}

function runSnake(){
  background(20,20,20);
  head.run();
}

//function addSegments(){
  //if(segments[numberFood-1].vel.x===3){
    //segments[numberFood]= new Snake(segments[numberFood-1].loc.x-segments[numberFood-1].w,segments[numberFood-1].loc.y,3,0,25,color(255,0,0),numberFood);
  //}
  //if(segments[numberFood-1].vel.x===-3){
    //segments[numberFood]= new Snake(segments[numberFood-1].loc.x+segments[numberFood-1].w,segments[numberFood-1].loc.y,-3,0,25,color(255,0,0),numberFood);
  //}
  //if(segments[numberFood-1].vel.y===3){
    //segments[numberFood]= new Snake(segments[numberFood-1].loc.x,segments[numberFood-1].loc.y-segments[numberFood-1].w,0,3,25,color(255,0,0),numberFood);
  //}
  //if(segments[numberFood-1].vel.y===-3){
    //segments[numberFood]= new Snake(segments[numberFood-1].loc.x,segments[numberFood-1].loc.y+segments[numberFood-1].w,0,-3,25,color(255,0,0),numberFood);
  //}
//}
