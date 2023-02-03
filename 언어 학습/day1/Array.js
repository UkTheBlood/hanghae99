let snacks = [
    "감자깡",
    "새우깡",
    "고구마깡",
]

// push 함수 - 요소를 스택 끝에 집어넣습니다. 
// pop 함수 - 스택 끝의 요소를 추출합니다.
// shift 함수 - 제일 앞의 요소를 꺼내 제거한 후 남아있는 요소들을 밀어줍니다.
// => 두 번째 요소가 첫 번째 요소로 바뀝니다. 

snacks.push("고래밥")
// => ("감자깡", "새우깡", "고구마깡", "고래밥")

snacks.shift() 
// => 배열에 감자깡을 제거하고 감자깡을 반환

//unshift - 배열 앞에 요소를 추가합니다.
snacks.unshift('프링글스')
// => ("프링글스", "새우깡", "고구마깡", "고래밥")

//unshift와 push는 여러개를 추가할 수 있음.

//과제 2

// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// alert( styles.shift() );
// styles.unshift("Rap", "Reggae");


console.log('hi')

//forEach()
//배열 요소의 합을 계산
let data = [1,2,3,4,5], sum = 0;
data.forEach(value => { sum += value; });  //sum = 15

//배열 요소를 각각 증가
data.forEach(function(v, i, a) { a[i] = v + 1; });
//인자를 3개 받는 것은 콜백 함수, 두개는 메서드

console.log(data);


//for of
//const 요소가 들어감
const fruits = ['바나나', '사과', '망고']
for (const elements of fruits) {
    console.log(elements)
}
//배열에 있는 요소 하나하나가 출력 됨
//바나나 - 사과 - 망고

//for in
//const 인덱스가 들어감
const chocolate = ['화이트', '밀크', '다크']
for (const indexs in chocolate) {
    console.log(indexs, chocolate[indexs])
}
//인덱스와 배열의 인덱스 츌력
//0 화이트 1 밀크 2 다크

let word = "word";

for (let value of word) {
  console.log(value);
}