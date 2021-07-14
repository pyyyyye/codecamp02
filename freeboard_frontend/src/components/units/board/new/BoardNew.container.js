//게시물 업로드 화면 container
import { useState } from 'react'
import {useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import {CREATE_BOARD} from './BoardNew.queries'
import NewPageUI from './BoardNew.presenter'

export default function NewPage(){
    const router = useRouter()
    const [id, setId] = useState('')//글쓴이
    const [pw, setPw] = useState('')//비번
    const [title, setTitle] = useState('')//제목
    const [contents, setContents] = useState('')//내용

    ///--------------- id.pw.title.contents 빈칸  ---------------///
    const [active, setActive] = useState(false) //버튼 초기값.false(옅은노랑)
  
    function onChangeId(event){ 
        //글쓴,비번,제목,내용  모두 채워지면 값이 true로 바뀜(진노랑)
        setId(event.target.value)
        if (event.target.value && pw && title && contents){ 
          setActive(true)
        } else { 
          setActive(false) 
        }
    }
    function onChangePassword(event){
        setPw(event.target.value)
        if (id && event.target.value && title && contents){ 
          setActive(true)
        } else { 
          setActive(false) 
        }
    }
    function onChangeTitle(event){
        setTitle(event.target.value)
        if (id && pw && event.target.value && contents){ 
          setActive(true)
        } else {
          setActive(false)
        }
    }
    function onChangeContents(event){
        setContents(event.target.value) 
        if (id && pw && title && event.target.value){ 
          setActive(true)
        } else { 
          setActive(false)
        }
    }
  
    const [createBoardMutation] = useMutation(CREATE_BOARD)

    

    // ------------ ERROR Start ------------- //
    const [idError, setIdError] = useState('')
    const [PwError, setPwError] = useState('')
    const [TitleError, setTitleError] = useState('')
    const [ContentsError, setContentsError] = useState('')

    async function onClickSubmit(){ 
      if(id!==""){ setIdError('') } 
      if(pw!==""){ setPwError('') } 
      if(title!==""){ setTitleError('') } 
      if(contents!==""){ setContentsError('') } 
      
      if(id==="" || pw==="" || title===""){
        alert('빈칸을 모두 채워주세요.')
        if(id===""){
        //   alert('아이디를 입력해주세요.')
         setIdError('아이디를 입력해주세요.')
        //   return ->return 안쓰면 setPwError 에러창도 이어서 뜸
        } 
        if(pw===""){
          setPwError('비밀번호를 입력해주세요.')
        } 
        if(title===""){
          setTitleError('제목을 입력해주세요.')
        } 
        if(contents===""){
          setContentsError('내용을 입력해주세요.')
        } 
      } else{
          alert('게시물이 등록되었습니다.')
      } 
      try{
        const result = await createBoardMutation({
          variables:{ 
            createBoardInput:{
              writer:id,
              password:pw,
              title:title,
              contents:contents
            }}
      })
      // console.log("성공")
      alert(result.data.createBoard._id)
        router.push(`/board/detail/${result.data.createBoard._id}`)
      }
       catch(error){ alert(error) }
    }  



    return(
        <NewPageUI   //props로 담는 구간---------------------
            onChangeId={onChangeId}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}

            active={active}
        />
    )
}