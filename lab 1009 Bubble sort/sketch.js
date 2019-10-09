//  Joe Untrecht
// 	8/28 Vector
//  This is a comment
//  The setup function function is called once when your program begins
var list = [4,6,1,8,2,9];
function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
for(var i=0; i<list.length; i++){
  for (var x=0; x<list.length;x++){
    if(list[x]>list[x+1]){
      swap(list,x,x+1);
    }
  }
}
console.log(list);

for(var i=0; i,list.length; i++)
