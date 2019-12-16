//  Joe Untrecht
// 12/03 Vector
//  This is a comment
//  The setup function function is called once when your program begins
//sketch
planet=[];
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

function loadObjects(){
  //loads planet
  for (var i=0; i<4; i++){
    planet[i]=new Planet(random(800),random(800));
  }
  //loads ship
  ship= new Ship(random(width), random(height), random(-2,2), random(-2,2));

}

function runObjects(){
  //runs planet
  for (var i =0; i<planet.length; i++){
    planet[i].run();
  }
  //runs ship
  ship.run();
}
