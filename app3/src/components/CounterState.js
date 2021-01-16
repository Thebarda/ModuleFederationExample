import * as React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h3>Counter with his own state</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount((v) => v+1)}>Increment</button>
      <button onClick={() => setCount((v) => v-1)}>Decrement</button>
    </>
  );
}

export default Counter
