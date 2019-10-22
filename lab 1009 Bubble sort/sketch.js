//  Joe Untrecht
// 	1009
//  This is a comment
//  The setup function function is called once when your program begins
//bubble sort
var list=[];
var checks=0;
var swaps=0;
function setup(){
  var cnv=createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(235);
  for (var i=0; i<10; i++){
    list[i]= int(random(10));
  }
  bubblesort();
  }
function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
function bubblesort(){
  var t1= millis();
  for(var i=0; i<list.length; i++){
    for (var x=0; x<list.length;x++){
      checks=checks+1;
      if(list[x]>list[x+1]){
        swap(list,x,x+1);
        swaps=swaps+1;
      }
    }
  }
  var t2=millis();
  var seconds=((t2-t1)/1000);
  console.log(list);
  console.log(checks);
  console.log(swaps);
  console.log(seconds);
}
