import { useQuery } from '@apollo/client';
import NewPage from '../../../../../src/components/units/board/new/BoardNew.container';

export default function EditPage() {
  // useQuery로 DetailPage를 가져온다. >  가져온 데이터를 아래 NewPage 컴포넌트에 props로 넘겨준다. ->수정 정보 남게 하는 ㅂ아법.
  useQuery;
  //gql쿼리 먼저 만들고 그걸 import해와서 useQuery안에 넣고 그걸 받아서 newpage로 보내.
  return <NewPage isEdit={true} />;
}
//6) 수정이 안됨.. 새로등록됨.  ->update로 하던지 isEdit를 안해ㅜ줫거나. 해주서는데 createBoard가 실행되거나임.
