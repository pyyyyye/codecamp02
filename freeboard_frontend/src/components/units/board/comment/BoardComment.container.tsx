//게시글 댓글 화면 container.js
import BoardCommentUI from './BoardComment.presenter';
import { useMutation, useQuery } from '@apollo/client';
import { BOARD_COMMENT, FETCHBOARD_COMMENT_LIST } from './BoardComment.queries';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const onChangeContentsInput = {
  writer: '',
  password: '',
  contents: '',
  rating: 0,
};

export default function BoardComment() {
  const router = useRouter();
  const { data } = useQuery(FETCHBOARD_COMMENT_LIST, {
    variables: { boardId: router.query.detailpages },
  });
  const [createBoardCommentMutation] = useMutation(BOARD_COMMENT);
  const [inputComment, setInputComment] = useState(onChangeContentsInput);

  async function onClick() {
    console.log('로그로그', inputComment);
    try {
      await createBoardCommentMutation({
        variables: {
          createBoardCommentInput: {
            ...inputComment,
          },
          boardId: router.query.detailpages,
        },
      });
      console.log('돼라 좀 떴다!');
    } catch (error) {
      alert(error.message);
    }
  }

  function onChangeInput(event: any) {
    console.log(event);
    const newInput = {
      ...inputComment,
      [event.target.name]: event.target.value,
    };
    setInputComment(newInput);
    console.log(event.target.name);
  }

  return (
    <BoardCommentUI
      onChangeInput={onChangeInput}
      onClick={onClick}
      data={data}
    />
  );
}

//!▶▶▶▶▶ 댓글 리스트 ◀◀◀◀◀!//
