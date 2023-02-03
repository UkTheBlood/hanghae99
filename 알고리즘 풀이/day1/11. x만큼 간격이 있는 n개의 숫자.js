// x에 x를 push하는 for문 만들기
// i가 n번 작동하는 함수
// x가 x만큼 증가하는 함수

//첫 번째 시도
function solution(x, n) {
    var answer = [];
    for(let i = 0; i < n; i++) {
        answer.push(x);
        x = x + x;
    }
    return answer;
}
// x가 증가한게 반영되어 
// 실행한 결괏값 [2,4,8,16,32]이 기댓값 [2,4,6,8,10]과 다릅니다. 의 문제 생김

// 두 번째 시도
function solution(x, n) {
    var answer = [];
    let plus = x;
    for(let i = 0; i < n; i++) {
        answer.push(x);
        x = x + plus
    }
    return answer;
}