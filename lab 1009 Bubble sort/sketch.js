//  Joe Untrecht
// 	1009
//  This is a comment
//  The setup function function is called once when your program begins
//bubble sort
var list = [4,6,1,8,2,9];
var checks=0;
var swaps=0;
function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
for(var i=0; i<list.length; i++){
  for (var x=0; x<list.length;x++){
    checks=checks+1;
    if(list[x]>list[x+1]){
      swap(list,x,x+1);
      swaps=swaps+1;
    }
  }
}
console.log(list);
console.log(checks);
console.log(swaps);
//not bubble sort
var list = [4,6,1,8,2,9];
for(var i=0; i<list.length; i++){
  for (var x=0; x<list.length; x++){
    if(list[i]>list[i+x]){
      swap(list,i,i+x);
    }
  }
}
console.log(list);
