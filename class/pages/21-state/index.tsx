import { useState } from 'react';

export default function StatePage() {
  const [count, setCount] = useState(0);

  function onclickButton() {
    // setCount((prev) => prev + 1);
    setCount((pyyyyye) => pyyyyye + 1);
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={onclickButton}> + 1 </button>
    </>
  );
}
