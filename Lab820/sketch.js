//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x1,y1,x2,y2,x3,y3;
var speedX,speedY;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  speedX=random(-5,5);
  speedY=random(-5,5);
  x1=200;
  y1=400;
  x2=300;
  y2=500;
  x3=100;
  y3=300;
}

//  The draw function is called @ 30 fps
function draw() {
  x1=x1+speedX;
  x2=x2+speedX;
  x3=x3+speedX;
  y1=y1+speedY;
  y2=y2+speedY;
  y3=y3+speedY;
  if(x1<0){
    speedX=-speedX;
  }
  if(x2<0){
    speedX=-speedX;
  }
  if(x3<0){
    speedX=-speedX;
  }
  if(x1>width){
    speedX=-speedX;
  }
  if(x2>width){
    speedX=-speedX;
  }
  if(x3>width){
    speedX=-speedX;
  }
  if(y1<0){
    speedY=-speedY;
  }
  fill(255,0,0);
  ellipse(x1,y1,50,50);
  fill(0,255,0);
  ellipse(x2,y2,50,50);
  fill(0,0,255);
  ellipse(x3,y3,50,50);
}
