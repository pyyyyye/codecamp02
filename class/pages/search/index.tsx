import { gql, useQuery } from '@apollo/client';
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from '../../src/commons/types/generated/types';
import styled from '@emotion/styled';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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

interface IProps {
  isMatched: boolean;
}
const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? 'red' : 'black')};
  // isMatched, isActive 이런 변수 없어 그냥 정해준거야. aaa해도돼
`;

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [keyword, setKeyword] = useState('');

  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchBoards'>,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }
  function onClickSearch() {
    // 검색 시작
    // Q) 한번 날렸던 useQuery를 다시 날리려면? = Pagination 때도 한번 했음. =>
    //! =  usequery를 refetch했어!! (먼저 data옆에 가져오고.)
    refetch({ search: search });
    setKeyword(search);
  }

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    console.log(Number((event.target as Element).id), search);
    refetch({ search: keyword, page: Number((event.target as Element).id) }); // (검색어:현재검색어 그대로, 페이지: 태그는 문잔데 페이지는 숫자만 가능해서 number해줌.)
    // refetch에서 search에 keword로 따로 state해준 것을 담아놔야지 search 로 담으면 페이지네이션이 keword입력값과 별개로 새로 입력되는거 맞춰서 넘어감.
  }

  return (
    <>
      <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <Column>{data.writer}</Column>
          <Column>
            {data.title
              .replaceAll(keyword, `@#$%${keyword}@#$%`)
              .split('@#$%')
              .map((data) => (
                <Word key={uuidv4()} isMatched={keyword === data}>
                  {data}
                </Word>
              ))}
          </Column>
          <Column>{data.createdAt}</Column>
        </div>
      ))}
      {/* //------------------- pagination start ------------------ */}
      {new Array(10).fill(1).map((_, index) => (
        <Page key={uuidv4()} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
