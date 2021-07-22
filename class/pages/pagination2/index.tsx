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
  function onClickPage(event) {
    refetch({ aaa: Number(event.target.id) });
  }
  function onClickPrevPage() {
    setStartPage((prev) => prev - 10);
    // startpage를 해도 상관없지만, prev를 이용하는게 임시공간의 기존 것을 가져와서 바꾸는거라서 더 안전함.
  }
  function onClickNextPage() {
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
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((data, index) => (
        // 1,1,1,....을 10개해서 10개의 버튼을 만들었기 때문에 index 하면 0~9까지 (1페이지~10페이지) 적용됨.
        <Page
          key={startPage + index}
          onClick={onClickPage}
          id={startPage + index}
        >
          {startPage + index}
        </Page>
      ))}
      <Page onClick={onClickNextPage}>다음</Page>
    </div>
  );
}
