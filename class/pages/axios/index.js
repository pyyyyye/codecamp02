import axios from 'axios'
import { useState } from 'react'
import styled from '@emotion/styled'

const Box1 = styled.div`
border: 1px solid red;
`
const Button = styled.button`
margin-bottom: 70px;
`

export default function AxiosPage(){
    const[data, setData] = useState('')
    const[data2, setData2] = useState('')
    const[data5_1, setData5_1] = useState('')
    const[data5_2, setData5_2] = useState('')
    const[data5_3, setData5_3] = useState('')

    async function handleClickData (){
        const aaa = await axios.get('https://koreanjson.com/posts/1')
        setData(aaa.data.title) 
        setData2(aaa.data.content) 
    }
    const handleClickData5 = async () => {  //화살표함수형으로 변형
        const bbb = await axios.get('https://koreanjson.com/posts')
        // console.log(bbb.data) 
        // console.log(bbb.data[0])
        // console.log(bbb.data[1].title)
        setData5_1(bbb.data[3].title) 
        setData5_2(bbb.data[0].content)
        setData5_3(bbb.data[5].title)
        
    }

    return (
        <>  
            <Box1>{data} </Box1> <hr/>
            <div>{data2} </div> <hr/>
            <Button onClick={handleClickData}>데이터 불러오기</Button>

            <div>{data5_1}</div> <hr/>
            <div>{data5_2}</div> <hr/>
            <div>{data5_3}</div> <hr/>
            <Button onClick={handleClickData5}>5번데이터 불러오기</Button>
        </>
    )

}