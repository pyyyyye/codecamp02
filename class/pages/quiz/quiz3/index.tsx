import styled from '@emotion/styled';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: blue;
  margin: 30px;
  border: 1px solid blue;
`;
const Button1 = styled.button`
  background-color: lightblue;
  width: 80px;
  height: 40px;
  margin: 20px;
  border: none;
  cursor: pointer;
`;
const Button2 = styled.button`
  background-color: lightgreen;
  width: 80px;
  height: 40px;
  margin: 20px;
  border: none;
  cursor: pointer;
`;
export default function Quiz3() {
  const router = useRouter();
  const [isChange, setIsChange] = useState(false); // isChange = false
  // const [aaa, setAaa] = useState(false);         // aaa = false
  const refInput = useRef<HTMLInputElement>(null);

  // const [state, setState] = useState({     // state = {
  //   isChange: false,                       //      isChangae: false,
  //   aaa:false                              //      aaa: false
  // })                                       // }

  // setState({
  //   ...state,
  //   isChange: true
  // })

  useEffect(() => {
    console.log('이동 Bye!! 확인 콘솔');
    refInput.current?.focus();
    return () => {
      alert('Bye!!');
    };
  }, []);
  // [의존성배열]이 없으면 뭐 하나만 바뀌어도 useEffect가 다시 실행된다.

  useEffect(() => {
    if (isChange === true) {
      alert('Changed!!');
    }

    console.log('그냥,,그냥 콘솔');
  }, [isChange]);

  const onClickMove = () => {
    router.push('/'); // 이동버튼 클릭 시 페이지 나가기.
  };

  function onClickIsChange() {
    setIsChange(true);
    console.log('true');
  }
  console.log('경고 경고 ! Rendered!');

  return (
    <>
      <Title>7월 26일 퀴즈 페이지 입니다.</Title>
      <h5>1번</h5>
      <br />
      <div>변경확인</div>
      <Button1 onClick={onClickIsChange}>변경</Button1>
      <Button2 onClick={onClickMove}>이동</Button2>
      <hr />
      <br />
      <h5>1-2번</h5>
      <input type="text" ref={refInput} />
      <br />
      <br />
      <hr />
      <br />
      <h5>1-3번</h5>
    </>
  );
}
