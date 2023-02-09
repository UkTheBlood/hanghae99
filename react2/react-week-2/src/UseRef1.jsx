import './App.css';
import { useRef, useState } from 'react';

const style = {
  border: '1px solid black',
  margin: '10px',
  padding: '10px',
}

function App() {

  const [count, setCount] = useState(0);
  
  const countRef = useRef(0);

  const plusStateCountButtonHandler = () => {
    setCount(count + 1);
  }

  const plusRefCountButtonHandler = () => {
    countRef.current++;
    console.log(countRef.current);
  }

  return (
    <>
      <div style={style}>
        state 영역입니다. {count} <br />
        <button onClick={plusStateCountButtonHandler}>state 증가</button>
      </div>
      <div style={style}>
        ref 영역입니다. {countRef.current} <br />
        <button onClick={plusRefCountButtonHandler}>ref 증가</button>
      </div>
    </>
  )
}

export default App;