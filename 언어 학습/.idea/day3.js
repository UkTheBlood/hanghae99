let lamp = false;

function goTo2F() {
    let lamp = true;

    function goTo3F() {
        let pet = 'puppy';
    
        console.log(pet);
        console.log(lamp);
    }
    
    
    goTo3F();

}

goTo2F();

// goTo3F에 있는 lamp가 lamp를 찾기 위해 goTo3F에 lamp가 선언 됐는지 확인
// 없음
// 없으므로 상위 스코프에서 확인을 해봄 (goTo2F이라는 곳)
// goTo2F에 lamp가 선언 되었으니 그 값을 표출하고 함수를 종료함
// goTo2F의 상위 스코프에 선언된 lamp는 작동되지 않음
// 동일한 식별자가 여러 개 있을 때 이러한 과정으로 상위 스코프에서 선언된 식별자의 
// 값이 가려지는 현상을 변수 섀도잉이라고 말함

function test(a, b) {
    return a + b;
}