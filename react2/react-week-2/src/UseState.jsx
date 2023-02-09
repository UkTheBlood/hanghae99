import { useState } from 'react';

function UseState() {

  const [number, setNumber] = useState(0);

  return (
    <>
      <div>Number State: {number}</div>
      <button
        onClick={() => {
          // 기존 업데이트
          // 버튼을 클릭했을 때 배치성으로 처리되어 배치 업데이트
          // 명령을 모아서 같은 것들은 최종적으로 한 번만 실행
          // setNumber(number + 1);
          // setNumber(number + 1);
          // setNumber(number + 1);

          // 렌더링이 잦은건 성능에 이슈가 있는 것

          // 함수형 업데이트
          // 명령을 모아서 순차적으로 한 번씩 실행 (총 3번이 모임)
          setNumber((currentNumber) => currentNumber + 1);  // 바뀐 스테이트를 받아옴
          setNumber((currentNumber) => currentNumber + 1);  // 받아온 스테이트를 다시 바꿈...
          setNumber((currentNumber) => currentNumber + 1);
        }}
      >
        누르면 UP!
      </button>
    </>
  )
}

export default UseState;