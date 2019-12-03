//  Joe Untrecht
// 	8/28 Vector
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadObjects(50);
}

function draw() {
  background(5,5,5,50);
  runObjects();
}

function loadObjects(n){
  planet= new Ball(width/2,height/2,random(-1,1),random(-1,1),-1);
  ship= new Ship(random(width), random(height), random(-2,2), random(-2,2));

}

function runObjects(){
  planet.run();
  ship.run();
}
