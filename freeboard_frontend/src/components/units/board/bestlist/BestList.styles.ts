import styled from '@emotion/styled';

export const BestListWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 300px;
`;

//!▶▶▶▶▶  BestListTop Start  ◀◀◀◀◀!//
export const BestListTop = styled.div`
  width: 100%;
`;
export const BestPostsTitle = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
`;
export const BestPostsBox = styled.div`
  //----------------------------------상단 타이틀 '베스트게시글'
  width: 100%;
  height: 270px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
export const BestPosts = styled.div`
  //----------------------------------게시글 상자
  width: 282px;
  height: 257px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 0px;
  cursor: pointer;
`;
export const BestPostsPhoto = styled.img``;
export const TitleInBestPosts = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  margin: 19px;
  color: #000;
`;
export const BestPostsInfo = styled.div`
  width: 100%;
  display: flex;
  padding-left: 25px;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const PostsInfo_Left = styled.div`
  width: 100px;
  height: 58px;
  display: flex;
  flex-direction: column;
  margin-bottom: 9px;
`;
export const WriterInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const WriterPhoto = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 6px;
`;
export const WriterName = styled.h5`
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  margin: 0;
`;
export const PostDate = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #828282;
`;

export const PostsInfo_Right = styled.div`
  width: 30px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 9px;
  align-items: center;
`;
export const RecomImage = styled.img`
  width: 20px;
  height: 20px;
`;
export const RecomCount = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`;

//!▶▶▶▶▶ BestListBottom Start  ◀◀◀◀◀!//
export const BestListBottom = styled.div`
  width: 100%;
  margin-top: 75px;
`;
export const BestListBottomSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const SearchBox = styled.div`
  width: 776px;
  height: 52px;
  border-radius: 10px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: left;
  padding: 18px;
  cursor: pointer;
`;
export const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 1px;
  margin-right: 12px;
`;
export const SearchText = styled.div`
  /* line-height: 50px; */
  font-size: 16px;
  line-height: 18px;
`;

export const SearchDateBox = styled.div`
  width: 244px;
  height: 52px;
  border: 1px solid lightgray;
  color: lightgray;
  line-height: 52px;
  font-weight: 16px;
  text-align: center;
  cursor: pointer;
`;
export const SearchButtonBox = styled.button`
  width: 94px;
  height: 52px;
  background-color: black;
  border-radius: 10px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  border: 0px;
  cursor: pointer;
`;

//!▶▶▶▶▶  List Start  ◀◀◀◀◀!//
export const PostListsBox = styled.div`
  width: 100%;
  margin-top: 40px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
export const Categorize = styled.div`
  height: 52px;
  line-height: 54px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
`;
export const CategorizeTop = styled.div`
  width: 150px;
  font-weight: 600;
  text-align: center;
`;
export const CategorizeTopTitle = styled.div`
  width: 750px;
  font-weight: 600;
  text-align: center;
`;

export const CategorizeBottom = styled.div`
  background-color: lemonchiffon;
`;

//! ▶▶▶▶▶  ListFooter Start  ◀◀◀◀◀!//
export const ListFooter = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 40px;
`;
export const UploadButton = styled.button`
  width: 171px;
  height: 52px;
  border: 1px solid lightgray;
  background-color: #fff;
  float: right;
  border-radius: 10px;
  font-size: 16px;
  margin-top: -22px;
  cursor: pointer;
`;
