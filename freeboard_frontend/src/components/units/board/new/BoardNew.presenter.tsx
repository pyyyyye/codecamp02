//게시물 업로드 화면 presenter
import {
  Wrapper,
  Title,
  Contents,
  MyInput,
  LongInput,
  Categorize,
  InputBox,
  TopBox,
  ContBox,
  ContInput,
  AddressBox,
  AddressNumInput,
  AddressButton,
  AddressInput,
  PhotoBox,
  UploadBox,
  SmallBox,
  RadioButton,
  RadioBox,
  ButtonBox,
  Button1,
  LoadButton,
  ErrorM,
} from './BoardNew.styles';
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';

interface NewPageUIProps {
  isEdit: boolean;
  isOpen: boolean;
  active: boolean;
  inputsErrors: String;
  address: string;
  zoneCode: string;
  onChangeInputs: (event: any) => void;
  onClickSubmit: () => void;
  onClickOpenModal: () => void;
  onComplete: () => void;
}

export default function NewPageUI(props: NewPageUIProps) {
  return (
    <Wrapper>
      <Contents>
        <Title>{props.isEdit ? '게시판 수정' : '게시판 등록'}</Title>

        <MyInput>
          <TopBox>
            <Categorize>아이디</Categorize>
            <InputBox
              type="text"
              name="writer"
              onChange={props.onChangeInputs}
              placeholder="아이디를 입력해주세요."
            />
            <ErrorM>{props.inputsErrors.writer}</ErrorM>
          </TopBox>
          <TopBox>
            <Categorize>비밀번호</Categorize>
            <InputBox
              type="password"
              name="password"
              onChange={props.onChangeInputs}
              placeholder="비밀번호를 입력해주세요."
            />
            <ErrorM>{props.inputsErrors.password}</ErrorM>
          </TopBox>
        </MyInput>

        <LongInput>
          <Categorize>제목</Categorize>
          <InputBox
            type="text"
            name="title"
            onChange={props.onChangeInputs}
            placeholder="제목을 작성해주세요."
          />
          <ErrorM>{props.inputsErrors.title}</ErrorM>
        </LongInput>

        <ContBox>
          <Categorize>내용</Categorize>
          <ContInput
            type="text"
            name="contents"
            onChange={props.onChangeInputs}
            placeholder="내용을 작성해주세요."
          />
          <ErrorM>{props.inputsErrors.contents}</ErrorM>
        </ContBox>

        <AddressBox>
          <Categorize>주소</Categorize>
          {props.isOpen && (
            <Modal title="주소 검색하기" visible={true}>
              <DaumPostcode onComplete={props.onComplete} autoClose animation />
            </Modal>
          )}
          <AddressNumInput placeholder="우편번호" value={props.zipcode} />
          <AddressButton onClick={props.onClickOpenModal}>
            주소 검색
          </AddressButton>
          <AddressInput value={props.address} />
          <AddressInput
            onChange={props.onChangeAddressDetail}
            placeholder="상세주소를 입력하세요"
          />
        </AddressBox>

        <LongInput>
          <Categorize>유튜브</Categorize>
          <InputBox
            name="youtubeUrl"
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeInputs}
          />
        </LongInput>

        <PhotoBox>
          <Categorize>사진 첨부</Categorize>
          <UploadBox>
            {/* -----!! 파일 업로드 소스 !!----- */}

            <SmallBox className="input-file-button" for="input-file">
              + <br />
              Upload
            </SmallBox>
            <LoadButton type="file" id="input-file" />
            <SmallBox className="input-file-button" for="input-file">
              + <br />
              Upload
            </SmallBox>
            <LoadButton type="file" id="input-file" />
            <SmallBox className="input-file-button" for="input-file">
              + <br />
              Upload
            </SmallBox>
            <LoadButton type="file" id="input-file" />
          </UploadBox>
        </PhotoBox>

        <RadioBox>
          <Categorize>메인 설정</Categorize>
          <RadioButton>
            <Button1 type="radio" name="set" value="유튜브" checked />
            <span>유튜브</span>
            <Button1 type="radio" name="set" value="사진" />
            <span>사진</span>
          </RadioButton>
        </RadioBox>
        <ButtonBox //---props 부분
          onClick={props.onClickSubmit}
          active={props.active}
        >
          {props.isEdit ? '게시판 수정' : '게시판 등록'}
        </ButtonBox>
      </Contents>
    </Wrapper>
  );
}
