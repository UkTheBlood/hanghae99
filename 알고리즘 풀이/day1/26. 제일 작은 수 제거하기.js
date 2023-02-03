function solution(arr) {
    var answer = [];
    let minNum = 100000000000;
    
    // 가장 작은 수 구하기
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < minNum) {
            minNum = arr[i]
        }
    }
    
    if(arr.length < 2) {
        answer.push(-1);
    } else {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === minNum) {
                arr.splice(i, 1)
            }
        }
        
        for(let i = 0; i < arr.length; i++) {
            answer[i] = arr[i]
        }
    }

    return answer;
}