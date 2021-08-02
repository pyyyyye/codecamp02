import { useContext } from 'react';
import { AAAContext } from '../../../../pages/21-contextAPI';

export default function ContextAPIUI() {
  const { isEdit, change } = useContext(AAAContext);

  return (
    <div>
      {isEdit ? '수정하기' : '등록하기'}

      <button onClick={change}> 변경하기 </button>
    </div>
  );
}
