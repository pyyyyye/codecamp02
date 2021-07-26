//=== 게시물 상세페이지 style.js ===
import styled from '@emotion/styled';
import ReactPlayer from 'react-player';
// =styled.component

export const Wrapper = styled.div`
  width: 100%;
`;

export const PostContents = styled.div`
  max-width: 1200px;
  width: 100%;
  /* height: 1602px; */
  padding: 20px 100px 0px 100px;
  margin: 0 auto;
  box-shadow: 0px 0px 6px gray;
  margin-top: 100px;
  margin-bottom: 80px;
`;

//------ TopContentsWriter Start -------
export const TopContentsWriter = styled.div`
  width: 996px;
  margin-top: 80px;
  padding-bottom: 24px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
`;
export const WriterProfileImg = styled.div`
  width: 48px;
  height: 48px;
  background-image: url('/WriterProfileImg.png');
`;
export const WriterInfo = styled.div`
  width: 880px;
  height: 52px;
  margin-left: 16px;
`;
export const Name = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 25px;
  /* border: 1px solid black; */
  margin: 0;
`;
export const Date = styled.p`
  color: #828282;
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  margin: 0;
`;
export const WriterIcon = styled.div`
  //우측 픽토그램
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LinkIcon = styled.img`
  width: 27px;
  height: 14px;
`;
export const MapIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
//------ MiddleContentsPost Start -------
export const MiddleContentsPost = styled.div`
  width: 100%;
  margin-top: 80px;
`;
export const ContentsTitle = styled.h1`
  font-size: normal;
  margin-top: 0px;
  margin-bottom: 40px;
`;
export const ContentsImage = styled.img`
  width: 100%;
  height: 480px;
  background-color: skyblue;
`;
export const ContentsText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
  margin: 40px 0px 120px 0px;
`;
export const ContentsVideo = styled(ReactPlayer)`
  width: 486px;
  height: 290px;
  /* background-image: url(/video.png); */
  background-repeat: no-repeat;
  margin: 0 auto;

  filter: drop-shadow(0 5px 20px rgba(0, 0, 0, 0.2));
`;

//--- BottomContentsRecommend Start ----
export const BottomContentsRecommend = styled.div`
  width: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 163px;
  padding-bottom: 80px;
`;
export const Recommendations = styled.div`
  width: 40px;
  height: 51px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const RecomImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 auto;
`;
export const RecomCount = styled.p`
  font-size: 18px;
  line-height: 26.64px;
  font-weight: 400;
  margin: 0 auto;
  color: #ffd600;
`;
export const DecomImage = styled.img`
  width: 22px;
  height: 22px;
  margin: 0 auto;
`;
export const DecomCount = styled.p`
  font-size: 18px;
  line-height: 26.64px;
  font-weight: 400;
  margin: 0 auto;
  color: black;
`;

//--- EtcContents Start ----
// export const EtcContents = styled.div`
//   width: 380px;
//   height:
//   margin: 0 auto;
//   background-color: orange;
//   margin-bottom: 87px;
//   border-bottom: 1px solid #bdbdbd;
// `;
//-- BottomButtons
export const BottomButtons = styled.div`
  width: 586px;
  height: 45px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 87px;
`;
export const GoToButton = styled.div`
  width: 179px;
  height: 45px;
  border: 1px solid lightgray;
  text-align: center;
  line-height: 45px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;
