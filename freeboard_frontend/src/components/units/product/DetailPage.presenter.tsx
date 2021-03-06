//=== 게시물 상세페이지 presenter.js ===
import {
  Wrapper,
  PostContents,
  TopContentsWriter,
  WriterProfileImg,
  WriterInfo,
  WriterIcon,
  Name,
  Date,
  MiddleContentsPost,
  ContentsTitle,
  ContentsImage,
  ContentsText,
  ContentsVideo,
  BottomContentsRecommend,
  Recommendations,
  RecomImage,
  RecomCount,
  DecomImage,
  DecomCount,
  LinkIcon,
  MapIcon,
  // EtcContents,
  BottomButtons,
  GoToButton,
} from './DetailPage.styles';
import { getDate } from '../../../commons/libraries/utils';
import { IDetailPageUIProps } from './DetailPage.types';
import { Tooltip } from 'antd';

export default function DetailPageUI(props: IDetailPageUIProps) {
  return (
    <Wrapper>
      {/*//! == 상세페이지 게시물 영역 == !*/}
      <PostContents>
        {/*----- TopContentsWriter Start -----*/}
        <TopContentsWriter>
          <WriterProfileImg></WriterProfileImg>
          <WriterInfo>
            <Name>{props.data?.fetchBoard.writer}</Name>
            <Date>{getDate(props.data?.fetchBoard.createdAt)}</Date>
          </WriterInfo>
          <WriterIcon>
            {/*---- 우측 픽토그램 ---*/}
            <LinkIcon src="/link.png" />
            {/* <MapIcon src="/link2.png" /> */}
            <Tooltip
              placement="top"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <MapIcon src="/link2.png" alt="작성자 주소" />
            </Tooltip>
          </WriterIcon>
        </TopContentsWriter>

        {/*//! --- MiddleContentsPost Start --- */}
        <MiddleContentsPost>
          <ContentsTitle> {props.data?.fetchBoard.title}</ContentsTitle>
          {props.data?.fetchBoard.images.map((data) => (
            <ContentsImage src={`https://storage.googleapis.com/${data}`} />
          ))}

          <ContentsText>{props.data?.fetchBoard.contents}</ContentsText>

          <ContentsVideo
            url={props.data?.fetchBoard.youtubeUrl}
            width="400px"
            height="300px"
            playing={true}
            muted={true}
            controls={true}
          />
        </MiddleContentsPost>

        {/*//!--- BottomContentsRecommend 좋아요 싫어요 Start --- */}
        <BottomContentsRecommend>
          <Recommendations>
            <RecomImage src="/recom.png" />
            <RecomCount>1920</RecomCount>
          </Recommendations>
          <Recommendations>
            <DecomImage src="/decom.png" />
            <DecomCount>1920</DecomCount>
          </Recommendations>
        </BottomContentsRecommend>
      </PostContents>

      {/*//! == 게시글 외 하단 기타 컨텐츠 시작 == */}
      <BottomButtons>
        {/* -- '목록으로' 버튼 -- */}
        <GoToButton onClick={props.onClickMoveToList}>목록으로</GoToButton>

        {/* -- '수정하기' 버튼 -- */}
        <GoToButton onClick={props.onClickMoveToEdit}>수정하기</GoToButton>

        {/* -- '삭제하기' 버튼 -- */}
        <GoToButton onClick={props.onClickMoveToDelete}>삭제하기</GoToButton>
      </BottomButtons>
    </Wrapper>
  );
}
