//  Joe Untrecht
// 	9/16 Paddle Game
//  This is a comment
//  The setup function function is called once when your program begins
segments=[];
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
  loadSnake();
  loadFood();
}

function draw() {
  runSnake();
  runFood();

if (endGame==='yes'){
  remove();
  clear();
}
}

function loadSnake(){
  segments[0]=new Snake(0,0,50,50,0);
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
  for (var i=0; i<segments.length; i++){
    segments[i].run();
  }
}
