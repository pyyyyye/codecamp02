// 0802 context-api, 정규표현식 과제 - container
import WriteContextAPIUI from './Write.presenter';

interface IProps {
  isEdit: boolean;
}

// export default function Write(props: IProps) {
//   return <WriteUI isEdit={props.isEdit} />;
// }

export default function WriteContextAPI() {
  return <WriteContextAPIUI />;
}
