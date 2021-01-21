import React from 'react';

import ModuleErrorBoundary from '../ModuleErrorBoundary';

const hooks = [
  {
    name: 'hello',
    Component: React.lazy(() => import('app3/hooks/Hello')),
  },
  {
    name: 'Counter',
    Component: React.lazy(() => import('app2/Counter')),
  },
  {
    name: 'Counter state',
    Component: React.lazy(() => import('app3/hooks/CounterState')),
  }
]

const LoadHook = ({ name, ...props }) => {
  const Component = hooks.find((hook) => hook.name === name).Component
  return (
    <ModuleErrorBoundary name={name}>
      <React.Suspense fallback={`Loading ${name}...`}>
        <Component {...props} />
      </React.Suspense>
    </ModuleErrorBoundary>
  )
}

export default LoadHook;