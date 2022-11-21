//foctarialni topish
function foctarial(x){
if(x==0){
  return 1
}
return x*foctarial(x-1)

}
console.log(foctarial(6));