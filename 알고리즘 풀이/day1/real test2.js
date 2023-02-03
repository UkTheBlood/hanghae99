function solution(str){
	let answer= 0;
    let point = 0;                              // 내 총 점수
    let Opoint = 0;                             // O가 나왔을 때 1씩 더해주고 연속으로 나오면 1씩 더 더해준 값을 지정하기 위해 변수 지정
    for(let i = 0; i < str.length; i++) {       // str.length 만큼 돌 때
        if(str[i] === 'O') {                    // O가 나왔다면
            Opoint = Opoint + 1;                // 총 점수에 더해줄 값 Opoint에 1을 더해줌 (연속으로 나오면 1이 더 더해져서 2가 됨)
            point = point + Opoint;             // 총 점수에 Opoint를 더해줌 => point는 1이 됨
        } else if(str[i] === 'X') {             // str에 X가 나온 경우
            Opoint = 0;                         // Opoint는 다시 0으로 돌아감
        }
    }
    answer = point;                             // answer에 point로 변환해줌

	return answer;
}
let str="OOXXOXXOOO";
console.log(solution(str))