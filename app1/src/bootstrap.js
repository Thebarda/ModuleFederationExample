import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MemoizedLoadHook from './hook/LoadHook';

function App() {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [showCounterState, setShowCounterState] = useState(false);
  const [gretting, setGretting] = useState(false);
  return (
    <>
      <h1>Hello from React component</h1>
      <button onClick={() => setShowCounter((v) => !v)}>Show Counter</button>
      <button onClick={() => setShowCounterState((v) => !v)}>Show Counter State</button>
      <button onClick={() => setGretting((v) => !v)}>Gretting from module 3</button>
      <p>Count from App1: {count}</p>
      { showCounter && <MemoizedLoadHook
        name="Counter"
        count={count}
        onIncrement={() => setCount(count + 1)}
        onDecrement={() => setCount(count - 1)}
      />}
      {showCounterState && <MemoizedLoadHook name="Counter state" />}
      {gretting && <MemoizedLoadHook name="hello" />}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
