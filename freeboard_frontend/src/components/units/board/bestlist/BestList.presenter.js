//베스트 게시글 화면 presenter.js
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
  Row,
  ColumnTop,
  ColumnTopTitle,
  Column2,
  ListFooter,
  MoveToPage,
  GoToPrev,
  PageNum,
  GoToNext,
  UploadButton,
} from "./BestList.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function ListPageUI({ onClickUpload, data }) {
  return (
    <>
      <BestListWrapper>
        {/*====상단 시작===BestListTop Start====*/}
        <BestListTop>
          <BestPostsTitle>베스트 게시글</BestPostsTitle>

          {/* ===== BestPosts 상단 게시글 모음 ==== */}
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

        {/*====하단 시작===BestListBottom Start====*/}
        <BestListBottom>
          <BestListBottomSearch>
            <SearchBox>
              <SearchIcon src="/icon_search.png" alt="검색 아이콘" />
              <SearchText>제목을 검색해 주세요.</SearchText>
            </SearchBox>
            <SearchDateBox>YYYY.MM.DD ~ YYYY.MM.DD</SearchDateBox>
            <SearchButtonBox>검색하기</SearchButtonBox>
          </BestListBottomSearch>

          {/* == 게시글 목록 PostsList Start == */}
          <PostListsBox>
            <Row>
              <ColumnTop>번호</ColumnTop>
              <ColumnTopTitle>제목</ColumnTopTitle>
              <ColumnTop>작성자</ColumnTop>
              <ColumnTop>날짜</ColumnTop>
            </Row>

            {data?.fetchBoards.map((data, index) => (
              <Row key={data._id}>
                <Column2>{index + 1}</Column2>
                <Column2>{data.writer}</Column2>
                <Column2>{data.title}</Column2>
                <Column2>{getDate(data.createdAt)}</Column2>
              </Row>
            ))}
          </PostListsBox>
          <ListFooter>
            <MoveToPage>
              <GoToPrev src="/icon_prev.png" alt="이전 페이지로" />
              <PageNum>1</PageNum>
              <PageNum>2</PageNum>
              <GoToNext src="/icon_next.png" alt="다음 페이지로" />
            </MoveToPage>
            <UploadButton onClick={onClickUpload}>게시물 등록하기</UploadButton>
          </ListFooter>
        </BestListBottom>
        {/*====하단 끝===BestListBottom End====*/}
      </BestListWrapper>
    </>
  );
}
