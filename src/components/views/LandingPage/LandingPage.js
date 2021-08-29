import React, { useEffect } from 'react';
import axios from 'axios';


function LandingPage() {

    // 랜딩 페이지 들어오자 마자 바로 useEffect 가 실행 됨
    useEffect(() => {
        axios.get('/api/hello')
            .then(response => console.log(response.data))
    }, [])

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>
        </div>
    )
}

export default LandingPage