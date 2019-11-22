//  Joe Untrecht
// 	9/16 Snake Game
//  This is a comment
//  The setup function function is called once when your program begins
//define variables
segments=[];
numberFood=0;
food=[];
score=0;
gameState=1;
var img;

function preload(){
  //pre load the emoji image
  img=loadImage('emoji.png');
}

function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  //set variables to bne equal to no
  endGame='no';
  hitFood='no';
  //The head is loaded
  loadHead();
  // the food is loaded
  loadFood();
  //frame rate is slowed
  frameRate(14);
}

function draw() {
  if(gameState===1){
    //start of game, intro
    startScreen();
  }
  if(gameState===2){
    //actual game play
    playGame();
  }
  if(gameState===3){
    //ending screen says score
    finalScreen();
  }
}

function startScreen(){
  //prints ttitle of game on intro
  textSize(75);
  fill(255,0,0);
  text('Snake Game',200,200);
  //start button with text
  textSize(25);
  fill(0,255,0)
  text('Start',375,550);
  rect(375,575,50,50);
  //prints directions below title
  fill(0,0,255);
  text('Click the start box to begin the game. You are the red snake',50,350);
  text('After you start, use the arrow keys to move the snake',50,375);
  text('Your goal is to eat as much food as possible. If you',50,400);
  text('eat a food, you grow one length. If you turn into yourself,',50,425);
  text('you die, and the game ends. Good luck!',50,450);
  //checks if you click the start button
  if(mouseIsPressed&&
      mouseX>375&&
      mouseX<425&&
      mouseY>575&&
      mouseY<625){
        //clears screen and moves to game
        clear();
        gameState=2;
      }
}

function playGame(){
  //snake head is rendered
  runSnake();
  //1st food is rendered
  runFood();
  //if snake head hits food, add score(numberFood)
  if(hitFood==='yes'){
    numberFood=numberFood+1;
    //reset variable
    hitFood='no';
  }
  //if snake crosses itself or hits the sides of screen, clear screen and go to end screen
if (endGame==='yes'){
  clear();
  gameState=3;
}
}

function finalScreen(){
  background(20,20,20);
  //prints a ending screen, says you lost and provides score
  textSize(25);
  fill(255,0,0);
  text('You lost! Wow that sucks! You got a score of '+ numberFood, 175,200);
  text('Woah, that is pretty impressive! Good Job!',175,225)
}

function loadHead(){
  //loads the head of snake
  head= new Snake(0,0,0,0,10,color(255,0,0));
}

function loadFood(){
  //loads whatever food
  food[0]= new Food(int(random(80)),int(random(80)),10,0);
}

function runFood(){
  //displays food
  food[0].run();
}

function runSnake(){
  //reset background so snake doesn't have a trail
  background(20,20,20);
  //displays snake
  head.run();
}
