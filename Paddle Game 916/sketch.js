//  Joe Untrecht
// 	8/28 Vector
//  This is a comment
//  The setup function function is called once when your program begins
var balls= []
var paddle;
var score;
var gameState=1;
var gameMode;
function setup() {
  // put setup code here
  score= createDiv('Score = 0');
  score.position(20,20);
  score.id='score';
  score.style('color','black');
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
}


function draw() {
  background(20,20,20);
  if(gameState===1){
    startGame();
  }else if(gameState===2){
    playGame();
  }else if(gameState==3){
    endGame();
  }

}
function startGame(){
  //title
  textSize(75);
  fill(255,255,255);
  text('Paddle Game',200,200);
  //easy rectangle
  textSize(50);
  fill(0,255,0);
  rect(200,600,50,50);
  text('Easy',175,700);
  //medium rectangle
  fill(0,0,255);
  rect(400,600,50,50);
  text('Medium',350,700);
  //hard rectangle
  fill(255,0,0);
  rect(600,600,50,50);
  text('Hard',575,700);
  //checks if user touches the box
  isTouching();
  //moves to next screen
  if(gameMode==='easy'||gameMode==='medium'||gameMode==='hard'){
    gameState=2;
  }
}

function isTouching(){
  //if touching easy
  if(mouseIsPressed&&
      mouseX>200&&
      mouseX<250&&
      mouseY>600&&
      mouseY<650){
        gameMode='easy'
      }
      //if touching medium
  if(mouseIsPressed&&
      mouseX>400&&
      mouseX<450&&
      mouseY>600&&
      mouseY<650){
        gameMode='medium'
      }
      //if touching hard
  if(mouseIsPressed&&
      mouseX>600&&
      mouseX<650&&
      mouseY>600&&
      mouseY<650){
        gameMode='hard'
      }

}
function playGame(){
  loadObjects(1);
  runBalls();
}

function endGame(){

}
function loadObjects(n){
    paddle= new Paddle(350,500,150,50);
    for(var i=0; i<n; i++){
      balls[i]= new Ball(random(0,400), random(0,400),random(-8,8),random(0,8),i);
    }
}

function runBalls(){
  paddle.run();
  for(var i=0; i<balls.length; i++){
    balls[i].run();
  }
}
