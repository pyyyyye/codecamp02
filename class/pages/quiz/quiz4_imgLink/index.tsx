import styled from '@emotion/styled';
import { ChangeEvent, useRef, useState } from 'react';
import { FileImageOutlined } from '@ant-design/icons';
import { gql, useMutation } from '@apollo/client';

// ------------------- styled --------------------
const TopInputBox = styled.div`
  border: 1px solid red;
  margin-bottom: 30px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

// ------------------- query --------------------
const CREATE_BOARD = gql`
  mutation createBoard($createBoard: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoard) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($uploadFile: Upload!) {
    uploadFile(file: $uploadFile) {
      url
    }
  }
`;

// ------------------- container --------------------
export default function Quiz4() {
  const InputIn = {
    writer: '',
    password: '',
    title: '',
    contents: '',
  };
  const [inputs, setInputs] = useState(InputIn);
  const [imgUrl, setImgUrl] = useState('');
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const PyeRef = useRef<HTMLInputElement>(null);

  async function onChangeFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file?.size) {
      alert('파일을 첨부해주세요.');
      return;
    }
    if (file?.size > 5 * 1024 * 1024) {
      alert('파일 사이즈가 너무 큽니다.');
      return;
    }
    if (!file.type.includes('png') && !file.type.includes('jpeg')) {
      alert('png랑 jpeg만 되거든요.');
      return;
    }
    try {
      const result = await uploadFile({
        variables: {
          uploadFile: file,
        },
      });
      console.log(result.data.uploadFile.url);
      setImgUrl(result.data.uploadFile.url);
    } catch (error) {
      alert(error.message);
    }
  }
  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const newInputs = {
      ...inputs,
      [e.target.name]: e.target.value,
    };
    setInputs(newInputs);

    console.log(e.target.name);
  }
  function onClickButton() {
    PyeRef.current?.click();
  }
  async function onClickSubmit() {
    try {
      const result = await createBoard({
        variables: {
          createBoard: {
            ...inputs,
            images: [imgUrl],
          },
        },
      });
      console.log(result.data.createBoard._id);
      alert('게시물이 등록되었습니다.');
    } catch (error) {
      alert(error.message);
    }
  }

  // ------------------- presenter --------------------
  return (
    <>
      <TopInputBox>
        <input
          type="text"
          onChange={onChangeInput}
          name="writer"
          placeholder="작성자"
        />
        <br />
        <input
          type="text"
          onChange={onChangeInput}
          name="password"
          placeholder="비번"
        />
        <br />
        <input
          type="text"
          onChange={onChangeInput}
          name="title"
          placeholder="제목"
        />
        <br />
        <input
          type="text"
          onChange={onChangeInput}
          name="contents"
          placeholder="내용"
        />
        <br />
        <button onClick={onClickSubmit}>게시물 등록</button>
      </TopInputBox>
      <ButtonBox>
        <FileImageOutlined
          onClick={onClickButton}
          style={{ fontSize: '80px', color: 'orange', cursor: 'pointer' }}
        />
        <FileImageOutlined
          onClick={onClickButton}
          style={{ fontSize: '80px', color: 'lightgrey', cursor: 'pointer' }}
        />
        <FileImageOutlined
          onClick={onClickButton}
          style={{ fontSize: '80px', color: 'skyblue', cursor: 'pointer' }}
        />
      </ButtonBox>
      <img
        src={`https://storage.googleapis.com/${imgUrl}`}
        alt="불러온 이미지"
      />
      <input type="file" onChange={onChangeFile} ref={PyeRef} />
    </>
  );
}
