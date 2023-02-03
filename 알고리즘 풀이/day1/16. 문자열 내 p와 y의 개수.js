function solution(s){
    var answer = true;
    let upperS = s.toLowerCase();
    let pCnt = 0;
    let yCnt = 0;
    
    for(let i = 0; i < upperS.length; i++) {
        if(upperS[i] == "p") {
            pCnt += 1;
        } else if(upperS[i] == "y") {
            yCnt += 1;
        }
    }
    if(pCnt == yCnt) {
        answer = true;
    } else{
        answer = false;
    }
    return answer;
}