//  Joe Untrecht
// 	8/28 Vector
//  This is a comment
//  The setup function function is called once when your program begins
//global
var bars=[];
var buttons=[];
//put setup code here
function setup(){
  var cnv=createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(235);
  loadButtons();
  loadBars();
  for(var i=0; i<buttons.length; i++){
    buttons[i].run();
  }
  for(var i=0; i<bars.length; i++){
    bars[i].run();
  }
}

function loadButtons(){
  buttons[0]=new Button(200,100,50,50,0);
  buttons[1]=new Button(400,100,50,50,1);
  buttons[2]=new Button(600,100,50,50,2);
}

function draw(){
bubblesort();
}

function move(){
  for(var i=0; i<bars.length; i++){
    bars[i].set(i);
  }
  background(235);
  for(var i=0; i<bars.length; i++){
    bars[i].run();
  }
}

function bubblesort(){
    for (var j=0; j<bars.length-1; j++){
      if(bars[j].colorAv>bars[j+1].colorAv){
        swap(bars, j, j+1);
        move();
      }
    }
  }



function loadBars(){
  for (var x=0; x<32; x++){
    var w=int(random(1,32));
    bars[x]= new Bar(25*x,300,25,500)
  }
}

function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
