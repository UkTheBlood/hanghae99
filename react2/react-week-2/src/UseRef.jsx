import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('')

  useEffect(() => {console.log('Hello')

    return () => {
      // 이 부분에 작성하면 컴포넌트가 사라질 때 작동힘 (clean up) 
    }
  }, [value]);

  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
      />
    </div>
  )
}

export default App;