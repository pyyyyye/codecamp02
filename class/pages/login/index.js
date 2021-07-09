import { useState } from 'react'
import { Wrapper,} from '../../styles/boards/new/login.styles'

export default function LoginPage(){
    
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [idError, setIdError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    function aaa(event){
        // console.log(event.target.value)
        setId(event.target.value)
    }
    function bbb(event){
        // console.log(event.target.value)
        setPassword(event.target.value)
    }
    function ccc(event){
        if(id===""){
            // alert('id를 확인하세요.')
            setIdError('아이디를 입력해주세요.')
        } else if(password===""){
            // alert('비밀번호를 확인하세요.')
            setPasswordError('비밀번호를 입력해주세요.')
        } else {
            alert('로그인을 해볼까요?')
            //통신프로그램을 이용해서 
            //id, password를 백엔드컴퓨터의 api에 전송하기 
        }
    }

    return(
        <Wrapper>
            <h1 style={{color:'red'}}>로그인</h1>
            <div>아이디</div>
            <input type="text" onChange={aaa} />
            <div>{idError}</div>

            <div> 비밀번호 </div>
            <input type="password" onChange={bbb} />
            <div>{passwordError}</div>

            <button onClick={ccc}>로그인하기</button>
        </Wrapper>
    )
}