// action value

// import { createSlice } from "@reduxjs/toolkit"

// export를 통해 다른 파일에서도 사용 가능하게
// const PLUS_ONE = "counter/PLUS_ONE"
// const MINUS_ONE = "counter/MINUS_ONE"
// const PLUS_N = "counter/PLUS_N"
// const MINUS_N = 'counter/MINUS_N'

// action creator : action value를 return하는 함수
// export const plusOne = () => {
//     return {
//         type: PLUS_ONE
//     }
// }
// export const minusOne = () => {
//     return {
//         type: MINUS_ONE
//     }
// }
// export const plusN = (payload) => {
//     return {
//         type: PLUS_N,
//         payload: payload
//     }
// }
// export const minusN = (payload) => {
//     return {
//         type: MINUS_N,
//         payload: payload
//     }
// }

// 초기 상태값 (state)
const initialState = {
    number: 0,
    // const [number. setNumberr] = useState(0); 에서 0이 위에처럼 들어옴
};

// 리듀서 : 'state에 변화'를 일으키는 함수
// input에는 2가지 : state와 action
// action(객체)은 state를 어떻게 할 것인지, 수정을 어떻게 할건지
// (1) state를 action의 type에 따라 변경하는 함수

// action 객체라는 것은 action type을 payload 만큼 처리하는 것이다
// ex : payload가 3이다. 3만큼을 +를 해라


// const counter = (state = initialState, action) => {
//     switch (action.type) {  // action의 type 값에 따라 작동
        // case PLUS_ONE:
        //     return {
        //         number: state.number + 1,
        //     };
        // case MINUS_ONE:
        //     return {
        //         number: state.number - 1,
        //     }
//         case PLUS_N:
//             return {
//                 number: state.number + action.payload
//             }
//         case MINUS_N:
//             return {
//                 number: state.number - action.payload
//             }
//         default:            // 아무것도 지정돼있지 않은 경우 초기값 반환
//             return state;
//     }
// }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        addNumber: (state, action) => {
            state.number = state.number + action.payload
        },
        minusNumber: (state, action) => {
            state.number = state.number - action.payload
        },
    },
});

export default counterSlice.reducer;

export const {addNumber, minusNumber} = counterSlice.actions