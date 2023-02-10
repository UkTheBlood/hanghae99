import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);   // JSON이 배열이기 때문에 초기값을 배열로

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setData([...json])
      });
  }, [])

  return (
    <div >
      <h3>JSONPlaceholder DATA</h3>
      {
        data.map((item) => {    {/* JSON에 들어있는 data는 배열로 저장되어 있어 map함수 사용 */}
          return (
            <div style={{ border: '1px solid black', margin: '5px' }}>
              <ul>
                <li>{item.userId}</li>  {/* item.XXXX를 사용해 화면에 그려줌 */}
                <li>{item.id}</li>
                <li>{item.title}</li>
                <li>{item.body}</li>
              </ul>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
