//게시물 업로드 화면 presenter
import {Wrapper, Title, Contents, SubTitle, MyInput, LongInput, Categorize, InputBox, TopBox, ContBox, ContInput, AddressBox, AddressNumInput, AddressButton, AddressInput, PhotoBox, UploadBox, SmallBox, RadioButton, RadioBox, ButtonBox, Button1, LoadButton, ErrorM} from './BoardNew.styles';

export default function NewPageUI(props){
    return( 
        <Wrapper>
          <Title>게시판 등록 화면입니다.</Title>
          <Contents>
            <SubTitle>게시물 등록</SubTitle>
    
            <MyInput>
              <TopBox>
                <Categorize>아이디</Categorize>
                <InputBox type="text"
                  onChange={props.onChangeId}
                  placeholder="아이디를 입력해주세요." />
                <ErrorM>{props.idError}</ErrorM>
              </TopBox>
              <TopBox>
                <Categorize>비밀번호</Categorize>
                <InputBox type="password"
                  onChange={props.onChangePassword} 
                  placeholder="비밀번호를 입력해주세요." />
                <ErrorM>{props.PwError}</ErrorM>
              </TopBox>
            </MyInput>
    
            <LongInput>
              <Categorize>제목</Categorize>
              <InputBox type="text"
                onChange={props.onChangeTitle}
                placeholder="제목을 작성해주세요."/> 
              <ErrorM>{props.TitleError}</ErrorM>
            </LongInput> 
    
            <ContBox>
              <Categorize>내용</Categorize>
              <ContInput type="text"
                onChange={props.onChangeContents}
                placeholder="내용을 작성해주세요."/>
              <ErrorM>{props.ContentsError}</ErrorM>
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
  
                {/* -----!! 파일 업로드 소스 !!----- */}
                
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
            <ButtonBox //---props 부분
              onClick={props.onClickSubmit}
              active={props.active}>
              등록하기
            </ButtonBox>
            
          </Contents>
      </Wrapper>
      )
}