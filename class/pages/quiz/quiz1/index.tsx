import { Rate, DatePicker } from 'antd';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player';
import { useState } from 'react';

const Youtube = styled(ReactPlayer)`
  border: 5px solid navy;
`;
const Wrapper = styled.div`
  border: 1px dotted navy;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: navy;
  margin: 0 auto;
`;
const desc = ['1점', '2점', '3점', '4점', '5점'];

export default function QuizPage() {
  const [stars, setStars] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [star, setStar] = useState(0);

  // @ts-ignore
  function onChange(date, dateString) {
    if (date) {
      setMonth(new Date(date._d).getMonth() + 1);
      setDate(dateString);
    }
  }
  function onChangeStar(value) {
    setStars(value + '점');
    alert(value + '점');
  }
  function onClickStar(star) {
    console.log(star);
    setStar(star);
  }

  const arr = [1, 2, '안녕', 4, 5, 6, 7, 8, 9, 10];

  return (
    <Wrapper>
      퀴즈 숙제
      <hr />
      {/* // !----------------------------- 별점 ---// */}
      <Rate tooltips={desc} onChange={onChangeStar} />
      <div>{stars}</div>
      <hr />
      {/* // !------------------------ 달력 날짜선택 -// */}
      <DatePicker onChange={onChange} />
      <div>{date}</div>
      <div>{month}</div>
      <div></div>
      <hr />
      {/* // !----------------------------- 유튜브 ---// */}
      <Youtube
        url="https://youtu.be/reLhTpKTuPo"
        width="800px"
        height="600px"
        playing={true}
        muted={true}
      />
      <hr />
      {/* // !----------------------------- 유튜브 ---// */}
      {arr.map((_, idx) => {
        // --------------문자열도 껴있는 경우
        return (
          <>
            <img
              src={
                star >= idx + 1
                  ? '/homework/rate_t.png'
                  : '/homework/rate_f.png'
              }
              onClick={() => onClickStar(idx + 1)}
            />
          </>
        );
      })}
      {/* {arr.map((aaa) => {  /----------숫자만 있는 경우
        return (
          <>
            <img
              src={
                star >= aaa ? '/homework/rate_t.png' : '/homework/rate_f.png'
              }
              onClick={() => onClickStar(aaa)}
            />
          </>
        );
      })} */}
      <hr />
    </Wrapper>
  );
}
