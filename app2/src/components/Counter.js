import React from 'react';

function Counter(props) {
  return (
    <>
      <h3>Counter with props</h3>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrement}>Increment</button>
      <button onClick={props.onDecrement}>Decrement</button>
    </>
  );
}

export default Counter
