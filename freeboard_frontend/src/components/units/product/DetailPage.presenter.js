//=== 게시물 상세페이지 presenter.js ===
import {PostContents, TopContentsWriter, WriterProfileImg, WriterInfo, WriterIcon, Name, Date, MiddleContentsPost,  ContentsTitle, ContentsImage, ContentsText, ContentsVideo, BottomContentsRecommend, Recommendations, RecomImage, RecomCount, DecomImage, DecomCount, LinkIcon, MapIcon, EtcContents, BottomButtons, GoToListButton} from './DetailPage.styles';
import { getDate } from '../../../commons/libraries/utils';

export default function DetailPageUI(props){
    console.log(props)
    return( 
        <> 
            {/* == 상세페이지 게시물 영역 == */}
            <PostContents>
                {/*----- TopContentsWriter Start -----*/}
                <TopContentsWriter >
                    <WriterProfileImg></WriterProfileImg>
                    <WriterInfo>
                        <Name>{props.onDetail?.fetchBoard.writer}</Name>
                        <Date>{getDate(props.onDetail?.fetchBoard.createdAt)}</Date>
                    </WriterInfo>
                    <WriterIcon> {/*---- 우측 픽토그램 ---*/}
                        <LinkIcon src="/link.png" />
                        <MapIcon src="/link2.png" />
                    </WriterIcon>
                </TopContentsWriter>   


                {/* --- MiddleContentsPost Start --- */}
                <MiddleContentsPost>
                    <ContentsTitle> {props.onDetail?.fetchBoard.title}</ContentsTitle>
                    <ContentsImage src="/detailpageImage.png" />
                    <ContentsText>{props.onDetail?.fetchBoard.contents}</ContentsText>

                    <ContentsVideo></ContentsVideo>
                </MiddleContentsPost>

                {/* --- BottomContentsRecommend Start --- */}
                <BottomContentsRecommend>
                    <Recommendations> {/* 추천 */}
                        <RecomImage src="/recom.png" />
                        <RecomCount>1920</RecomCount>
                    </Recommendations>
                    <Recommendations>{/* 비추천 */}
                        <DecomImage src="/decom.png"/>
                        <DecomCount>1920</DecomCount>
                    </Recommendations>
                
                </BottomContentsRecommend> 
            </PostContents>   
        
            {/* == 게시글 외 하단 기타 컨텐츠 시작 == */}
            <EtcContents>
                <BottomButtons>
                    {/* -- '목록으로' 버튼 -- */}
                    <GoToListButton>목록으로</GoToListButton>

                    {/* -- '수정하기' 버튼 -- */}
                    <GoToListButton>수정하기</GoToListButton>

                    {/* -- '삭제하기' 버튼 -- */}
                    <GoToListButton>삭제하기</GoToListButton>
                </BottomButtons>

            </EtcContents>       
        </>
    )

}