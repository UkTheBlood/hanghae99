function solution(arr1, arr2){
	let answer = 0;
    let time = 0;                                   // 공부한 시간을 담는 변수 선언
        for(let j = 0; j < arr2.length; j++) {      // for문을 사용하여 공부한 시간을 구해 이를 answer에 넣어주는 반복문
            if(arr2[j] >= 29) {                     // checkout 시간이 29시가 넘어가면 21지 자동으로 체크아웃 하는 조건을 만들어줌
                time = 21 - arr1[j]                 // 21시로 체크아웃 고정하고 체크인 시간에서 체크아웃 시간 빼기
                answer = answer + time              // 공부한 시간을 answer에 계속 더해주기
            } else {
                time = arr2[j] - arr1[j]            // 체크아웃 시간에서 체크인 시간을 빼주어 공부한 시간 구하기
                answer = answer + time              // 공부한 시간을 answer에 계속 더해주기
            }
            
        }
	return answer;
}
let arr1=[9, 9, 9, 9, 7, 9, 8];
let arr2=[23, 23, 30, 28, 30, 23, 23];
console.log(solution(arr1, arr2))

// for문 사용하여 arr1과 arr2 담아 푸는 문제
// if 문으로 arr2의 값이 29이상인 것과 아닌 것 차이
// 29 이상이면 21시 체크아웃, 아니면 그대로 계산