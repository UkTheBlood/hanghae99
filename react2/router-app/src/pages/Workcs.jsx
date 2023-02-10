import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Workcs() {
    // const navigate = useNavigate();

    // const location = useLocation();

    return (
        <div>
            Workcs
            <br />
            <button onClick={() => {
                // navigate('/')
            }}>Home으로 이동</button>
            <Link to={'/contact'}>contact 페이지로 이동하기</Link>
        </div>
    )
}

export default Workcs