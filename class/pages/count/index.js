import { useState } from 'react';

export default function CountPage() {
  const [count, setCount] = useState(0);

  function aaa() {
    setCount((prev) => prev + 5);

    setCount((prev) => prev + 5);

    setCount((prev) => prev + 13);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={aaa}>+1</button>
    </>
  );
}
