// 1. sign[0] = false면 absolutes[0]을 음수로 바꾸는 for문 작성
// 2. absolutes 안의 배열의 수를 모두 더하는 for문 작성하여 반환

function solution(absolutes, signs) {
    var answer = 123456789;
    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i] == "false") {                
            absolutes[i] = absolutes[i] * -1;
        }
    }
    console.log(absolutes)
    return answer;
}
// false => 문자열이 아닌 불리언
// 실행 안 됨

function solution(absolutes, signs) {
    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i] == false) {	//signs[i] 가 false
            absolutes[i] = absolutes[i] * -1;	//absolutes[i]의 수를 음수로 변환
        }
    }
    
    let sum = 0;	//변환한 합을 담아주는 변수 선언
    for(let i = 0; i < absolutes.length; i++) {
        sum = sum + absolutes[i];	//sum에 absolutes의 값들을 넣어 더해줌
    }
    return sum;
}

function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer = answer + absolutes[i];
        } else {
            answer = answer - absolutes[i];
        }
    }
    return answer
}

// 문자열이 아닌 불리언으로 작성해서 해결

// 문제에 어떤 타입으로 되어있는지 적혀있으니, 확인할 것