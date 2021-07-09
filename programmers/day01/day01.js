
// Q1. 문자열을 정수로 가리기

// Q2. 핸드폰 번호 가리기

// Q3. 같은 숫자는 싫어
function solution(arr){
    var result = [];
     for(let i=0; i<arr.length; i=i+1 ){
         if(arr[i] !== arr[i+1]){
             result.push(arr[i]);
         }
     }
     return result;
 }