import React from 'react'

const style = {
    width: '100px',
    height: '100px',
    backgroundColor: '#c491be',
    color: 'white',
}

function box3() {
    console.log('Box3 컴포넌트가 렌더링 됐습니다')
    return (
        <div style={style}>box2</div>
    )
}

export default React.memo(box3)