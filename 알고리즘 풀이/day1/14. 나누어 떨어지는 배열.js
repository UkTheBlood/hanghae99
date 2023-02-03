function solution(arr, divisor) {
    var answer = [];
    arr.sort(function(a, b)  {
      return a - b;
    });
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0) {
            answer.push(arr[i]);
        } else {
            answer.push(-1)
        }
    }
    return answer;
}



function solution(arr, divisor) {
    var answer = [];
    arr.sort(function(a, b)  {
      return a - b;
    });
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }
    if(answer.length === 0) {
        answer.push(-1);
    }
    return answer;
}