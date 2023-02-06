import React from 'react'

function map() {
    const [count, setCount] = useState([1, 2, 3, 4, 5]);

    const onClick = () => {
        // count.push(6);
        setCount(count.concat([6]))
    }

    // map, filter
    // 공통점
    // 반환 값: 배열
    // 그 배열이 새로운 배열 -> 원본과는 다른 메모리 주소를 가진 배열

    // 차이점
    // 1. parameter로 넘기는 함수의 형태가 다르다.
    // 1-1. map(() => {}) return의 데이터 타입이 자유롭다.
    // 1-2. filter(() => {}) return boolean 조건문이 들어간다
    // 2. 요소의 형 변환 가능 여부 map은 가능, filter 불가능

    // reduce
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={onClick}>counter</button>
        </div>
    )
}

export default map