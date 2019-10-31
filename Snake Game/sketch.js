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
  loadSnake();
}

function draw() {

}

function loadSnake(){
  segments[0]=new Snake(0,0,50,50,0,color(255,0,0));
}

function runSnake(){
  for (var i=0; i<segments.length; i++){
    segments[i].run();
  }
}
