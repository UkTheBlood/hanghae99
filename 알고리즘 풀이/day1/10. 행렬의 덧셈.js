arr1 = [[1,2], [2,3]]
arr2 = [[3,4], [5,6]]

arrTotal = [];
arrTotal.push(arr1, arr2);

console.log(arrTotal)

// function solution(arr1, arr2) {
//     var answer = [[]];
//     return answer;
// }

//첫 번째 시도
function solution(arr1, arr2) {
    var answer = [[]];
    for(let i = 0; i < arr1.length; i++) {
        for(let z = 0; z < arr2.length; z++) {
            answer.push(arr1[[i], [z]] + arr2[[i], [z]])
        }
    }
    return answer;
}

// 실행한 결괏값 [[],"1,23,4","2,35,6","1,23,4","2,35,6"]이 기댓값 [[4,6],[7,9]]과 다릅니다.



function sumMatrix(A,B){
            return A.map((a,i) => a.map((b,j) => b + B[i][j]));
        }


function solution(arr1, arr2) {
    let answer=[]
    //arr은 숫자들의 배열
    // let sum = [[arr1[0]+arr2[0]],[arr1[1]+arr[1]]
    //arr1[0,1],arr2[0,1] -> arr3=[[arr1[0]+arr2[0]],[arr1[1]+arr[1]]
    for(let i=0; i<arr1.length; i++){ //[1,2][2,3]
        let sum = [];
        //[0],[1] 해당되는 숫자들을 더한 값을 표현
        for(let j=0; j<arr1[i].length; j++){ //arr1 안의 배열의 길이 (2번)
            sum.push(arr1[i][j] + arr2[i][j]) 
            // 1번째 1+3, 2번째 2+4 / 3번째 2+5 4번째 3+6
        }
        answer.push(sum) // [4,6],[7,9], 숫자를 더한값을 반환해주기
    }
    return answer;
}