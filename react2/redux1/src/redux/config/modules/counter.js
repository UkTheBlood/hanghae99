// 초기 상태값 (state)
const initialState = {
    number: 0,
    // const [number. setNumberr] = useState(0); 에서 0이 위에처럼 들어옴
};

// 리듀서 : 'state에 변화'를 일으키는 함수
// input에는 2가지 : state와 action
// action(객체)은 state를 어떻게 할 것인지, 수정을 어떻게 할건지
// (1) state를 action의 type에 따라 변경하는 함수
const counter = (state = initialState, action) => {
    switch (action.type) {
        case "PLUS_ONE":            // action의 타입을 "PLUS_ONE"
            return {
                number: state.number + 1,
            };
        case "MINUS_ONE":
            return {
                number: state.number - 1,
            }
        default:
            return state;
    }
}

export default counter;