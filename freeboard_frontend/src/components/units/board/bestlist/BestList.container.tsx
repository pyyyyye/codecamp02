//베스트 게시글 화면 container.ts
import ListPageUI from './BestList.presenter';
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS } from './BestList.queries';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ListPage() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeword] = useState('');
  const { data } = useQuery(FETCH_BOARDS);

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
