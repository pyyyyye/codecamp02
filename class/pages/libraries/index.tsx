import { YoutubeOutlined, SkypeOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

const Youtube = styled(YoutubeOutlined)`
  color: red;
  width: 100px;
  height: 100px;
  font-size: 50px;
`;
const Skype = styled(SkypeOutlined)`
  color: skyblue;
  font-size: 50px;
`;
const Skype2 = styled(SkypeOutlined)`
  color: skyblue;
  width: 300px;
  height: 300px;
`;

export default function LibrariesPage() {
  //   function onClickIcon(event) {
  //     console.log(event.target);
  //     console.log(event.target.id);
  //   }

  return (
    <div>
      라이브러리 페이지
      <Youtube id="1234" />
      Skype <Skype />
      Skype2 <Skype2 />
    </div>
  );
}
