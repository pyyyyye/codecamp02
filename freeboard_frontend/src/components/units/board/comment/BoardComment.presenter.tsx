//게시글 댓글 화면 presenter.js
import {
  BoardCommentWrapper,
  CommentTitle,
  CommentUpload,
  CommentUploadTop,
  WriterInput,
  WriterPwInput,
  CommentUploadBottom,
  CommentInput,
  UploadButton,
  CommentList,
  CommentListUp,
  CommentListLeft,
  CommentListRight,
  CommentListTop,
  WriterName,
  CommentNote,
  CommentDate,
  // CommentToEdit,
  // Button_Edit,
  // Button_delete,
} from './BoardComment.styles';
import { getDate } from '../../../../commons/libraries/utils';

export default function BoardCommentUI(props: any) {
  return (
    <BoardCommentWrapper>
      <CommentTitle>댓글</CommentTitle>
      <CommentUpload>
        <CommentUploadTop>
          <WriterInput
            name="writer"
            onChange={props.onChangeInput}
            type="text"
            placeholder="작성자"
          />
          <WriterPwInput
            name="password"
            onChange={props.onChangeInput}
            type="password"
            placeholder="비밀번호"
          />
        </CommentUploadTop>
        {/* //!----- 댓글 입력 및 등록 창 ------ */}
        <CommentUploadBottom>
          <CommentInput
            name="contents"
            onChange={props.onChangeInput}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <UploadButton onClick={props.onClick}> 등록하기</UploadButton>
        </CommentUploadBottom>
      </CommentUpload>

      {/*//!▶▶▶▶▶ 댓글 리스트 ◀◀◀◀◀*/}
      <CommentList>
        {props.data?.fetchBoardComments.map((data: any) => (
          <CommentListUp key={data._id}>
            <CommentListLeft></CommentListLeft>
            <CommentListRight>
              <CommentListTop>
                <WriterName>{data.writer}</WriterName>
                {/* 
                <CommentToEdit>
                  <Button_Edit></Button_Edit>
                <Button_delete></Button_delete>
                </CommentToEdit>
                 */}
              </CommentListTop>
              <CommentNote>{data.contents}</CommentNote>
              <CommentDate>{getDate(data.createdAt)}</CommentDate>
            </CommentListRight>
          </CommentListUp>
        ))}
      </CommentList>
    </BoardCommentWrapper>
  );
}
