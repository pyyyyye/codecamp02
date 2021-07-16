//----------------------!!!!!!! 댓글 창 만들기 !!!!!!!--------------------//
import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled"; // <-한 페이지에 스타일 css넣을 때.
import { getDate } from "../../src/commons/libraries/utils";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id #여기서는 댓글순서라서 아이디가 아니라 번호 될 수있음.
      writer
      title
      contents
      createdAt
    }
  }
`;
//-----------------------Queries Start----------------------//
const DELETE_BOARD = gql`
  mutation deleteBoard($aaa: ID!) {
    # aaa를 지우는 기능 추가
    deleteBoard(boardId: $aaa)
  }
`;
//-----------------------Styles Start----------------------//
const Row = styled.div`
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid gray;
  display: flex;
`;
const Column = styled.div`
  width: 20%;
`;
const ColumnTop = styled.div`
  width: 20%;
  background-color: lemonchiffon;
  font-weight: 600;
`;

//-------------------- Js & HTML Start--------------------//
export default function Map3Page() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  async function onClickDelete(event) {
    alert("해당 글을 삭제합니다.");
    // console.log(event.target)

    try {
      await deleteBoard({
        // aaa=>target의 id를 지우는 event.
        variables: { aaa: event.target.id },
        refetchQueries: [{ query: FETCH_BOARDS }], //삭제하면 삭제한거 없어지게.(안하면 새로고침해야 삭제된거 보임)
      });
      alert("삭제가 완료되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    //  객체?.배열.map<-객체옆에 map.  ?. ->옵셔널체인징
    <div>
      <Row>
        <ColumnTop>
          <input type="checkbox" />
        </ColumnTop>
        {/* <ColumnTop>번호</ColumnTop> */}
        <ColumnTop>작성자</ColumnTop>
        <ColumnTop>제목</ColumnTop>
        <ColumnTop>작성일</ColumnTop>
      </Row>
      {data?.fetchBoards.map((data, index) => (
        <Row key={data._id}>
          {/* <Column><input type="checkbox" id={data._id} onClick={onClickDelete} /></Column> */}
          <Column>
            <input type="checkbox" />
          </Column>
          {/* <Column>{index+1}</Column> */}
          {/* {index}만 하면 0부터 시작함.  */}
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
          <Column>{getDate(data.createdAt)}</Column>
          {/*<Column> {new Date(data.createdAt).getFullYear()} -
                        {new Date(data.createdAt).getMonth() + 1}
                        {String(new Date(data.createdAt).getMonth() + 1).padStart(2,'0')} - 
                        {new Date(data.createdAt).getDate()} </Column>*/}
          <Column>
            <button id={data._id} onClick={onClickDelete}>
              삭제하기
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}
