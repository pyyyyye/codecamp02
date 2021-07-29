import { useState, useEffect, useRef } from 'react';

export default function ImgPreLoadPage() {
  const [image, setImage] = useState('');
  const divRef = useRef<HTMLInputElement>(null);
  //   const [on, setOn] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = 'https://codebootcamp.co.kr/images/main/homeImage1.webp';
    img.onload = () => {
      setImage(img);
      // img는 태그임  ==> <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp" />
    };
  }, []);

  function onChlickButton() {
    // setOn(true);
    divRef.current?.appendChild(image);
  }
  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onChlickButton}>이미지 보여주기</button>
    </>
  );
}
