// 01.상수와 변수
// 상수: const(constant : 변함이 없는 수)
// 변수 : let
const a = 1;
let b = 3;

// a = 3;                   // Assignment to constant variable.

console.log('a', a);        
console.log('b', b);

if(true) {
    //항상 이 안으로 들어옴
    var c = 3;              // block level scope가 아니라 밖에서도 사용이 가능한 문제
    console.log("c", c)
}

console.log(c)

// javascript에서 말하는 object
// key - value pair(key와 value가 함께 쌍을 이루고 있는 것)
// {
//     key: 'value'
//     key1: 'value1'
// }

const age = 21;

const testObj = {
    name: 'wonjang',
    age, //: age,                   // key와 value가 같으면 생략 가능
    company: 'Team Sparta',
    doSomeThing: function() {}  // value는 어떤 형태로도 올 수 있다
}

// 얕은 복사 하는 방법 (방지하는 것이 중요)
const obj1 = {
    value1: 10,
}

const obj2 = obj1;
const obj3 = JSON.parse(JSON.stringify(obj1));  //JSON형태로 바꾸었다가 다시 돌림

obj1.value1 += 1; 
// 만약에 우리가 복사한 obj2를 바꾼다면 어떻게 될까?
// 예상: obj2가 바뀌면 된다.
// 실제: obj1도 함께 바뀜

console.log(obj1);
console.log(obj2);
console.log(obj3);

// Template Literals
const testValue = "제어하는 값";

console.log(`문자열 ${testValue}입니다`);   // 백틱

// descructur => 구조를 분해한다.
const person = {
    name: "르탄",
    age1: "21"
};

const {name, age1, notFound} = person;

console.log("name", name);
console.log("age", age1);
console.log("notFound", notFound);

// Array
const testArr = [1, 2, 3, 4, 5];

const [one, two, three] = testArr;
console.log("one", one)
console.log("two", two)
console.log("three", three)

// 전개 연산자
let [name1, ...rest] = ["wonjang", 21, "Gueongi"]   // rest => 나머지 전체

console.log("rest", rest)

let names = ["Steve", "John"];

let student = ["Tom", ...names, ...names];


let tom = {
    name: "Tom",
    age: 10,
    region: "Seoul",
};
  
let steve = {
    ...tom,
    name: "Steve",
};

console.log("steve", steve)

// Arrow Function
function mysum1 (x, y) {
    return x + y;
}

console.log(mysum1(1, 2))

const mysum2 = (x, y) => x + y;         
// return문이 한 줄일 때 return을 생략하고 중괄호도 생략
// 중괄호를 사용할거면 return도 사용해야 함