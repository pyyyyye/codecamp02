import { MyInput, MyButton } from "./BoardWrite.styles";
import { IBoardWriteUIProps } from './BoardWrite.types'

interface IProps {
    onChangeInputs: React.ChangeEventHandler<HTMLInputElement> 
    onClickSubmit : React.MouseEventHandler<HTMLButtonElement>
    onClickEdit : React.MouseEventHandler<HTMLButtonElement>
    active : boolean
    isEdit? : boolean
    data:any
}

export default function BoardWriteUI(props :  IBoardWriteUIProps){ 
//! export default function BoardWriteUI({onChangeInputs, onClickSubmit, onClickEdit, active, isEdit}:IProps){ 
//! 이렇게 풀어서 써도 같은데 밑에[ props.이 들어간 것을 모두 지워줘야 함.]
    return(//name대신 id여도 돼.가급적 이름 같게해줘야 편해
        <>
            작성자: <MyInput type="text" name="writer" onChange={props.onChangeInputs} defaultValue={props.data?.fetchBoard.writer} readOnly={props.data?.fetchBoard.writer} /><br/>
            비밀번호: <MyInput type="password" name="password" onChange={props.onChangeInputs} /><br/>
            글제목: <MyInput type="text" name="title" onChange={props.onChangeInputs} defaultValue={props.data?.fetchBoard.title} /><br/>
            글내용: <MyInput type="text" name="contents" onChange={props.onChangeInputs} defaultValue={props.data?.fetchBoard.contents}/><br/>
            {!props.isEdit && <MyButton onClick={props.onClickSubmit} active={props.active}>데이터 입력하기</MyButton> }
                {/* //이부분의 true, false에 맞춰 색 바뀜. */}
            {props.isEdit && <MyButton onClick={props.onClickEdit} active={props.active}>데이터 수정하기</MyButton>}
        </>
    )
}

