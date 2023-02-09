import React from 'react'

const style = {
    width: '100px',
    height: '100px',
    backgroundColor: '#4e93ed',
    color: 'white',
}

function box2() {
    console.log('Box2 컴포넌트가 렌더링 됐습니다')
    return (
        <div style={style}>box2</div>
    )
}

export default React.memo(box2)