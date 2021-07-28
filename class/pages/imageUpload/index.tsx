import { ChangeEvent, useRef, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
// ---------------- query -------------
const UPLOAD_FILE = gql`
  mutation uploadFile($aaa: Upload!) {
    uploadFile(file: $aaa) {
      url
    }
  }
`;
const CREATE_BOARD = gql`
  mutation creatBoard($bbb: CreateBoardInput!) {
    createBoard(createBoardInput: $bbb) {
      _id
    }
  }
`;
// ---------------- container -------------
export default function ImageUpload() {
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const fileRef = useRef<HTMLInputElement>(null);

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file?.size) {
      alert('파일이 없습니다.');
      return;
    }
    if (file?.size > 5 * 1024 * 1024) {
      // B * KB * MB
      alert('파일 사이즈가 너무 큽니다.(제한 5MB');
      return;
    }
    if (!file.type.includes('png') && !file.type.includes('jpeg')) {
      alert('png 또는 jpeg파일만 전송가능합니다.');
      return;
    }
    try {
      const result = await uploadFile({
        variables: {
          aaa: file,
        },
      });
      console.log(result.data.uploadFile.url);
      setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickBlueBox() {
    fileRef.current?.click();
  }

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }
  async function onClickSubmit() {
    try {
      const result = await createBoard({
        variables: {
          bbb: {
            writer: writer, // state한 것 데려옴. (w,p,t,c)
            password: password,
            title: title,
            contents: contents,
            images: [imageUrl], // 타입이 [배열]안에 입력이니까 하나를 입력해도 배열안에 담아줘.
          },
        },
      });
      console.log(result.data.createBoard._id);
      alert('게시물이 등록되었습니다.');
    } catch (error) {
      alert(error.message);
    }
  }
  // ---------------- presenter -------------
  return (
    <>
      <button onClick={onClickSubmit}>게시물 등록하기</button>
      <br />
      <input type="text" onChange={onChangeWriter} />
      <br />
      <input type="text" onChange={onChangePassword} />
      <br />
      <input type="text" onChange={onChangeTitle} />
      <br />
      <input type="text" onChange={onChangeContents} />
      <br />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      {/* 이미지의 실제 주소가 되는부분(데이터부분) */}
      {/* 실제로 이렇게 사진 올리는 경우 거의 없는데 기본이라 배우는 것. */}
      <div
        style={{
          width: '200px',
          height: '80px',
          backgroundColor: '#0067A3',
          textAlign: 'center',
          lineHeight: '80px',
          color: 'white',
        }}
        onClick={onClickBlueBox}
      >
        업로드 버튼
      </div>
      <input // ref와 연결시켜서 input태그는 div안에 숨긴다.
        ref={fileRef}
        type="file"
        onChange={onChangeFile}
        /* multiple */ style={{ display: 'none' }}
      />
    </>
  );
}
