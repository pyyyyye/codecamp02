// 0722- pagiNagtion 페이지 넘김
import { useQuery, gql } from '@apollo/client';
import { IQuery } from '../../src/commons/types/generated/types';
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
  const { data, refetch } = useQuery<IQuery>(FETCH_BOARDS, {
    variables: { aaa: 1 },
    // aaa에 대해 fetchboards실행됨
  });
  // refech =>함수. 저거 실행하면 언제든지 refetch가능
  function onClickPage(event) {
    refetch({ aaa: Number(event.target.id) });
    // ----- refetch 실행 가능하도록 기능 넣음.
    // Number()안에 담지 않으면 문자열로 인식해서 적용되지 않음.
  }

  return (
    <div>
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
        </div>
      ))}
      {/* ------- 배열이기 때문에 map가능. */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
        <Page key={data} onClick={onClickPage} id={data}>
          {/* id={해당하는 페이지 수} */}
          {data}
        </Page>
      ))}
      {/*  <Page>1</Page>
       <Page>2</Page>
       <Page>3</Page>
       <Page>4</Page>
       <Page>5</Page> */}
    </div>
  );
}
