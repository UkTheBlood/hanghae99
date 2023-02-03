function solution(n) {
    var answer = 0;
    for(let i = 0; i < 50000000000000; i++) {
        if(i * i === n) {
            return (i + 1) * (i + 1);
        } else {
            answer = - 1;
        }
    }
    return answer;
}

function solution(n) {
    var answer = 0;
    let x = Math.sqrt(n);
    if(Number.isInteger(x) === true) {
        return (x + 1) * (x + 1); 
    } else {
        return -1;
    }
}