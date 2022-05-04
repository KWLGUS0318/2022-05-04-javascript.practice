let a = 1;



//function b (){
//  // * 함수 b는 목적이 콘솔 찍고 종료 하는 기계
//  // * return 값은 없다. - > undefind 값이 리턴된다.
//  //console.log(a);
//  let c = "김지현";
//  return c;
//}
//
//console.log(b());


let current = 0;
current++;


let timer  =setInterval(function() {  //실행
console.log(current);
current++;
if(current === 60){
  console.log('1분이 경과되었습니다.')
  clearInterval(timer);              //마침
}

},16);