import React, { useState } from 'react'

function App() {
  // id와 password state 만들기
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onIdChangeHandler = (event) => {
    setId(event.target.value)
  }

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div>
      아이디: <input value = {id} onChange ={onIdChangeHandler}/>

      <br />

      비밀번호: <input value = {password} type = "password" onChange={onPasswordChangeHandler}/>

      <br />

      <button onClick={function () {
        alert(`고객님이 입력하신 아이디는 ${id}이며 비밀번호는 ${password}입니다.`)
        setId('')
        setPassword('')
      }}>
        로그인</button>
    </div>
  )
}

export default App