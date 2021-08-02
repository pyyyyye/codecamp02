// -------- pagination.container.tsx ----------
import { MouseEvent, useState } from 'react';
import Pagination01_UI from './pagination01.presenter';

interface IPagination01Props {
  count?: number;
  refetch: any;
}

export default function Pagination01(props: IPagination01Props) {
  const [activePage, setActivePage] = useState(1);
  const lastPage = Math.ceil(Number(props.count) / 10);

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    const acivePage = Number((event.target as Element).id);
    setActivePage(acivePage);
    // props.refetch({ page: activePage });
    history.pushState({ page: activePage }, '', `?page=${activePage}`);
  }

  //   function onClickPrevPage() {
  //     if (props.startPage <= 1) return;
  //     setActivePage(props.startPage - 10);
  //     props.setStartPage((prev) => prev - 10);
  //   }
  //   function onClickNextPage() {
  //     if (props.startPage + 10 > lastPage) return;
  //     setActivePage(props.startPage + 10);
  //     props.setStartPage((prev) => prev + 10);
  //   }

  return (
    <Pagination01_UI
      //   startPage={startPage}
      lastPage={lastPage}
      activePage={activePage}
    />
  );
}
