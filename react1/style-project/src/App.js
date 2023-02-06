import React, { useState } from "react";
import './App.css';

const App = () => {

  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 27, name: "구교환" },
  ])

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }
  
  // 추가 버튼 클릭
  const clickAddButtonHandler = () => {
    // 1. 새로운 형태의 이것을 만든다.
    // 이것: { id: 4, age: 27, name: "구교환" }
    // 2. 이것을 배열에 담는다.
    const newUser = {
      id: users.length + 1,   // id는 배열 길이 +1
      age,
      name,
    }
  
    setUsers([...users, newUser])      
    // 불변성을 유지하기 위해
    // users의 배열을 나열한 후 newUser이라는 값을 추가하여 set한다.
  }

  // 삭제 버튼 클릭(X)
  const clickRemoveButtonHandler = (id) => {
    const newUsers = users.filter(function(user) {
      return user.id !==id
    });
    setUsers(newUsers);
  }

  return (
    <div>
      <div>
        이름 : &nbsp;
        <input
          value={name}
          onChange={nameChangeHandler}
        /> <br />
        나이 : &nbsp;
        <input
          value={age}
          onChange={ageChangeHandler}
        />
      </div>
      <br />
      <button onClick={clickAddButtonHandler}>추가 !</button>
      <div className="app-style">
        {
          users.map(item => {
            // map함수를 쓸 떄 반복적으로 return하는 부분은 반드시 key 태그를 붙여줘야 함
            return (
              <div key={item.id} className="component-style">
                {item.age} - {item.name}
                <button onClick={() => clickRemoveButtonHandler(item.id)}>X</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default App;