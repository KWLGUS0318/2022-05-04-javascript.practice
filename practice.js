//function a (){
//  console.log('test')
//  //return "메롱";
//
//}
//a();
//
//console.log(a());


//function b (first,second){
//  console.log(first+second);
//  //return first + second;
//
//}
//b(1,2);
////console.log(b(1,2));


function b (first,second){
if(typeof first === "number"){
  //"타입체크"
  return first + second;
}else{
  console.log("첫번째 매개변수타입이 숫자가 아닙니다.");

}

}
console.log(b("바보",2));