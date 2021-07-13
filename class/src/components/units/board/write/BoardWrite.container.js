import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD } from './BoardWrite.queries'


export default function BoardWrite(){
    const router = useRouter('')
    const [writer, setWriter] = useState('') //글쓴이
    const [password, setPassword]= useState('') //비번
    const [title, setTitle] = useState('') // 제목
    const [contents, setContents] = useState('') 
    const [active, setActive] = useState(false)//초기값 false (파란색)

    function onChangeWriter(event){
        setWriter(event.target.value)
        //위 input들 다 채워지면 값이 true로 바뀌고 (빨간색)으로 바뀌게
        if (event.target.value && password  && title && contents){ setActive(true) }
        else {setActive(false)}
    }
    function onChangePassword(event){
        setPassword(event.target.value)
       //위에만 하면 순서 바꿔서 적었을 땐 적용이 안되니까 모두 적어줘야해.
        if (writer && event.target.value && title && contents){ setActive(true)}
        else {setActive(false)}
        
    }
    function onChangeTitle(event){
        setTitle(event.target.value)
        if ( writer && password  && event.target.valuele  && contents){ setActive(true) }
        else {setActive(false)}
    }
    function onChangeContents(event){
        setContents(event.target.value)
        if (writer && password && title && event.target.value){ setActive(true) }
        
    }
    

    const [createBoard]= useMutation( CREATE_BOARD )

    async function onClickSubmit(){
        try{
            const result = await createBoard({
                variables : {
                    createBoardInput:{
                        writer:writer,
                        password:password,
                        title:title,
                        contents:contents
                }}
            })
            alert(result.data.createBoard._id)
            router.push(`/detail/${result.data.createBoard._id}`)
        }   catch(error){
                alert(error)
        }
    }
    
    return(
        <BoardWriteUI   //props로 담는 과정.
            aaa={onChangeWriter}
            bbb={onChangePassword}
            ccc={onChangeTitle}
            ddd={onChangeContents}
            eee={onClickSubmit}

            fff={active}
        />
        //props = {    바로 위에서 이렇게 담아준거야. 
        //     aaa:onChangeWriter,
        //     bbb:onChangePassword,
        //     ..
        //     eee:onClickSubmin
        // }
    )
}