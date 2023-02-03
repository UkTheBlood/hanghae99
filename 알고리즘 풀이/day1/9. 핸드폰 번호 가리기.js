// 1. for문으로 (phone_number 길이 - 4)를 반복을 종료 조건으로 걸기
// 2. 문자열의 [i]번째를 *로 치환하는 함수 찾아서 넣기

//첫 번째 시도
function solution(phone_number) {
    var answer = '';
    for(let i = 0; i < phone_number.length - 4; i++) {
        phone_number[i] = '*'; //치환이 되지 않음
    }
    return phone_number;
}

// replace, substr 등으로 문자열을 치환할 방법을 찾아보았지만 찾지 못함

// 두 번째 시도
function solution(phone_number) {
    for(let i = 0; i < phone_number.length - 4; i++) {
        phone_number.charAt(i) = '*'
    }
    return phone_number;
}
// charAt, slice로 시도해보았는데 추출만 하고 변경은 불가능한 것 같음
// error: Invalid left-hand side in assignment

function solution(phone_number) {
    var answer = '';
    for(let i = 0; i < phone_number.length; i++) {
        if(i < phone_number - 4) {
            answer += '*'
        } else {
            answer += phone_number[i]
        }
    }
    return answer;
}