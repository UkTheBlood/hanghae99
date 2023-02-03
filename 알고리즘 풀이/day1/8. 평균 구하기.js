// 1. arr배열 안의 수를 모두 더하는 for문 작성
// 2. 모두 더한 값을 arr의 길이로 나누어 값 return

function solution(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
// sum을 arr의 갯수만큼 나누어야 하는데, for문 안에 그 방법을 넣으려 시도
// 방법을 찾지 못함


function solution(arr) {
    var answer = 0;
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    answer = sum / arr.length;
    return answer;
}

// sum을 arr.length로 나누어 answer에 재할당