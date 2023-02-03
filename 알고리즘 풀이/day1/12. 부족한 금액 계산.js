// 1. totalprice 변수를 선언
// 2. for문으로 totalPrice에 값 구해주기
// 3. totalPrice가 money보다 크면 totalPrice - money 반환
//    아니면 0 반환

function solution(price, money, count) {
    var answer = -1;
    let totalPrice = 0;
    for(let i = 1; i <= count; i++) {
        totalPrice = totalPrice + (price * i)
    }
    if(money <= totalPrice) {
        answer = totalPrice - money;
    } else {
        answer = 0;
    }
    return answer;
}
