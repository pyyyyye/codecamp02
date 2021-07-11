// 게시물 등록 화면 

import { useState } from 'react'
import {useMutation, gql} from '@apollo/client'
import { useRouter } from 'next/router'
import {Wrapper, Title, Contents, SubTitle, MyInput, LongInput, Categorize, InputBox, TopBox, ContBox, ContInput, AddressBox, AddressNumInput, AddressButton, AddressInput, PhotoBox, UploadBox, SmallBox, RadioButton, RadioBox, ButtonBox, Button1, LoadButton, ErrorM} from '../../../styles/homework.styles'

const CREATE_BOARD =  gql`
    mutation createBoard( $createBoardInput: CreateBoardInput! ){ 
      createBoard( createBoardInput:$createBoardInput ){
        _id  
      }
    }
  `
    //저 _id들어간 자리에 최소 1가지 이상의 요소가 들어가야 함. 여러개 들어가도 상관x

export default function NewPage(){
  const router = useRouter()
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')
  const [idError, setIdError] = useState('')
  const [PwError, setPwError] = useState('')
  const [TitleError, setTitleError] = useState('')
  const [ContentsError, setContentsError] = useState('')

  function onChangeId(event){ setId(event.target.value) }
  function onChangePassword(event){ setPw(event.target.value) }
  function onChangeTitle(event){ setTitle(event.target.value) }
  function onChangeContents(event){ setContents(event.target.value) }


  const [createBoardMutation] = useMutation(CREATE_BOARD)

  // async function onClickSubmit(){
    // try{
    //   const result = await createBoardMutation({
    //     variables:{ 
    //       createBoard:{
    //         writer:id,
    //         password:pw,
    //         title:title,
    //         contents:contents
    //       }}
    // })
    // console.log("성공")
    // // alert(result.data.createBoard._id)
    // // alert(result.data.createBoard._id)
    // router.push(`/detail/${result.data.createBoard._id}`)
    // }
    //  catch(error){
    //   alert(error) }
  


   //--------------- LastButton End ---------------//
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
      //   return //return 안쓰면 setPwError 에러창도 이어서 뜸
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
    // alert(result.data.createBoard._id)
    router.push(`/board/detail/${result.data.createBoard._id}`)
    }
     catch(error){
      alert(error)}
  }  



  return( 
    <Wrapper>
      <Title>게시판 등록 화면입니다.</Title>
      <Contents>
        <SubTitle>게시물 등록</SubTitle>

        <MyInput>
          <TopBox>
            <Categorize>아이디</Categorize>
            <InputBox type="text" onChange={onChangeId} placeholder="아이디를 입력해주세요." />
            <ErrorM>{idError}</ErrorM>
          </TopBox>
          <TopBox>
            <Categorize>비밀번호</Categorize>
            <InputBox type="password" onChange={onChangePassword} placeholder="비밀번호를 입력해주세요." />
            <ErrorM>{PwError}</ErrorM>
          </TopBox>
        </MyInput>


        <LongInput>
          <Categorize>제목</Categorize>
          <InputBox type="text" onChange={onChangeTitle} placeholder="제목을 작성해주세요."/> 
          <ErrorM>{TitleError}</ErrorM>
        </LongInput> 


        <ContBox>
          <Categorize>내용</Categorize>
          <ContInput type="text" onChange={onChangeContents}placeholder="내용을 작성해주세요."/>
          <ErrorM>{ContentsError}</ErrorM>
        </ContBox> 


        <AddressBox>
          <Categorize>주소</Categorize>
          <AddressNumInput placeholder="06392" />
          <AddressButton onclick="">우편번호 검색</AddressButton>
          <AddressInput placeholder="시, 군, 구" />
          <AddressInput placeholder="상세주소를 입력하세요." />
        </AddressBox>

        
        <LongInput>
          <Categorize>유튜브</Categorize>
          <InputBox placeholder="링크를 복사해주세요."/>
        </LongInput> 


        <PhotoBox>
          <Categorize>사진 첨부</Categorize>
          <UploadBox> 


            {/* 파일 업로드 소스 !! */}
            
            <SmallBox className="input-file-button" for="input-file">+ <br/>Upload</SmallBox>
            <LoadButton type="file" id="input-file" />
            <SmallBox className="input-file-button" for="input-file">+ <br/>Upload</SmallBox>
            <LoadButton type="file" id="input-file" />
            <SmallBox className="input-file-button" for="input-file">+ <br/>Upload</SmallBox>
            <LoadButton type="file" id="input-file" />
            
          </UploadBox>
        </PhotoBox>


        <RadioBox>
          <Categorize>메인 설정</Categorize>
          <RadioButton>
            <Button1 type="radio" name="set" value="유튜브" checked/><span>유튜브</span>
            <Button1 type="radio" name="set" value="사진" /><span>사진</span>
          
          </RadioButton>
        </RadioBox> 

        <ButtonBox onClick={onClickSubmit}>등록하기</ButtonBox>
        



      </Contents>
    </Wrapper>
  )
}