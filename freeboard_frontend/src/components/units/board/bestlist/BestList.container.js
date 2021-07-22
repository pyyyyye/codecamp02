//베스트 게시글 화면 container.js
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS } from './BestList.queries';
import ListPageUI from './BestList.presenter';
import { useRouter } from 'next/router';

export default function ListPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  function onClickTitle(event) {
    console.log(event.target);
    router.push(`/board/detail/${event.target.id}`);
  }

  function onClickUpload(event) {
    router.push(`/board/new/${event.target.id}`);
  }

  return (
    //!-------------- props로 담는 부분
    <ListPageUI
      onClickUpload={onClickUpload}
      data={data}
      onClickTitle={onClickTitle}
    />
  );
}
