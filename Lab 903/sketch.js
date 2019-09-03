//  Joe Untrecht
// 	8/28 Vector
//  This is a comment
//  The setup function function is called once when your program begins
var balls= []
function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(50);
}

function draw() {
  background(5,5,5);
  runBalls();
}

function loadBalls(n){
  mainBall = new Ball(width/2,height/2,random(-1,1),random(-1,1),-1);
  for(var i=0; i<n; i++){
    balls[i]= new Ball(random(0,800), random(0,800),random(-8,8),random(-8,8),i);
  }
}

function runBalls(){
  mainBall.run();
  for(var i=0; i<balls.length; i++){
    balls[i].run();
  }
}
