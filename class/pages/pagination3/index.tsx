// 0722- pagiNagtion <Page>이전, 다음 버튼</Page>     -- 페이지 넘김
import { useQuery, gql } from '@apollo/client';
import { IQuery } from '../../src/commons/types/generated/types';
import { useState } from 'react';
import styled from '@emotion/styled';

const FETCH_BOARDS = gql`
  query fetchBoards($aaa: Int) {
    fetchBoards(page: $aaa) {
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
    variables: { aaa: startPage },
  });
  const { data: ooo } = useQuery<IQuery>(FETCH_BOARDS_COUNT); // ----------- 게시글이 있는 data의 ooo
  const lastPage = Math.ceil(Number(ooo?.fetchBoardsCount) / 10); // --------------- data의 ooo를 10개로 나눈 것을 올림처리해서 갯수 계산(math.ceil)
  // Math.ceil( /10)   -> 10으로 나눈 나머지

  function onClickPage(event) {
    refetch({ aaa: Number(event.target.id) });
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
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
        (data, index) =>
          // ★ []안의 페이지를 지금 10개 만들어뒀기 때문에 next,prev모두 10페이지를 채워둔 상태임.
          startPage + index <= lastPage && ( // startPage + index ( 현재페이지 ) 가 lastPage보다 작아야 됨.
            <Page
              key={startPage + index}
              onClick={onClickPage}
              id={startPage + index}
            >
              {startPage + index}
            </Page>
          )
      )}
      <Page onClick={onClickNextPage}>다음</Page>
    </div>
  );
}
