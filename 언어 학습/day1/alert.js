alert("에러가 발생합니다.");

[1, 2].forEach(alert)



let nickname = prompt("이름을 입력하세요", 100)

alert(`당신의 이름은 ${nickname}입니다.`)



let age = prompt('나이를 입력해주세요.', 100);

alert(`당신의 나이는 ${age}살 입니다.`)



let admin, name;
name = "john";
admin = name;

alert(`${admin}`)



let company = prompt('자바스크립트의 공식 이름은 무엇일까요?', '')

if(company == 'ECMAScript') {
    alert('정답입니다!')
} else {
    alert('모르셨나요? 정답은 ECMAScript입니다!!')
}

let num = prompt('숫자를 입력하세요', '')

if(num > 0) {
    alert(1)
} else if(num == 0) {
    alert(0)
} else {
    alert(-1)
}

let result;

if (a + b < 4) {
  result = '미만';
} else {
  result = '이상';
}

let results = (a + b > 4) ? '미만' : '이상';

let message = (login == '직원') ? '안녕하세요' : 
    (login == '임원') ? '환영합니다' :
    (login == '') ? '로그인이 필요합니다' : '';




let userName = prompt('아이디를 입력하세요', '') 

if (userName == 'Admin') {
    let password = prompt('비밀번호를 입력하세요', '');
    if(password == 'TheMaster') {
        alert('Welcome!');
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don\'t know you');
}

let browser;
if(browser == Edge) {
    alert("Edge를 사용하고 계시네요!")
} else if(browser == 'Chrome' 
|| browser == 'Firefox' 
|| browser == 'Safari' 
|| browser == 'Opera') {
    alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요')
} else {
    alert('현재 페이지가 괜찮아 보이길 바랍니다!')
}

let a = +prompt('a', '')

switch(a) {
    case '0':
        alert(0)
        break;

    case '1':
        alert(1)
        break;

    case '2':
    case '3':
        alert(2,3);
        break; //맨 밑 줄 break는 없어도 괜찮지만 case문이 추가될 경우를 대비하여 작성
}

for(i = 2; i <= 10; i++) {
    if(i % 2 == 0) {
        alert(i)
    }
}

let b = 0;
while(b < 3) {
    alert(`number${b}!`)
    b++
}

let d;

do {
  d = prompt("100을 초과하는 숫자를 입력해주세요.", 0);
} while (d <= 100 && d);


function solution(sizes) {
    let longer = 0;
    let shorter = 0;
    
    for(let i = 0; i < sizes.length; i++) {
        //w가 h 보다 긴 경우
        if(sizes[i][0] >= sizes[i][1]) {
            longer == sizes[i][0]
            shorter == sizes[i][1]
        } 
        else if(sizes[i][0] <= sizes[i][1]) {
            longer == sizes[i][1]
            shorter == sizes[i][0]
        }
            
        
    }
    return longer * shorter;
}

function solution(sizes) {
    let longer = 0;
    let shorter = 0;
    
    for(let i = 0; i < sizes.length; i++) {
        //w가 h 보다 긴 경우
        if(sizes[i][0] >= sizes[i][1]) {
            if(longer < sizes[i][0]) {
                longer = sizes[i][0]
            }
            if(shorter < sizes[i][1]) {
                shorter = sizes[i][1]
            }
        }
        //h가 w보다 긴 경우
        else {
            if(longer < sizes[i][1]) {
                longer = sizes[i][1]
            }
            if(shorter < sizes[i][0]) {
                shorter = sizes[i][0]
            }
        }
    }
    return longer * shorter;
}