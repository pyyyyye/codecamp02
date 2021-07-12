import { MyInput, MyButton } from "./BoardWrite.styles";


export default function BoardWriteUI(props){
    return(
        <>
            작성자: <MyInput type="text" onChange={props.aaa} /><br/>
            비밀번호: <MyInput type="password" onChange={props.bbb} /><br/>
            글제목: <MyInput type="text" onChange={props.ccc} /><br/>
            글내용: <MyInput type="text" onChange={props.ddd} /><br/>
            <MyButton onClick={props.eee}/*{color="yellow"}*/ active={props.fff}
                //이부분의 true, false에 맞춰 색 바뀜.
            >데이터 입력하기</MyButton>
        </>
    )
}

