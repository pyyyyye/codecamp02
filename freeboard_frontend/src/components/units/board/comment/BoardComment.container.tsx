//게시글 댓글 화면 container.js
import BoardCommentUI from './BoardComment.presenter';
import { useMutation, useQuery } from '@apollo/client';
// import { FETCH_BOARD } from '../../product/DetailPage.queries';
import { BOARD_COMMENT, FETCHBOARD_COMMENT_LIST } from './BoardComment.queries';
// import { FETCH_BOARD } from '../../../units/product/DetailPage.queries';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Rate } from 'antd';

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
        refetchQueries: [
          {
            query: FETCHBOARD_COMMENT_LIST,
            variables: {
              boardId: router.query.detailpages,
            },
          },
        ],
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

  // !----------------- Rating ------------
  function onChangeStar(event: any) {}

  return (
    <BoardCommentUI
      onChangeInput={onChangeInput}
      onChangeStar={onChangeStar}
      onClick={onClick}
      data={data}
    />
  );
}

//!▶▶▶▶▶ 댓글 리스트 ◀◀◀◀◀!//
