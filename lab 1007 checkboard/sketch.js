//  Joe Untrecht
// 	8/28 Vector
//  This is a comment
//  The setup function function is called once when your program begins
//global
var squares=[];

//put setup code here
function steup(){
  var cnv=createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(235);
  loadSquares();
  //traverse array
  for(var i=0;i<squares.length;i++){
    squares[i].render();
  }
}

function loadSquares(){
  for (var i=0;i<8;i++){
    for(var x=0;x<8;x++){
      squares[x+8*i]=new Square(100*x,100*i,100,100);
    }
  }
}

class Square{
  constructor(x,y,w,h,c){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.clr=c;
  }

render(){
  //creates square
  fill(this.clr);
  rect(this.loc.x,this.loc.y,this.w,this.h);
}
}
