//  Joe Untrecht
// 	8/28 Vector
//  This is a comment
//  The setup function function is called once when your program begins
var balls= []
var paddle1, paddle2;
function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadObjects(1);
}

function draw() {
  background(5,5,5,50);
  runBalls();
}

function loadObjects(n){
    paddle1=new Paddle(350,100,100,25);
    paddle2= new Paddle(350,700,100,25);
    for(var i=0; i<n; i++){
      balls[i]= new Ball(random(0,800), random(200,800),random(-8,8),random(-8,8));
    }
}

function runBalls(){
  paddle1.run();
  paddle2.run();
  for(var i=0; i<balls.length; i++){
    balls[i].run();
  }
}
