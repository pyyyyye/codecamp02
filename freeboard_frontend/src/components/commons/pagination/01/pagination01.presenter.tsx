// -------- pagination.presenter.tsx ----------
import { MouseEvent } from 'react';
import { Page } from './pagination01.styles';

interface IPaginations01UIProps {
  startPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}

export default function Pagination01_UI(props: IPaginations01UIProps) {
  return (
    <div>
      <Page onClick={onClickPrevPage}>{`<`}</Page>
      {new Array(10).fill(1).map((_, index) => {
        const currentPage = props.startPage + index;
      })}
    </div>
  );
}
