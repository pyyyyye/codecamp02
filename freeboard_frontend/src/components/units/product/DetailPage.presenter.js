import {Contents, TopContentsWriter, WriterProfileImg, WriterInfo, WriterIcon, Name, Date, MiddleContentsPost,  ContentsTitle, ContentsImage, ContentsText, ContentsVideo, BottomContentsRecommend, Recommendations, RecomImage, RecomCount, DecomImage, DecomCount, LinkIcon, MapIcon} from './DetailPage.styles';

export default function DetailPageUI(props){
    return( 
        <> 
            <Contents>
                {/* ----- TopContentsWriter Start ----- */}
                <TopContentsWriter >{props.onDetail?.fetchBoard.writer}
                    <WriterProfileImg></WriterProfileImg>
                    <WriterInfo>
                        <Name>박영은</Name>
                        <Date>Date : 2020.02.18</Date>
                    </WriterInfo>
                    <WriterIcon> {/*---- 우측 픽토그램 ----*/}
                        <LinkIcon src="/link.png" />
                        <MapIcon src="/link2.png" />
                    </WriterIcon>
                </TopContentsWriter>   


                {/* ----- MiddleContentsPost Start ----- */}
                <MiddleContentsPost> {props.onDetail?.fetchBoard.title}
                    <ContentsTitle>게시글 제목입니다.</ContentsTitle>
                    <ContentsImage src="/detailpageImage.png" />
                    <ContentsText> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ContentsText>

                    <ContentsVideo></ContentsVideo>
                </MiddleContentsPost>


                {/* ----- BottomContentsRecommend Start ----- */}
                <BottomContentsRecommend>{props.onDetail?.fetchBoard.contents}
                    <Recommendations> {/* 추천 */}
                        <RecomImage src="/recom.png" />
                        <RecomCount>1920</RecomCount>
                    </Recommendations>
                    <Recommendations>{/* 비추천 */}
                        <DecomImage src="/decom.png"/>
                        <DecomCount>1920</DecomCount>
                    </Recommendations>
                
                </BottomContentsRecommend>
            </Contents>          
        </>
    )

}