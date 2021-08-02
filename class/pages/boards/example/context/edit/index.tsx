// 0802 context-api, 정규표현식 과제 - index

import { createContext } from 'react';
import WriteContextAPI from '../../../../../src/components/units/example/Write.container';
// import Write from '../../../../../src/components/units/example/Write.container';

export const WriteContext = createContext({});

export default function EditPage() {
  //   return <Write isEdit={true} />;

  const value = {
    isEdit: true,
  };
  return (
    <WriteContext.Provider value={value}>
      <WriteContextAPI />
    </WriteContext.Provider>
  );
}
