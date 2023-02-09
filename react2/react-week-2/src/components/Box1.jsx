import React from 'react'

const style = {
    width: '100px',
    height: '100px',
    backgroundColor: '#01c49f',
    color: 'white',
}

function box1() {
    console.log('Box1 컴포넌트가 렌더링 됐습니다')
    return (
        <div style={style}>box1</div>
    )
}

export default React.memo(box1)