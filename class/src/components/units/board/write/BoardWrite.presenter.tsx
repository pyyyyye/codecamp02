import { MyInput, MyButton } from "./BoardWrite.styles";


interface IProps {
    onChangeInputs: React.ChangeEventHandler<HTMLInputElement> 
    onClickSubmit : React.MouseEventHandler<HTMLButtonElement>
    onClickEdit : React.MouseEventHandler<HTMLButtonElement>
    active : boolean
    isEdit? : boolean
}

export default function BoardWriteUI({onChangeInputs, onClickSubmit, onClickEdit, active, isEdit}:IProps){ 
    //? 원래는props  => {내용}
    return(//name대신 id여도 돼.가급적 이름 같게해줘야 편해
        <>
            작성자: <MyInput type="text" name="writer" onChange={onChangeInputs} /><br/>
            비밀번호: <MyInput type="password" name="password" onChange={onChangeInputs} /><br/>
            글제목: <MyInput type="text" name="title" onChange={onChangeInputs} /><br/>
            글내용: <MyInput type="text" name="contents" onChange={onChangeInputs} /><br/>
            {!isEdit && <MyButton onClick={onClickSubmit} active={active}>등록하기</MyButton> }
                {/* //이부분의 true, false에 맞춰 색 바뀜. */}
            {isEdit && <MyButton onClick={onClickEdit} active={active}>수정하기</MyButton>}
        </>
    )
}

