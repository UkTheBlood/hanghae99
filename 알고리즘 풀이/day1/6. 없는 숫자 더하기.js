//첫 번째
function solution(numbers) {
    var answer = -1;
    let total = 0;  // 배열 전체를 더한 값을 받을 변수 선언
    // for문을 돌려 total 안에 배열 전체의 숫자를 더한 값 할당
    for(let i = 0; i <= 9; i++) {
        total = total + i;
    }
    // answer에 total에서 numbers를 빼서 수를 구하기
    for(let i = 0; i < numbers.length; i++) {
        answer = total - numbers[i];
    }
    return answer;
}
//결괏값과 기댓값이 다름

//두 번째
function solution(numbers) {
    var answer = 0;
    for(let i = 0; i <= 9; i++) {
        answer = answer + i;
    }
    for(let i = 0; i < numbers.length; i++) {
        answer = answer - numbers[i];
    }
    return answer;
}
//통과