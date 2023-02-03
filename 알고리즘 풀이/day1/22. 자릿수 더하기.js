function solution(n) {
    var answer = 0;
    let s = n.toString();
    for(let i = 0; i < s.length; i++) {
        let k = Number(s[i])
        answer = answer + k;
    }
    
    return answer;
}