//  Joe Untrecht
// 12/12
//  This is a comment
//  The setup function function is called once when your program begins
//sketch
ship=[];
var sliderAttraction, sliderLimit, sliderNumber;
var value;
function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  sliderAttraction= createSlider(0,5,2.5);
  sliderAttraction.position(200,400);
  sliderLimit= createSlider(0,5,2.5);
  sliderLimit.position(200,450);
  sliderNumber= createSlider(0,10,5);
  sliderNumber.position(200,500);
  value= sliderNumber.value();
  loadObjects(sliderNumber.value());
}

function draw() {
  background(5,5,5,50);
  //runs ship and planet
  if(value!=sliderNumber.value()){
    loadShip(sliderNumber.value());
    value=sliderNumber.value();
  }
  runObjects();
}

function loadObjects(n){
  //loads planet
    planet=  new Planet(width/2,height/2,random(-3,3),random(-3,3));

  //loads ship
  for (var i=0; i<n; i++){
    ship[i]=new Ship(random(width), random(height), random(-2,2), random(-2,2));
  }

}


function loadShip(n){
  ship=[];
  for (var i=0; i<n; i++){
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
