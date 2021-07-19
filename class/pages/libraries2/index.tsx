import { DatePicker, Rate } from 'antd';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';

const Youtube = styled(ReactPlayer)`
  border: 10px solid red;
`;

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export default function Libraries2Page() {
  function onChangeStar(value) {
    // state에 넣어 사용해봐
    console.log(value);
  }

  return (
    <div>
      <DatePicker />
      <Rate tooltips={desc} onChange={onChangeStar} />

      <Youtube
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="300px"
        height="200px" // 얘만 여러개 겹쳐있음 styled말고 여기서 길이 값줘
        playing={true} // 페이지 열면 자동 재생
        muted={true} // 소리 mute된 채 재생
      />
    </div>
  );
}
