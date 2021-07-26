import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';

export default function LiftcycleFunctionPage() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  // Ref 태그와 연결하는 것. input말고 다른 태그들도 연결가능함.
  useEffect(() => {
    // class형 = conponentDidMount
    // 화면이 그려진 뒤 나타나는 화면
    console.log('마운트 완료!');
    inputRef.current?.focus();

    return () => {
      alert('잘가요~');
    };
  }, []);

  useEffect(() => {
    // = conponentDidUpdate
    console.log('컴포넌트 변경됨!');
  });

  const onClickCount = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push('/'); // 나가기 = 현재 컴포넌트 사라짐
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <div>카운트:{count}</div>
      <button onClick={onClickCount}>카운트 + 1</button>
      <div>함수형 컴포넌트 입니다.</div>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
