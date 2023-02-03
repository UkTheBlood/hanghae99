// 몇시간 했더라? (중)

function solution(arr1, arr2){
	let answer = 0;
    let time = 0;
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr2[j] >= 29) {
                time = 21 - arr1[i]
                console.log(time)
            } else {
                time = arr2[j] - arr1[i]
            }
            
        }
    }
	return answer;
}
let arr1=[9, 9, 9, 9, 7, 9, 8];
let arr2=[23, 23, 30, 28, 30, 23, 23];
console.log(solution(arr1, arr2))

// 2중 for문 사용하여 arr1과 arr2 비교 문제 
// if 문으로 arr2의 값이 29이상인 것과 아닌 것 차이
// 29 이상이면 21시 체크아웃, 아니면 그대로 계산