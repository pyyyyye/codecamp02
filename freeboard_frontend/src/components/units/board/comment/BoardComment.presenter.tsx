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
  WriterName,
  CommentNote,
  CommentDate,
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
        <CommentUploadBottom>
          <CommentInput name="contents" onChange={props.onChangeInput} />
        </CommentUploadBottom>
        <UploadButton onClick={props.onClick}> 등록하기</UploadButton>
      </CommentUpload>

      {/*//!▶▶▶▶▶ 댓글 리스트 ◀◀◀◀◀*/}
      <CommentList>
        {props.data?.fetchBoardComments.map((data: any) => (
          <CommentListUp key={data._id}>
            <CommentListLeft>사진</CommentListLeft>
            <CommentListRight>
              <WriterName>{data.writer}</WriterName>
              <CommentNote>{data.contents}</CommentNote>
              <CommentDate>{getDate(data.createdAt)}</CommentDate>
            </CommentListRight>
          </CommentListUp>
        ))}
      </CommentList>
    </BoardCommentWrapper>
  );
}
