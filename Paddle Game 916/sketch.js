//  Joe Untrecht
// 	9/16 Paddle Game
//  This is a comment
//  The setup function function is called once when your program begins
var balls= []
var paddle;
var score=0;
var gameState=1;
var gameMode;
var health=10;
var win;
var iteration=1;
var buttons=[];

function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadButtons();
}

class Button{
  constructor(x,y,w,h){
    this.loc= createVector(x,y);
    this.w=w;
    this.h=h;
    this.clr= color(random(255),random(255),random(255));
  }
  run(){
    this.render();
    this.checkEdges();

  }
  render(){
    //loads buttons
    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.w,this.h);
    //on start screen
    if(gameState===1){
      textSize(50);
      fill(0,255,0);
      text('Easy',175,700);
      fill(0,0,255);
      text('Medium',350,700);
      fill(255,0,0);
      text('Hard',575,700);
    }
    //on end screen
    if(gameState===3){
      textSize(35);
      fill(0,255,0);
      text('Play Again?',275,575);
      fill(255,0,0);
      text('Quit?',500,575);
    }
  }
  checkEdges(){
    //check if user touches button
    isTouching();
  }
}

function draw() {
  //main function
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
  textSize(50);
  runButtons();
  textSize(25);
  fill(255,255,255);
  //directions
  text('Press easy, medium, or hard. Balls will then appear,',50,350);
  text('and you must move the paddle with your mouse to hit the balls.',50,375);
  text('Only move your paddle to hit the ball from the top of the paddle.',50,400);
  text('If the balls hits the top of the paddle, the score will go up by 1.',50,425);
  text('If the balls hits the bottom of the paddle, your health will drop.', 50,450);
  text('When your health hits 0, you lose. If you survive, you win.',50,475);
  //checks if user touches the box
  //loads balls based of mode
  if(gameMode==='easy'||gameMode==='medium'||gameMode==='hard'){
    clear();
    if(gameMode==='easy'){
      loadObjects(5);
    }
    if(gameMode==='medium'){
      loadObjects(10);
    }
    if(gameMode==='hard'){
      loadObjects(25);
    }
    //change to play screen
    gameState=2;
  }
}

function isTouching(){
  if(gameState===1){
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


}
function playGame(){
  //the actual game screen
  background(20,20,20);
  textSize(25);
  fill(255,0,0);
  //sets up score and health at top right and left
  text('Score:'+score,20,20);
  text('Health:'+health,650,20);
  runBalls();
  //checks if user loses
  if(health<=0){
    clear();
    gameState=3;
    win='no';
    loadButtons();
  }
  //checks if user survives and wins
  if(iteration===4){
    clear();
    gameState=3;
    win='yes';
    loadButtons();
  }
}

function endGame(){
  //final screen
  background(20,20,20);
  //if lose
  if(win==='no'){
    textSize(100);
    fill(255,0,0);
    text("You Lose!",200,400);
  }
  //if win
  if(win==='yes'){
    textSize(100);
    fill(255,0,0);
    text("You Win!",200,400);
  }
  //buttons appear
  runButtons();
  //checks if touching play again button
  if(mouseIsPressed&&
      mouseX>300&&
      mouseX<350&&
      mouseY>600&&
      mouseY<650){
        //resets variables
        clear();
        score=0;
        gameMode='';
        iteration=1;
        balls=[];
        win='no';
        health=10;
        gameState=1;
        loadButtons();
      }
      //if touching quit
  if(mouseIsPressed&&
      mouseX>500&&
      mouseX<550&&
      mouseY>600&&
      mouseY<650){
        remove();
        clear();
      }
}

function loadButtons(){
  //if start screen
  if (gameState===1){
    for(var i=0;i<3;i++){
      buttons[i]= new Button(200*(i+1),600,50,50);
    }
  }
  //if end screen
  if(gameState===3){
    buttons=[]
    for(var i=0; i<2;i++){
      buttons[i]= new Button(300+(200*i),600, 50, 50);
    }
  }
}

function runButtons(){
  //if start screen
  if(gameState===1){
    for (var i=0; i<buttons.length;i++){
      buttons[i].run();
    }
  }
  //if end screen
  if(gameState===3){
    for(var i=0; i<buttons.length; i++){
      buttons[i].run();
    }
  }
}
function loadObjects(n){
  //load the paddle
    paddle= new Paddle(350,500,150,50);
    for(var i=0; i<n; i++){
      //load each ball
      balls[i]= new Ball(random(0,400), random(0,400),random(-8,8),random(0,8),i);
    }
}

function runBalls(){
  //run paddle class
  paddle.run();
  for(var i=0; i<balls.length; i++){
    //run ball class
    balls[i].run();
  }
}
