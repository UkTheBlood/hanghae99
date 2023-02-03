function solution(num){
	let answer= 0;
    let coin = [500, 100, 50, 10]                                   // coin의 종류를 배열에 넣어줌
    let count = 0;                                                  // 거스름돈의 coin 개수 0개부터 시작
    let change = 1000 - num;                                        // 거스름돈은 1000에서 num(물건값)을 뺀 것
    for(let i = 0; i < coin.length; i++) {
        count = count + Math.floor(change/coin[i]);                 // 거스름돈의 coin 개수는 거스름돈을 coin[i]로 나눈 몫을 더해줌
        change = change - coin[i] * Math.floor(change/coin[i]);     // 위의 식에서 coin으로 받았으니 거스름돈이 변화가 생기게 되는데 이를 coin[i] * 위에 나온 식의 몫 을 빼줘 구해줌
    }
    answer = count;                                                 // answer 에 count를 넣어줌
	return answer;
    
}


let num1 = 900;
console.log(solution(num1))