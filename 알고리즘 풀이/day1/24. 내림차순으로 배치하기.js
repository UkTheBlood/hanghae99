function solution(n) {
    let result = n.toString().split("").sort().reverse().join("");
    return parseInt(result);
} 