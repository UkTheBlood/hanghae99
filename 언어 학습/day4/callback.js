// document.querySelector('.button').addEventListener('click', function() {
//     A
// })

//함수 안에 함수가 들어가는 형식
//버튼을 클릭했을 때 A라는 함수 실행

setTimeout(function() {
    B
}, 1000)

//시간이 1초가 지났을 때 B 라는 함수를 실행해주세요


//콜백함수 만드는 법
function first(parameter){
    console.log(5)
    parameter()
}

function second() {
    console.log(6)
}

first(second)

//first 함수안의 코드를 실행하는데, 
//first 함수 파라미터에 second를 집어넣어서 구현해주세요.

//1. first함수의 5 출력
//2. 3번째 줄 parameter가 second 함수로 넣어졌으므로 6 출력

var argument = [5, 10, 15].map(function(currentValue, index) {
    console.log(currentValue, index);
    return currentValue + 15;
});
console.log(argument);

//1. currentValue에 5, index에 0이 반환
//2. return 5 + 15 > 20 반환
//3. currentValue에 10, index에 1이 반환
//4. return 10 + 15 > 25 반환
//5. currentValue에 15, index에 2이 반환
//6. return 15 + 15 > 30 반환
//7. 새로운 배열 [20, 25, 30]