import { useContext } from 'react';
import { WriteContext } from '../../../../pages/boards/example/context/edit';

// 0802 context-api, 정규표현식 과제 - presenter

// export default function WriteUI(props: IProps) {
//   return <div> {props.isEdit ? 'edit 수정하기' : 'new 등록하기'}</div>;
//

export default function WriteContextAPIUI() {
  const { isEdit } = useContext(WriteContext);

  return <div> {isEdit ? 'edit 수정하기' : 'new 등록하기'}</div>;
}
