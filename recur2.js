//n!!=n*(n-2)
function x(n){
 if (n<=0){
    return 1
  }
  return n*x(n-2)

}
console.log(x(5));