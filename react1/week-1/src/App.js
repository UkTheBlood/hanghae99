import React, {useState} from 'react'

function App() {
  const [obj, setObj] = useState({
    name: "wonjang",
    age: 21,
  });
  return (
    <div>
      <div>{obj.name}</div>
      <button onClick={() => {
        // 새로운 객체를 만들어야 함
        obj.name = 'twojang'
        const obj2 = {...obj};  // obj를 복사하는데 완전 새로운 주솟값을 만들어
        setObj(obj2);
        // obj.name = 'twojang'
        // setObj();
      }}>변경!</button>
    </div>
  )
}

export default App