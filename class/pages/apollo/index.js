import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

export default function ApolloPage(){
    const [name, setName] = useState()
    const [age, setAge]= useState()
    const [school, setSchool] = useState()

    function onChangeName(event){
        setName(event.target.value)
    }
    function onChangeAge(event){
        setAge(event.target.value)
    }
    function onChangeSchool(event){
        setSchool(event.target.value)
    }

    const [등록하기]=useMutation(
        gql`
            mutation zzzzzzzzzzz($aaa: String, $bbb: Int, $ccc:String){       
                createProfile(name:$aaa , age:$bbb, school:$ccc){               
                    message
                }
            }
        `
    )
            // //zzzzzzz저부분은 임시로  저장한겨
            // 실제로 중요한 부분



    function onClickSubmit(){
        console.log(name)
        console.log(age)
        console.log(school)
        등록하기({
            variables :{
                aaa:name,
                bbb:Number(age),
                ccc:school
            }
        })
    }

    return (
        <>
            <div></div>
            이름: <input type="text" onChange={onChangeName} />
            나이: <input type="text" onChange={onChangeAge} />
            학교: <input type="text" onChange={onChangeSchool} />
            <button onClick={onClickSubmit}>데이터 입력하기</button>
        </>
    )
    
}