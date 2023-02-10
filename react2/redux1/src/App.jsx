import { useDispatch, useSelector } from 'react-redux';
import { plusOne } from './redux/config/modules/counter';
import { minusOne } from './redux/config/modules/counter';
import './App.css';
import { useState } from 'react';
import { plusN } from './redux/config/modules/counter';
import { minusN } from './redux/config/modules/counter';

function App() {
  const [number, setNumber] = useState(0);

  // 여기에서 store에 접근하여, counter의 값을 읽어오고싶음
  // useSelector
  const counter = useSelector((state) => {   // state는 중앙저장소 안에 있는 전체 state
    return state.counter;
  });

  // useEffect(() => {
  //   console.log('number', number)
  // }, [number])

  //disPatch를 가져와보자
  const dispatch = useDispatch();

  return (
    <>
      <div>
        현재 카운트 : {counter.number}
      </div>
      <div>
        <input 
          type="number" 
          value={number}
          onChange = {(event) => {
            setNumber(+event.target.value)
          }}
        />
      </div>
      <button onClick={() => {
        // action에는 객체가 들어가야 하는데, plusOne 함수가 객체를 반환하기 때문에 문제 X
        // dispatch(plusOne());
        dispatch(plusN(number))
      }}> + </button>
      <button onClick={() => {
        // dispatch({
        //   type: MINUS_ONE
        // })

        dispatch(minusN(number));
      }}> - </button>
    </>

  );
}

export default App;
