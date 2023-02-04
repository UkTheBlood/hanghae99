import React from 'react'
import Child from './Child'

function App() {
  const name = 'test'
  return <Child 
            // age={21} 
            name={name}>이름
          </Child>
}

export default App