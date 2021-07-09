import { useState} from 'react'

export default function StatePage(){

    const [count, setCount] = useState(0)
    function aaa(){
        setCount(count+1)
        console.log(count)
    }

    const [hello, setHello] = useState('안녕하세요')
    function qqq(){
        setHello('하이루')
    }

    const [ranNum, setRanNum] = useState('000000')
    const [stopButton, setActive] = useState(false)
    function xxx(){
        setRanNum(
            String(Math.floor(Math.random()*1000000)).padStart(6, "0") 
        )
        setActive(true)
    }

    return(
        <>
            <div>{count}</div>
            <button onClick={aaa}>+1</button>

            <div>{hello}</div>
            <button onClick={qqq}>클릭</button>

            <div>{ranNum}</div>
            <button onClick={xxx} disabled={stopButton}>인증번호받기</button>

        </>
    )
}

