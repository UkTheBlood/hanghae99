function solution(participant, completion) {
    var answer = '';
    let copy = [];
    for(let i = 0; i < participant.length; i++) {
        for(let j = 0; j < participant.length; j++) {
            if(participant[i] === completion[j]) {
                participant.splice(i, 1);
            }
        }
    }
    answer = participant[0]
    return answer;
}

// 깊은 복사를 사용해서 풀어보기