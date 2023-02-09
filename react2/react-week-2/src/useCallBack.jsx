import React, { useCallback, useState } from 'react';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';

function App() {
  console.log('App 컴포넌트가 렌더링 되었습니다.')
  const [count, setCount] = useState(0);

  // 증가
  const onPlusButtonHandler = () => {
    setCount(count + 1);
  }

  // 감소
  const onMinusButtonHandler = () => {
    setCount(count - 1);
  }

  // count 초기화
  const initCount = useCallback(() => {
    console.log(`${count}에서 0으로 변경되었습니다.`)     // count가 0인 시점 저장됨
    setCount(0);
  }, [count])    // 의존성 배열까지 넣어주어야 함

  return (
    <>
      <h3>카운트 예제</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusButtonHandler}>+</button>
      <button onClick={onMinusButtonHandler}>-</button>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <Box1 initCount={initCount}/>
        <Box2 />
        <Box3 />
      </div>
    </>
  )
}

export default App;