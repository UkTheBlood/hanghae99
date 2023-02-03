function solution(x) {
    let arr = `${x}`.split("");        // 문자열로 인식
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        result += +arr[i]               // +는 숫자열로 변환
        
    }
    if(x % result === 0) {
        return true;
    } else {
        return false;
    }
}