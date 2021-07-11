// 게시물 정보 전송 및 등록 완료

import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_BOARD = gql`
             mutation createBoard($createBoardInput: CreateBoardInput!){       
                createBoard(createBoardInput:$createBoardInput){
                    _id
                }
            }`


export default function ApolloPage(){
    const router = useRouter('')
    const [writer, setWriter] = useState('') //글쓴이
    const [password, setPassword]= useState('') //비번
    const [title, setTitle] = useState('') // 제목
    const [contents, setContents] = useState('') 

    function onChangeWriter(event){
        setWriter(event.target.value)
    }
    function onChangePassword(event){
        setPassword(event.target.value)
    }
    function onChangeTitle(event){
        setTitle(event.target.value)
    }
    function onChangeContents(event){
        setContents(event.target.value)
    }

    const [createBoardMutation]= useMutation( CREATE_BOARD )

    async function onClickSubmit(){
        try{
            const hodoojadoo = await createBoardMutation({
                variables : {
                    createBoardInput:{
                        writer:writer,
                        password:password,
                        title:title,
                        contents:contents
                }}
            })
            // console.log(hodoojadoo.data.createBoard.message)
            // console.log('게시물이 성공적으로 등록되었습니다.')
            alert(hodoojadoo.data.createBoard._id)
            router.push(`/detail/${hodoojadoo.data.createBoard._id}`)
        }   catch(error){
                alert(error)//error 팝업창 뜸. 
        }}
            // mutation zzzzzzzzzzz(
            //     $aaa: String
            //     $bbb: String         gql을 이렇게 쉼표없이 써도 됨. ( graphql 한정)
            //     $ccc:String 
            //     $xxx:String
            //     ) 
            // 이하 원래버전
            // mutation zzzzzzzzzzz($aaa: String, $bbb: String, $ccc:String, $xxx:String){       
            //     createBoard(writer:$aaa , password:$bbb, title:$ccc, contents:$xxx){message}
        
        return (
        <>
            <div></div>
            작성자: <input type="text" onChange={onChangeWriter} />
            비밀번호: <input type="password" onChange={onChangePassword} />
            글제목: <input type="text" onChange={onChangeTitle} />
            글내용: <input type="text" onChange={onChangeContents} />
            <button onClick={onClickSubmit}>데이터 입력하기</button>
        </>
        )
    }