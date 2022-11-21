//n=n*(n-1)...
function y(a,b){
  if (b==0){
    return 1
  }
  return a*y(a,b-1)
}
console.log(y(8, 3));