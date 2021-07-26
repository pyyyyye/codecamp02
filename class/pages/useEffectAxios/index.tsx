import { useEffect, useState } from 'react';
import axios from 'axios';
export default function UseEffectAxiosPage() {
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    const getImg = async () => {
      const aaa = await axios.get('https://dog.ceo/api/breeds/image/random');
      setImgUrl(aaa.data.message);
    };
    getImg();
  }, []);

  async function onClickChange() {
    const ccc = await axios.get('https://dog.ceo/api/breeds/image/random');
    setImgUrl(ccc.data.message);

    console.log('바뀐거');
  }

  return (
    <>
      <img src={imgUrl} />;<button onClick={onClickChange}>오픈API버튼</button>
    </>
  );
}
