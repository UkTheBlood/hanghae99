import React, { useState } from "react";
import './App.css';

const App = () => {

  const [todo, setTodo] = useState([
    { id: 1, title: "react를 공부합시다." },
    { id: 2, title: "useState 공부합시다." },
    { id: 3, title: "자바스크립트를 공부합시다." }
  ]);

  const [title, setTitle] = useState('')

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title,
    }

    setTodo([...todo, newTodo])
    setTitle('')
  }

  return (
    <div className="wrapper">
      <div className="input-tag">
        <input

          value={title}
          onChange={titleChangeHandler}
        />

        <button onClick={clickAddButtonHandler}>추가하기</button>
      </div>
      <h1 className="texth1">Todo List</h1>
      <div className="app-style">
        {todo.map(function (item) {
          return (
            <div key={item.id} className="component-style">
              {item.title}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
