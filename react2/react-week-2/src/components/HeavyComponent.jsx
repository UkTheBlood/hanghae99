import React, { useState, useMemo } from 'react'

function HeavyComponent() {

    const [count, setCount] = useState(0);

    // 컴포넌트가 리렌더링 될 때마다 밑의 함수를 실행하는 것은 굉장히 비효율적
    const heavyWork = () => {
        for(let i = 0; i < 9999; i++) {
            return 100;
        }
    };

    const value = useMemo(() => heavyWork(), [])
    console.log(`value는 ${value}입니다.`);

    return (
        <>
            <p>HeavyComponent</p>
            <button onClick={() => {
                setCount(count + 1);
            }}>
                누르면 아래 count가 올라가요
            </button><br />
            {count}
        </>
    )
}

export default HeavyComponent