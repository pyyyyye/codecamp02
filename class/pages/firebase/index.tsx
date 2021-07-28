import { ChangeEvent, useState } from 'react';
import firebase from 'firebase';

export default function FirebasePage() {
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }
  function onClickSubmit() {
    // -- 등록하기
    firebase.firestore().collection('blog').add({
      // collection( sql은 미리 어떤 column들어갈지 만들어놨었는데 이거는 여기서 그냥 추가하면 추가됨.)
      writer: writer,
      title: title,
      contents: contents,
    });
  }
  async function onClickFetch() {
    // -- 불러오기
    const result = await firebase.firestore().collection('blog').get();
    result.forEach((doc) => console.log(doc.data())); // firebase에서 이렇게 쓰라고 정함.
  }

  return (
    <>
      작성자: <input onChange={onChangeWriter} />
      제목: <input onChange={onChangeTitle} />
      내용: <input onChange={onChangeContents} />
      <button onClick={onClickSubmit}> 등록하기 </button>
      <button onClick={onClickFetch}> 불러오기 </button>
    </>
  );
}
