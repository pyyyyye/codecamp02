import { gql, useQuery } from '@apollo/client';
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from '../../src/commons/types/generated/types';
import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import _ from 'lodash';

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Column = styled.span`
  padding: 0px 40px;
`;
const Page = styled.span`
  padding: 0px 10px;
`;
export default function SearchPage() {
  const [search, setSearch] = useState('');

  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data }); // 한번만 만들게 하면 됨. - setSearch 주석(삭제)
    // console.log('확인용 콘솔');
    setSearch(data); // data를 저장을 해야만 search에 저장해야 하기 때문에 setsearch로 담아줌.
  }, 1000);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    // setSearch(event.target.value);   // setSearch를 유지하고싶다면, const getDebounce를 컴포넌트(export~ )밖으로 빼주면 돼.
    getDebounce(event.target.value);
  }
  // function onClickSearch() {
  //   refetch({ search: search });
  // }

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    console.log(Number((event.target as Element).id), search);
    refetch({ search: search, page: Number((event.target as Element).id) });
  }

  return (
    <>
      <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
          <Column>{data.createdAt}</Column>
        </div>
      ))}
      {/* //------------------- pagination start ------------------ */}
      {new Array(10).fill(1).map((_, index) => (
        <Page key={index} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
