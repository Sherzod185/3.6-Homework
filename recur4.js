//fibonache sonlarini topish
function fibonachi (a){
if (a<3 ){
  return 1
}
return fibonachi(a-2)+fibonachi(a-1)
}
console.log(fibonachi(6));