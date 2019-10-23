//  Joe Untrecht
// 	8/28 Vector
//  This is a comment
//  The setup function function is called once when your program begins
//global
var bars=[];

//put setup code here
function setup(){
  var cnv=createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(235);
  loadBars();
  //traverse array
}

function draw(){
  for(var i=0; i<bars.length; i++){
    bars[i].run();
  }
}

function loadBars(){
  for (var i=0; i<32; i++){
    var w=int(random(1,32));
    bars[i]= new Bar(25*i,800-(25*w),25,(25*w))
  }
}
