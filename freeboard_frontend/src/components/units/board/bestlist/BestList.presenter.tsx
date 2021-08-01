//베스트 게시글 화면 presenter.js
import Pagination01 from '../../../commons/pagination/01/pagination01.container';
import {
  BestListWrapper,
  BestListTop,
  BestPostsTitle,
  BestPostsBox,
  BestPosts,
  BestPostsPhoto,
  TitleInBestPosts,
  BestPostsInfo,
  PostsInfo_Left,
  WriterInfo,
  WriterPhoto,
  WriterName,
  PostDate,
  PostsInfo_Right,
  RecomImage,
  RecomCount,
  BestListBottom,
  BestListBottomSearch,
  SearchBox,
  SearchDateBox,
  SearchButtonBox,
  SearchIcon,
  SearchText,
  PostListsBox,
  Categorize,
  CategorizeTop,
  CategorizeTopTitle,
  ListFooter,
  UploadButton,
} from './BestList.styles';
import { getDate } from '../../../../commons/libraries/utils';

export default function ListPageUI({ onClickTitle, onClickUpload, data }) {
  return (
    <>
      <BestListWrapper>
        <BestListTop>
          <BestPostsTitle>베스트 게시글</BestPostsTitle>
          {/* //!▶▶▶▶▶▶  BestListTop  Start ◀◀◀◀◀!// */}
          <BestPostsBox>
            {new Array(4).fill(1).map(() => (
              <BestPosts>
                <BestPostsPhoto
                  src="/BestPostsPhoto_01.png"
                  alt="베스트게시글 대표사진_01"
                />
                <TitleInBestPosts>게시물 제목입니다.</TitleInBestPosts>
                <BestPostsInfo>
                  <PostsInfo_Left>
                    <WriterInfo>
                      <WriterPhoto
                        src="/WriterProfileImg.png"
                        alt="작가 프로필사진 "
                      />
                      <WriterName>호두</WriterName>
                    </WriterInfo>
                    <PostDate>Date : 2020.02.18</PostDate>
                  </PostsInfo_Left>
                  <PostsInfo_Right>
                    <RecomImage src="/recom.png" alt="추천 아이콘" />
                    <RecomCount>296</RecomCount>
                  </PostsInfo_Right>
                </BestPostsInfo>
              </BestPosts>
            ))}
          </BestPostsBox>
        </BestListTop>
        {/* //!▶▶▶▶▶▶  Search Start  ◀◀◀◀◀!// */}
        <BestListBottom>
          <BestListBottomSearch>
            <SearchBox>
              <SearchIcon src="/icon_search.png" alt="검색 아이콘" />
              <SearchText>제목을 검색해 주세요.</SearchText>
            </SearchBox>
            <SearchDateBox>YYYY.MM.DD ~ YYYY.MM.DD</SearchDateBox>
            <SearchButtonBox>검색하기</SearchButtonBox>
          </BestListBottomSearch>
          {/* //!▶▶▶▶▶  list Start  ◀◀◀◀◀!// */}
          <PostListsBox>
            <Categorize>
              <CategorizeTop aaa={true}>번호</CategorizeTop>
              <CategorizeTopTitle aaa={true}>제목</CategorizeTopTitle>
              <CategorizeTop aaa={true}>작성자</CategorizeTop>
              <CategorizeTop aaa={true}>작성일</CategorizeTop>
            </Categorize>

            {data?.fetchBoards.map((data, index) => (
              <Categorize key={data._id}>
                <CategorizeTop>{index + 1}</CategorizeTop>
                <CategorizeTopTitle id={data?._id} onClick={onClickTitle}>
                  {data.title}{' '}
                </CategorizeTopTitle>
                <CategorizeTop>{data.writer}</CategorizeTop>
                <CategorizeTop>{getDate(data.createdAt)}</CategorizeTop>
              </Categorize>
            ))}
          </PostListsBox>

          {/* //!▶▶▶▶▶  ListFooter Start  ◀◀◀◀◀// */}
          <ListFooter>
            <Pagination01 />
            <UploadButton id={data?._id} onClick={onClickUpload}>
              게시물 등록하기
            </UploadButton>
          </ListFooter>
        </BestListBottom>
      </BestListWrapper>
    </>
  );
}
