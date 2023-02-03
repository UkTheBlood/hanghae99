'use strict';

// 프로미스는 자바스크립트 안에 있는 객체
// 비동기적인 것을 만들 때 콜백 함수 대신 유효하게 사용 가능한 object

//1. state

// 1. producer
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read file)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no network'));
    }, 2000);
});

// 2. consumers: then, catch, finally
promise //
.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally')
});

// 3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

function delay(ms) {
    const practice = new Promise((resolve, reject) => {
        resolve(setTimeout(resolve, 3000));
    });
};

delay(3000).then(() => alert('3초후 실행'));



fetch(documentURL)                          // HTTP 요청을 보냅니다.
    .then(response => response.json())          // 응답의 JSON 바다를 가져옵니다.
    .then(document => {                         // JSON 분석이 끝나면
        return render(document);                // 문서를 사용자에게 표시합니다.
    })
    .then(rendered => {                         // 문서 렌더링이 끝나면
        cacheInDatabase(rendered);              // 로컬 데이터베이스에 캐시합니다.
    })
    .cacheInDatabase(error => handle(error));   //에러를 처리합니다