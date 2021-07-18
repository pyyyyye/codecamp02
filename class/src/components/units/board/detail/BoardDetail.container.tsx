import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import BoardDetailUI from './BoardDetail.presenter';
import { FETCH_BOARD } from './BoardDetail.queries';

export default function BoardDetail() {
  const router = useRouter();
  const { data: dataBoard } = useQuery(
    FETCH_BOARD,
    { variables: { boardId: router.query.boardId } }
    // 앞에 boardId를 detail 이동 페이지 폴더명과 같게 해줘야함.
  );

  // = {
  //     data: 게시물데이터
  // }

  // const data = result.data
  // const {data} = useQuery(
  //     FETCH_BOARD,
  //     { variables:{ boardId: router.query.boardId } }
  //     //앞에 boardId를 detail 이동 페이지 폴더명과 같게 해줘야함.
  // )

  // const profile = {
  //     name: '철수',
  //     age: 13
  // }

  // const name = profile.name
  // const age = profile.age
  // const {name: qqq, age} = profile
  // ==> const qqq = profile.name

  // const {data: dataBoardComments} = useQuery(
  //     FETCH_BOARD_COMMENTS,
  //     { variables:{ boardId: router.query.boardId } }
  //     //앞에 boardId를 detail 이동 페이지 폴더명과 같게 해줘야함.
  // )

  function onClickEdit() {
    router.push(`/detail/${router.query.boardId}/edit`);
  }

  console.log(dataBoard);
  return <BoardDetailUI qqq={dataBoard} onClickEdit={onClickEdit} />;
  // qqq=key, data=value useQuery서 받아온거.
}
