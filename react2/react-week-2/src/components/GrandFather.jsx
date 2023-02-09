import React from 'react'
import { FamilyContext } from '../context/FamilyContext';
import Father from './Father';

// GF => Child한테 어떤 정보를 알려줘서 Child가 그 내용을 출력

function GrandFather() {
    const houseName = '스파르타'
    const pocketMoney = 10000;
    return (
        <FamilyContext.Provider value={{
            houseName,
            pocketMoney,
        }}>   
        {/* value 안에 객체가 들어감*/}
            <Father />
        </FamilyContext.Provider>
        // 위의 FatherContext가 .provide로 추가되었으니 밑에도 추가해야 함
    );
}

export default GrandFather