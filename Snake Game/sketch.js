//  Joe Untrecht
// 	9/16 Paddle Game
//  This is a comment
//  The setup function function is called once when your program begins
segments=[];
numberFood=0;
food=[];
score=0;
gameState=1;
var img;

function preload(){
  img=loadImage('emoji.png');
}

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
  if(gameState===1){
    startScreen();
  }
  if(gameState===2){
    playGame();
  }
  if(gameState===3){
    finalScreen();
  }
}

function startScreen(){
  textSize(75);
  fill(255,0,0);
  text('Snake Game',200,200);
  textSize(25);
  fill(0,255,0)
  text('Start',375,550);
  rect(375,575,50,50);
  fill(0,0,255);
  text('Click the start box to begin the game. You are the red snake',50,350);
  text('After you start, use the arrow keys to move the snake',50,375);
  text('Your goal is to eat as much food as possible. If you',50,400);
  text('eat a food, you grow one length. If you turn into yourself,',50,425);
  text('you die, and the game ends. Good luck!',50,450);
  if(mouseIsPressed&&
      mouseX>375&&
      mouseX<425&&
      mouseY>575&&
      mouseY<625){
        clear();
        gameState=2;
      }
}

function playGame(){
  runSnake();
  runFood();
  if(hitFood==='yes'){
    numberFood=numberFood+1;
    hitFood='no';
  }
if (endGame==='yes'){
  clear();
  gameState=3;
}
}

function finalScreen(){
  background(20,20,20);
  textSize(25);
  fill(255,0,0);
  text('You lost! Wow that sucks! You got a score of '+ numberFood, 175,200);
  text('Woah, that is pretty impressive! Good Job!',175,225)
}

function loadHead(){
  head= new Snake(0,0,0,0,10,color(255,0,0));
}

function loadFood(){
  food[0]= new Food(int(random(80)),int(random(80)),10,0);
}

function runFood(){
  food[0].run();
}

function runSnake(){
  background(20,20,20);
  head.run();
}
