import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ModuleErrorBoundary from './ModuleErrorBoundary';

const Counter = React.lazy(() => import('app2/Counter'));

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello from React component</h1>
      <ModuleErrorBoundary>
        <React.Suspense fallback='Loading Counter...'>
          <Counter
            count={count}
            onIncrement={() => setCount(count + 1)}
            onDecrement={() => setCount(count - 1)}
          />
        </React.Suspense>
      </ModuleErrorBoundary>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
