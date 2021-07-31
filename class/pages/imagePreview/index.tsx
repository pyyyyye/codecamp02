import { ChangeEvent, useState } from 'react';
import { gql, useMutation } from '@apollo/client';

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

export default function ImagePreviewPage() {
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [imageUrl1, setImageUrl1] = useState();
  const [imageUrl2, setImageUrl2] = useState();
  const [imageUrl3, setImageUrl3] = useState();
  const [files, setFile] = useState([]);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file?.size) {
      alert('파일이 없습니다');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('파일이 너무 큽니다.(제한: 5MB)');
      return;
    }
    if (!file.type.includes('png') && !file.type.includes('jpeg')) {
      alert('잘못된 파일입니다.');
      return;
    }

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file); // 내 컴퓨터에만 작동. 서버 올리면 안돼. 임시 url이야
    fileReader.onload = (data) => {
      if (event.target.id === '1') {
        setImageUrl1(data.target.result); // 결과물 = 임시주소
        setFile(file);
      }
      if (event.target.id === '2') {
        setImageUrl2(data.target.result); // 결과물 = 임시주소
        setFile(file);
      }
      if (event.target.id === '3') {
        setImageUrl3(data.target.result); // 결과물 = 임시주소
        setFile(file);
      }

      // 다 읽고나면 이 부분 실행. data = load 결과물
      //   setFile(files);
    };
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
      //   const start = performance.now();
      const resultFiles = await Promise.all([
        uploadFile({ variables: { aaa: files } }),
        uploadFile({ variables: { aaa: files } }),
        uploadFile({ variables: { aaa: files } }),
      ]);

      //   const resultFile1 = await uploadFile({
      //     variables: {
      //       aaa: file, // file state를 의미함.  - 자기를 감싸고 있는 가장 가까이 있는 {중괄호}에게 있는 file찾아가는거니까 .- 없으면 위로 올라가
      //     },
      //   });
      //   const image1 = resultFile1.data.uploadFile.url;
      //   const end = performance.now();
      //   console.log(end - start);

      //   const image1 = resultFiles[0].data.uploadFile.url;
      //   const image2 = resultFiles[1].data.uploadFile.url;
      //   const image3 = resultFiles[2].data.uploadFile.url;

      const images = resultFiles.map((data) => data.data.uploadFile.url); // 하나씩꺼내서 url만 datadㅔ   = ['1번 url', '2번 url', '2번 url']

      const result = await createBoard({
        variables: {
          bbb: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
            // images: [image1, image2, image3], // [const image의 url이 들어가는 부분 (75번줄)]
            images: images,
          },
        },
      });
      console.log(result.data.createBoard._id);
      alert('게시물이 등록되었습니다.');
    } catch (error) {
      alert(error.message);
    }
  }

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
      {/* ----------- 이하 이미지 첨부 버튼 3개 --------- */}
      <img src={imageUrl1} />
      <input type="file" id="1" onChange={onChangeFile} />
      <img src={imageUrl2} />
      <input type="file" id="2" onChange={onChangeFile} />
      <img src={imageUrl3} />
      <input type="file" id="3" onChange={onChangeFile} />
    </>
  );
}
