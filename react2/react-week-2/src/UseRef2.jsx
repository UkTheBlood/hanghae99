import React, { useEffect, useRef, useState } from "react";

function App() {

  const idRef = useRef('');
  const pwRef = useRef('');

  const [id, setId] = useState("");

  // 화면이 렌더링 될 때 어떤 작업을 하고싶다. : useEffect!!!!!!!
  useEffect(() => {
    idRef.current.focus();
  }, []);

  useEffect(() => {
    if (id.length >= 10) {
      pwRef.current.focus();
    }
  }, [id])

  return (
    <>
      <div>
        아이디 :
        <input
          value={id}
          onChange={(event) => {
            setId(event.target.value);

            // if (id.length >= 10) {
            //   pwRef.current.focus();
            // }
          }}
          type="text"
          ref={idRef}
        />
      </div>
      <div>
        비밀번호 : <input type="password" ref={pwRef} />
      </div>
    </>
  )
}

export default App;