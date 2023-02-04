let number = 1;
let secondNumber = 1;

// 원시데이터 : 숫자, 문자, 불리언...

// 원시 데이터가 아닌 것들 : 배열, 객체, 함수...
let obj1 = {
    name: "kim",
}

let obj2 = {
    name: "kim"
}

console.log(obj1 === obj2) // false


// 데이터를 수정하는 경우
number = 2;

console.log("number와 secondNumber가 같나요?")
console.log(number === secondNumber)