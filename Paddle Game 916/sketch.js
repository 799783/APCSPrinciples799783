//  Joe Untrecht
// 	8/28 Vector
//  This is a comment
//  The setup function function is called once when your program begins
var balls= []
var paddle;
let score;
function setup() {
  // put setup code here
  score= createDiv('Score = 0');
  score.position(20,20);
  score.id='score';
  score.style('color','black');
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadObjects(1);
}


function draw() {
  background(20,20,20);
  runBalls();
}

function loadObjects(n){
    paddle= new Paddle(350,500,150,50);
    for(var i=0; i<n; i++){
      balls[i]= new Ball(random(0,400), random(0,400),random(-8,8),random(0,8));
    }
}

function runBalls(){
  paddle.run();
  for(var i=0; i<balls.length; i++){
    balls[i].run();
  }
}
