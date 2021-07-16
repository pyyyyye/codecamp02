import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import { IBoardWriteProps } from './BoardWrite.types';

export const INPUTS_INIT = {
  writer: '',
  password: '',
  title: '',
  contents: ''
}

export default function BoardWrite(props: IBoardWriteProps){
    const router = useRouter()
    const [active, setActive] = useState(false)
    const [inputs, setInputs] = useState(INPUTS_INIT)
    const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT)
  
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
    
    function onChangeInputs(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
      const newInputs = { ...inputs, [event.target.name]: event.target.value }
      setInputs(newInputs)
      //! ----------------------아래 setActiv줄 짧게 줄이기 전.--------------------------------------
      // if(Object.values(inputs).every(data => data)){// =(data=>(data=""))
      // setActive(true)                             
      // } 

      setActive(Object.values(newInputs).every(data => data)) 
      if(inputsErrors[event.target.name as keyof typeof INPUTS_INIT]) {
        setInputsErrors({...inputsErrors, [event.target.name]: ""})
      }
    }

    async function onClickSubmit(){ //*--------------등록하기---------------------
      setInputsErrors({
        writer: inputs.writer ? "" : "작성자를 입력해주세요.",
        password: inputs.password ? "" : "비밀번호를 입력해주세요.",
        title: inputs.title ? "" : "제목을 입력해주세요.",
        contents: inputs.contents ? "" : "내용을 입력해주세요."
      })
      if(Object.values(inputs).every(data => data)){  //!--------error없을 때만 작성되게. (모든데이터=모든데이터있다)
        try {
          const result = await createBoard({
            variables: { createBoardInput: { ...inputs }}
          })
          alert('게시물이 성공적으로 등록되었습니다.')
          router.push(`/boards/${result.data.createBoard._id}`)
        } catch(error){
          alert(error.message)
        }
      }
    }

    async function onClickUpdate(){ //*--------------------------------수정하기-----------------------------
      setInputsErrors({
        writer: inputs.writer ? "" : "작성자를 입력해주세요.",
        password: inputs.password ? "" : "비밀번호를 입력해주세요.",
        title: inputs.title ? "" : "제목을 입력해주세요.",
        contents: inputs.contents ? "" : "내용을 입력해주세요."
      })
      if(Object.values(inputs).every(data => data)){
        try {
          const result = await updateBoard({
            variables: { 
              boardId: router.query.boardId,
              password: inputs.password,
              updateBoardInput: { 
                title: inputs.title,
                contents: inputs.contents
              }
            }
          })
          alert('게시물이 성공적으로 수정되었습니다.')
          router.push(`/boards/${result.data.updateBoard._id}`)
        } catch(error){
          alert(error.message)
        }
      }
    }

    return(
        <BoardWriteUI 
          isEdit={props.isEdit}
          active={active}
          inputsErrors={inputsErrors}
          onChangeInputs={onChangeInputs}
          onClickSubmit={onClickSubmit}
          onClickUpdate={onClickUpdate}
        />
    )
}