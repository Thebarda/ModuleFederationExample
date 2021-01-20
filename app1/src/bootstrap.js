import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ModuleErrorBoundary from './ModuleErrorBoundary';

const Counter = React.lazy(() => import('app2/Counter'));
const HookCounterState = React.lazy(() => import('app3/hooks/CounterState'));
const HookHello = React.lazy(() => import('app3/hooks/Hello'));

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello from React component</h1>
      <p>Count from App1: {count}</p>
      <ModuleErrorBoundary name="Counter">
        <React.Suspense fallback='Loading Counter...'>
          <Counter
            count={count}
            onIncrement={() => setCount(count + 1)}
            onDecrement={() => setCount(count - 1)}
          />
        </React.Suspense>
      </ModuleErrorBoundary>
      <ModuleErrorBoundary name="Counter state">
        <React.Suspense fallback='Loading Counter state...'>
          <HookCounterState />
        </React.Suspense>
      </ModuleErrorBoundary>
      <ModuleErrorBoundary name="Hello">
        <React.Suspense fallback='Loading Hello...'>
          <HookHello />
        </React.Suspense>
      </ModuleErrorBoundary>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
