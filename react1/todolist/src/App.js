import React, { useState } from "react";
import './App.css';

function App() {
  // 초기값과 setTodo 만들기
  const [todo, setTodo] = useState([
    { id: 1, title: "리액트 공부하기", contents: "리액트 기초 공부", done: false},
    { id: 2, title: "리액트 공부합시다", contents: "노션 보기", done: false},
    { id: 3, title: "리액트 공부하기", contents: "리액트 기초 공부", done: false},
  ])

  const [title, setTitle] = useState('')
  const [contents ,setContents] = useState('')

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const contentsChangeHandler = (event) => {
    setContents(event.target.value);
  }

  return (
    <div>
      <h1>My Todo List</h1>
      <div>
        제목
        <input 
          value={title}
          onChange={titleChangeHandler}
        >

        </input>
        내용 <input 
          value={contents}
          onChange={contentsChangeHandler}
        >
        </input>
        {/* <button onClick={}>추가하기!</button> */}
      </div>
    </div>
  );
}

export default App;
