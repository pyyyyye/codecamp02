import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IQuery } from '../../../../commons/types/generated/types'

const inputsInit = { //inputsInit = 초기값이라는 뜻
    writer: "",
    password: "",
    title: "",
    contents:""
}
interface IProps{
    isEdit?: boolean //  ?:isEdit있어도 되고 없어도 돼
                    //  : isEdit있어야돼
    data?: IQuery //data가 있거나 없거나. 근데 있으면 iquery형태를 갖춤. 
}
interface INewInputs {
    title?: string
    contents?: string
}

export default function BoardWrite(props:IProps){
    const router = useRouter();
    const [createBoard]= useMutation<IMutation,IMutationCreateBoardArgs>( CREATE_BOARD )
    const [updateBoard]= useMutation<IMutation,IMutationUpdateBoardArgs>(UPDATE_BOARD)
    const [active, setActive] = useState(false)//초기값 false (파란색)
    const [inputs, setInputs] = useState(inputsInit) //안의 객체 바꿀 용도.
    // const [aaa, setAaa] = useState<number>(1)
    // setAaa('호두자두')

    // const [writer, setWriter] = useState('') //글쓴이
    // const [password, setPassword]= useState('') //비번
    // const [title, setTitle] = useState('') // 제목
    // const [contents, setContents] = useState('') 

    function onChangeInputs(event: any){  //!-------------- 글 변경하기
        // setInputs(바꿀 객체) <-이 객체로 바꿔라!!!
        //안에 하나만 적으면 나머진 사라짐.위와같은 이유로
        const newInputs = {
                ...inputs, // 스프레드연산자 , 얕은복사
                // writer:inputs.writer,
                // password:inputs.password,
                // title:inputs.title,
                // contents:inputs.contents, 
                // 이걸 또 줄인게 위
                [event.target.name] : event.target.value
            }
            setInputs(newInputs)
            if(Object.values(newInputs).every(data=>data)){ setActive(true) }
            // if(newInputs.writer && newInputs.password && newInputs.title && newInputs.contents){
            // 위 setActive(true) -> 아래 각각의 if값 4개를 한 개로 합친 것!

            // setInputs({ 이걸 줄인 게 상단 변수로 만든것
            //     writer:event.target.value, 
            //     password: inputs.password,
            //     title: inputs.title,
            //     contents: inputs.contents
            // })
        
        // event.target.name //writer (name writer갖고옴)
        //writer갖고오면 나머지 password등은 그대로고. 이런식.
        // event.target.value // 철수 (value값 가져옴)
    

    // function onChangeWriter(event){ //!--///이하 4개기능=상단onChangeInputs로합침.///--
    //     setWriter(event.target.value)
        //*위 input들 다 채워지면 값이 true로 바뀌고 (빨간색)으로 바뀌게
        // if (event.target.value && password  && title && contents){ setActive(true) }
        // else {setActive(false)} //*<-else 값 요거는 넣어도 되고 안넣어도 되는데 혹시몰라서 확실히 하려거 넣은거임. 위에서 useState(false)로 줬으니까 이미 설정은 되어있.
    // }
    // function onChangePassword(event){
    //     setPassword(event.target.value)
       //위에만 하면 순서 바꿔서 적었을 땐 적용이 안되니까 모두 적어줘야해.
        // if (writer && event.target.value && title && contents){ setActive(true)}}

    // function onChangeTitle(event){
    //     setTitle(event.target.value)
        // if ( writer && password  && event.target.valuele  && contents){ setActive(true) }}
    // function onChangeContents(event){
    //     setContents(event.target.value)
        // if (writer && password && title && event.target.value){ setActive(true) }}
    }


    async function onClickSubmit(){  //!-------------------글 등록하기
        try{
            const result = await createBoard({
                variables : {createBoardInput:{...inputs }}
                    //* 원래 스프레드연산자 자리에 들어가는 내용.
                    // writer:inputs.writer, 
                    // password:inputs.password,
                    // title:inputs.title,
                    // contents:inputs.contents
            })
            alert(result.data?.createBoard._id)
            router.push(`/detail/${result.data?.createBoard._id}`)
        }   catch(error){
                alert(error)
            }
        }

        async function onClickEdit(){  //!---------------------수정하기
            const newInputs:INewInputs={}
            if(inputs.title) newInputs.title = inputs.title
            if(inputs.contents) newInputs.contents = inputs.contents
            try{
                const result = await updateBoard({
                    variables: {
                        boardId: String(router.query.boardId),                  //!--원래 값
                        password:inputs.password,
                        updateBoardInput: {   
                            title: newInputs.title,
                            contents: newInputs.contents
                             //! 수정하면 바뀐 값만 저장됨.
                            // title : inputs.title,
                            // contents : inputs.contents
                        }
                    }
                })
                alert(result.data?.updateBoard._id)
                router.push(`/detail/${result.data?.updateBoard._id}`)
            } catch(error){
                alert(error)
            }
        }






    return(
        <BoardWriteUI   //props로 담는 과정.
            onChangeInputs={onChangeInputs}
            onClickSubmit={onClickSubmit}
            active={active}
            onClickEdit={onClickEdit}
            isEdit={props.isEdit}
            data={props.data}
            // aaa={onChangeWriter}
            // bbb={onChangePassword}
            // ccc={onChangeTitle}
            // ddd={onChangeContents}
        />
        //props = {    바로 위에서 이렇게 담아준거야. 
        //     aaa:onChangeWriter,
        //     bbb:onChangePassword,
        //     ..
        //     eee:onClickSubmin
        // }
    )
}