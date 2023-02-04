// filter
const arr = [1, 2, 3, 4, 5, 6, 7];
const oddArr = arr.filter((x) => x % 2 === 1);

console.log(oddArr);

const arr1 = ['신짱구', '김철수', '김훈'];
const kimArr = arr1.filter((x) => x[0] === '김');

console.log(kimArr);

// reduce
// 공식처럼 외우는게 좋음 (배열의 총 합을 구할 때 편함)
const arr2 = [1, 2, 3, 4, 5];
const sum = arr2.reduce((acc, cur) => acc + cur, 100);

const rank = [7, 10, 7, 8, 8];
const total = rank.reduce((a, b) => a + b);     // 배열의 합

const cnt = rank.length;

console.log(total / cnt);

// forEach
// 배열의 각 요소에 대해 함수를 실행
// 잘 쓰면 굉장히 유용함
const arr3 = ['똘기', '떵이', '호치', '새초미'];
arr3.forEach((x, i) => {
    console.log(x.repeat(i + 1))
});


// for of
// 반복 가능한 대상에 사용 가능 (배열, 객체 ,문자열 등등)
const forof = ['BTS', '봉준호', '손흥민', '제이팍']
for (let x of arr) {
    console.log(x);
}

// for in
// 열거 가능한 대상에 사용
// 인덱스 접근할 때


// for in, for of는 내부동작을 모두 알고 써야함
// 끝까지 순회하기 때문에 complexity 낭비가 있을 수 있음