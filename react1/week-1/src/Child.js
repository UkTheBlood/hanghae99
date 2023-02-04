import React from 'react'



function Child({ age, name, children }) {   
    // 어떠한 props들이 사용되고 있는지 직관적으로 알 수 있음
    console.log(age)
    console.log(name)
    console.log(children)
    return <div>Child</div>
}

Child.defaultProps= {
    age: '기본이름'
}

export default Child