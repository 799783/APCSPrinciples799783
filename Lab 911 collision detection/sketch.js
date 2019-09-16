//  Joe Untrecht
// 	8/28 Vector
//  This is a comment
//  The setup function function is called once when your program begins
var balls= []
var paddle;
var score;
function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  score=0;
  loadObjects(1);
}


function draw() {
  background(20,20,20);
  runBalls();
}

function loadObjects(n){
    paddle= new Paddle(350,775,150,10);
    for(var i=0; i<n; i++){
      balls[i]= new Ball(400, 400,random(-8,8),random(0,8));
    }
}

function runBalls(){
  paddle.run();
  for(var i=0; i<balls.length; i++){
    balls[i].run();
  }
}
