import ContextAPI from '../../src/components/units/21-contextAPI/ContextAPI.container';
import { createContext, useState } from 'react';

interface IContext {
  isEdit?: boolean;
  change: () => void;
}
// context만들기
export const AAAContext = createContext<IContext>({});

export default function ContextAPIPage() {
  const [isEdit, setIsEdit] = useState(true);
  function change() {
    setIsEdit(false);
    if (isEdit !== true) {
      setIsEdit(true);
    }
  }

  const value = {
    isEdit,
    change,
  };

  return (
    <AAAContext.Provider value={value}>
      <ContextAPI />
    </AAAContext.Provider>
  );
}
