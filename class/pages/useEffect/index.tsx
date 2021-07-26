import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

export default function UseEffectPage() {
  const [count, setCount] = useState(1);
  console.log('시작합니다.');
  //   기본형)
  //   useEffect(() => {
  //       적용할 기능
  //   }, [ 의존성 배열 ])

  //   useEffect(() => {
  //     console.log('그려진 뒤 입니다.');
  //     console.log('업데이트 완료!'); // console로 찍어뒀기에 console안에서 무한루프 됨.
  //   }, [count]); // count 변경되면 useEffect 실행됨

  //   주의사항 1
  //   useEffect(() => {
  //     setCount(50); // 렌더링이 한번 더 발생한다는게 무슨 말이지?  //숫자 저 숫자부터 시작한다고.
  //   }, []);

  // 주의사항2
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, []);                          // [count]하면 무한루프-메모참고

  console.log('그리기 직전!!');

  function onClickCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>컴포넌트입니다.</div>
      <div>카운트 : {count} </div>
      <button onClick={onClickCount}>카운트 + 1</button>
    </>
  );
}
