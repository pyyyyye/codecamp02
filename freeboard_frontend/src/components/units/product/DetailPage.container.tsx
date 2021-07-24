//=== 게시물 상세페이지 conatiner.js ===
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { FETCH_BOARD, DELETE_BOARD } from './DetailPage.queries';
import DetailPageUI from './DetailPage.presenter';
// import { DELETE_BOARD } from '../board/new/BoardNew.queries';

export default function DetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.detailpages },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);

  function onClickMoveToList() {
    router.push('../../board/bestposts');
  }
  function onClickMoveToEdit() {
    router.push(`../../board/detail/${router.query.detailpages}/edit`);
  }

  async function onClickMoveToDelete() {
    try {
      await deleteBoard({
        variables: { deleteBoard: router.query.detailpages },
      });
      alert('해당 글을 삭제합니다.');
      router.push(`../../board/bestposts`);
    } catch (error) {
      alert(error);
    }
  }

  return (
    //!-------- props
    <DetailPageUI
      // onDetail={data}
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToDelete={onClickMoveToDelete}
    />
  );
}
