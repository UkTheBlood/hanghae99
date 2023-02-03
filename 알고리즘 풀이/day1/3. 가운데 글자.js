
// 단어 길이를 반으로 나눠 가운데 숫자 구함
// if문을 써서 단어 길이가 홀수면 2로 나눈 몫을 반올림해서 숫자 반환
// 단어의 길이가 짝수면 2로 나눈 몫의 버림과 반올림해서 숫자 반환


//첫 번째 시도
function solution(s) {
    var answer = '';
    if(s.length % 2 === 0) {
        let a = Math.floor(s / 2);
        answer = s.substring(a, a + 1);
    } else {
        let b = Math.ceil(s / 2);
        answer = s.charAt(b);
    }
    return answer;
}
// 실행한 결괏값 "a"이 기댓값 "c"과 다릅니다.
// 실행한 결괏값 ""이 기댓값 "we"과 다릅니다.

//두 번째 시도
function solution(s) {
    var answer = '';
    if(s.length % 2 === 0) {
        let a = Math.floor(s.length / 2);
        answer = s.substring((a - 1), 3);
    } else {
        let b = Math.floor(s.length / 2);   // charAt() 이 0부터 시작하기 때문에 버림 사용
        answer = s.charAt(b);
    }
    return answer;
}

// 테스트 6, 8, 13, 14, 15, 16 실패함

//세 번째 시도
function solution(s) {
    if(s.length % 2 === 0) {
        return s.substr(s.length / 2 - 1, 2)
    } else {
        return s.substr(s.length / 2, 1)
    }
}

// Math.floor, ceil, round
// charAt, slice
// substring, substr, 차이점