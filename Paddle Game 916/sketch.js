//  Joe Untrecht
// 	8/28 Vector
//  This is a comment
//  The setup function function is called once when your program begins
var balls= []
var paddle;
var score=0;
var gameState=1;
var gameMode;
var health=10;
var win;
function setup() {
  // put setup code here
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
  }else if(gameState===3){
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
    clear();
    if(gameMode==='easy'){
      loadObjects(20);
    }
    if(gameMode==='medium'){
      loadObjects(50);
    }
    if(gameMode==='hard'){
      loadObjects(100);
    }
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
  background(20,20,20);
  textSize(25);
  fill(255,0,0);
  text('Score:'+score,20,20);
  text('Health:'+health,650,20);
  runBalls();
  if(health<=0){
    clear();
    gameState=3;
    win='no';
  }
  if(balls.length===0){
    clear();
    gameState=3;
    win='yes';
  }
}

function endGame(){
  background(20,20,20);
  console.log(win);
  if(win==='no'){
    textSize(100);
    fill(255,0,0);
    text("You Lose!",200,400);
  }
  if(win==='yes'){
    textSize(100);
    fill(255,0,0);
    text("You Win!",200,400);
  }
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
