function solution(s) {
    var answer = true;
    if(s.length = 4 || 6) {     // s의 길이가 4 혹ㅇs 6인 경우
        for(let i = 0; i < s.length; i++) {
            if(isNaN(s[i])) {   // s[i]가 숫자면 true로 들어감
                answer = true;
            } else {
                answer = false;
            }
        }
    } else {
        answer = false;
    }
    return answer;
}


function solution(s) {
    var answer = true;
    if(s.length = 4 || 6) {     // s의 길이가 4 혹ㅇs 6인 경우
        for(let i = 0; i < s.length; i++) {
            if(isNaN(s[i])) {
                answer = false;
            } else {
                answer = true;
            }
        }
    }
    return answer;
}

function solution(s) {
    var answer = true;
    if(s.length = 4 || 6) {     // s의 길이가 4 혹ㅇs 6인 경우
        for(let i = 0; i < s.length; i++) {
            if(isNaN(s[i])) {
                answer = false;
                break;
            } else {
                answer = true;
            }
        }
    }
    return answer;
}

function solution(s) {
    var answer = true;
    if(s.length = 4 || 6) {     // s의 길이가 4 혹은 6인 경우
        for(let i = 0; i < s.length; i++) {
            if(parseInt(s[i])) {
                return answer = true;
            } else {
                answer = false;
            }
        }
    } else {
        answer = false;
    }
    return answer;
}

function solution(s) {
    var answer = true;
    if(s.length = 4 || 6) {     // s의 길이가 4 혹ㅇs 6인 경우
        for(let i = 0; i < s.length; i++) {
            if(isNaN(s[i])) {
                answer = false;
                break;
            }
            else {
                answer = true;
            }
        }
    }
    else {
        answer = false;
    }
    return answer;
}

function solution(s) {
    var answer = true;
    if(s.length === 6 || s.length === 4) {      
        for(let i = 0; i < s.length; i++) {     
            if(isNaN(s[i])) {
                answer = false;
                break;
            }
            else {
                answer = true;
            }
        }
    }
    else {
        answer = false;
    }
    return answer;
}
