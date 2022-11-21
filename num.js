//nechta son qatnashganligi
let obj={
  leng: function (str){
    let sanagich = 0
    while(str[sanagich]){
      sanagich++
    }
    return sanagich
  },
  harf: function (yozuv){
    let sanagich=0
    let leng=0
    while(yozuv[leng]){
      leng++
      if(yozuv[leng] != " " && Number(yozuv[leng])) sanagich++
    }
    return sanagich
  }
}
console.log(obj.harf("dsdx mm 4214  4 dff 44545 a4ds4  sdk"));