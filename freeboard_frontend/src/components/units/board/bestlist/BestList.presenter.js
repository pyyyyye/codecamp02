//베스트 게시글 화면 presenter.js
import { BestListWrapper, BestListTop, BestPostsTitle, BestPostsBox, BestPosts, BestPostsPhoto, TitleInBestPosts, BestPostsInfo, PostsInfo_Left, WriterInfo, WriterPhoto, WriterName, PostDate, PostsInfo_Right, RecomImage, RecomCount, BestListBottom, BestListBottomSearch, SearchBox, SearchDateBox, SearchButtonBox, PostListsBox, Row, ColumnTop, ColumnTopTitle} from './BestList.styles';

export default function ListPageUI(){
    const { data } = useQuery(FETCH_BOARDS)
    
    return(
        <>
            <BestListWrapper>
                {/*====상단 시작===BestListTop Start====*/}
                <BestListTop>
                    <BestPostsTitle>베스트 게시글</BestPostsTitle>

                {/* ===== BestPosts 상단 게시글 모음 ==== */}
                    <BestPostsBox>
                        <BestPosts>
                            <BestPostsPhoto />
                            <TitleInBestPosts>게시물 제목입니다.</TitleInBestPosts>
                            <BestPostsInfo>
                                <PostsInfo_Left>
                                    <WriterInfo>
                                        <WriterPhoto />
                                        <WriterName>호두</WriterName>
                                    </WriterInfo>
                                    <PostDate>Date : 2020.02.18</PostDate>
                                </PostsInfo_Left>

                                <PostsInfo_Right>
                                    <RecomImage />
                                    <RecomCount>296</RecomCount>
                                </PostsInfo_Right>
                            </BestPostsInfo>
                        </BestPosts>
                        <BestPosts>
                            <BestPostsPhoto />
                            <TitleInBestPosts>게시물 제목입니다.</TitleInBestPosts>
                            <BestPostsInfo>
                                <PostsInfo_Left>
                                    <WriterInfo>
                                        <WriterPhoto />
                                        <WriterName>자두</WriterName>
                                    </WriterInfo>
                                    <PostDate>Date : 2020.04.15</PostDate>
                                </PostsInfo_Left>

                                <PostsInfo_Right>
                                    <RecomImage />
                                    <RecomCount>984</RecomCount>
                                </PostsInfo_Right>
                            </BestPostsInfo>
                        </BestPosts>
                        <BestPosts>
                            <BestPostsPhoto />
                            <TitleInBestPosts>게시물 제목입니다.</TitleInBestPosts>
                            <BestPostsInfo>
                                <PostsInfo_Left>
                                    <WriterInfo>
                                        <WriterPhoto />
                                        <WriterName>박준수</WriterName>
                                    </WriterInfo>
                                    <PostDate>Date : 1997.06.24</PostDate>
                                </PostsInfo_Left>

                                <PostsInfo_Right>
                                    <RecomImage />
                                    <RecomCount>1115</RecomCount>
                                </PostsInfo_Right>
                            </BestPostsInfo>
                        </BestPosts>
                        <BestPosts>
                            <BestPostsPhoto />
                            <TitleInBestPosts>게시물 제목입니다.</TitleInBestPosts>
                            <BestPostsInfo>
                                <PostsInfo_Left>
                                    <WriterInfo>
                                        <WriterPhoto />
                                        <WriterName>박영은</WriterName>
                                    </WriterInfo>
                                    <PostDate>Date : 1995.05.28</PostDate>
                                </PostsInfo_Left>

                                <PostsInfo_Right>
                                    <RecomImage />
                                    <RecomCount>1356</RecomCount>
                                </PostsInfo_Right>
                            </BestPostsInfo>
                        </BestPosts>
                    </BestPostsBox>
                </BestListTop>
                {/*====상단 끝===BestListTop End====*/}

                {/*====하단 시작===BestListBottom Start====*/}
                <BestListBottom>
                    {/* == 하단 검색창 SearchBox Start== */}
                    <BestListBottomSearch>
                        <SearchBox>제목을 검색해 주세요.</SearchBox>
                        <SearchDateBox></SearchDateBox>
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
                            <Column>{index+1}</Column>
                            <Column>{data.writer}</Column>
                            <Column>{data.title}</Column>
                            <Column>{getDate(data.createdAt)}</Column>
                            <Column><button onClick={onClickUpload} active={active}>게시물 등록하기</button></Column>
                         </Row>
                        ))}
                    </PostListsBox>

                </BestListBottom>
                {/*====하단 끝===BestListBottom End====*/}                 
            </BestListWrapper>






        </>
    )
}