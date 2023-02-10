import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  // 여기에서 store에 접근하여, counter의 값을 읽어오고싶음
  // useSelector
  const counter = useSelector((state) => {   // state는 중앙저장소 안에 있는 전체 state
    return state.counter;
  });

  //disPatch를 가져와보자
  const dispatch = useDispatch();

  console.log('data', counter.number)

  return (
    <>
      <div>
        현재 카운트 : {counter.number}
      </div>
      <button onClick={() => {
        // +1을 해주는 로직을 써준다.
        dispatch({    // 인자로 액션 객체를 넣어준다.
          type: 'PLUS_ONE'
        })
      }}> + </button>
      <button onClick={() => {
        dispatch({
          type: 'MINUS_ONE'
        })
      }}> - </button>
    </>

  );
}

export default App;
