import './App.css';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const plsuButton = () => {
    setNum(num + 1);
  }
  return (
    <div>
      <div>
        {num}
      </div>

      <div>
        <button onClick={ () => {   // 버튼 클릭시 num을 -1 하기
          setNum(num - 1)
        }}> -1 </button>

        <button onClick={plsuButton}> +1 </button>
      </div>
    </div>
  );
}

export default App;
