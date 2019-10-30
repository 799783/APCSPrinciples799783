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
  background(20,100,250);
  loadBars();
  frameRate(10);
  for(var i=0; i<bars.length; i++){
    bars[i].run();
  }
}

function draw(){
bubblesort();
}

function move(){
  for(var i=0; i<bars.length; i++){
    bars[i].set(i);
  }
  background(20,100,250);
  for(var i=0; i<bars.length; i++){
    bars[i].run();
  }
}

function bubblesort(){
    for (var j=0; j<bars.length-1; j++){
      if(bars[j].h>bars[j+1].h){
        swap(bars, j, j+1);
        move();
      }
    }
  }



function loadBars(){
  for (var x=0; x<32; x++){
    var w=int(random(1,32));
    bars[x]= new Bar(25*x,800-(25*w),25,(25*w), color(200, 200, 0))
  }
}

function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
