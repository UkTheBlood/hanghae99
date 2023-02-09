import React, { useContext } from 'react'
import { FamilyContext } from '../context/FamilyContext'

const style = {
    color: 'red',
    fontWeight: '900',
}

function Child() {

    const data = useContext(FamilyContext) // useContext안에 가져오는 파일 명
    console.log('data', data)

    return (
        <div>
            나는 이 집안의 막내예요! <br />
            할아버지가 우리 집 이름은
            <span style={style}> {data.houseName} </span>
            이라고 하셨어요. <br />
            용돈 <span style={style}>{data.pocketMoney}</span>주셨어요!
        </div>
    )
}

export default Child