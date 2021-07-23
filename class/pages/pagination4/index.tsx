// 0722- pagiNagtion <Page>이전, 다음 버튼</Page>     -- 페이지 넘김
import { useQuery, gql } from '@apollo/client';
import { IQuery } from '../../src/commons/types/generated/types';
import { useState } from 'react';
import styled from '@emotion/styled';

const FETCH_BOARDS = gql`
  query fetchBoards($onClickPageRefetch: Int) {
    fetchBoards(page: $onClickPageRefetch) {
      _id
      writer
      title
    }
  }
`;
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Column = styled.span`
  margin: 0px 50px;
`;
const Page = styled.span`
  margin: 0px 10px;
  cursor: pointer;
`;

export default function PaginationPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<IQuery>(FETCH_BOARDS, {
    variables: { onClickPageRefetch: startPage },
  });
  const { data: dataBoardCount } = useQuery<IQuery>(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(Number(dataBoardCount?.fetchBoardsCount) / 10);
  function onClickPage(event: MouseEventHandler<HTMLSpanElement>) {
    refetch({ onClickPageRefetch: Number(event.target.id as Element) });
  }
  function onClickPrevPage() {
    if (startPage <= 1) return; // -------------- 이전버튼 1페이지 이전 마이너스로 떨어지지 않게 return
    setStartPage((prev) => prev - 10);
  }
  function onClickNextPage() {
    if (startPage + 10 > lastPage) return; // --------------- 다음버튼 마지막 게시글 있는 페이지 넘어가지 않도록  return
    setStartPage((prev) => prev + 10);
  }

  return (
    <div>
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
        </div>
      ))}
      <Page onClick={onClickPrevPage}>이전</Page>
      {new Array(10).fill(1).map((_, index) => {
        const currentPage = startPage + index;
        return (
          // ★ []안의 페이지를 지금 10개 만들어뒀기 때문에 next,prev모두 10페이지를 채워둔 상태임.
          currentPage <= lastPage && ( // startPage + index ( 현재페이지 ) 가 lastPage보다 작아야 됨.
            <Page
              key={currentPage}
              onClick={onClickPage}
              id={String(currentPage)} // 태그에 숫자 들어갈 수 없음. 문자열만 가능. 그래서 String으로 감싸줌.
            >
              {currentPage}
            </Page>
          )
        );
      })}
      <Page onClick={onClickNextPage}>다음</Page>
    </div>
  );
}
