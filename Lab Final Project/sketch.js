//  Joe Untrecht
// 12/03 Vector
//  This is a comment
//  The setup function function is called once when your program begins
//sketch
ship=[];
function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadObjects(50);
}

function draw() {
  background(5,5,5,50);
  //runs ship and planet
  runObjects();
}

function loadObjects(n){
  //loads planet
    planet=  new Planet(width/2,height/2,random(-3,3),random(-3,3));

  //loads ship
  for (var i=0; i<10; i++){
    ship[i]=new Ship(random(width), random(height), random(-2,2), random(-2,2));
  }

}

function runObjects(){
  //runs planet
  planet.run();
  //runs ship
  for (var i=0; i<ship.length; i++){
    ship[i].run();
  }
}
