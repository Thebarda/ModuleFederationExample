import React from 'react';
import { nanoid } from 'nanoid'

import ModuleErrorBoundary from '../ModuleErrorBoundary';
import loadComponent from './loadComponent';

const useDynamicLoadComponent = ({ url }) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!url) {
      return;
    }
    console.log(`Dynamic Script Loading: ${url}`);

    const element = document.createElement("script");
    element.src = `${url}?id=${nanoid(3)}`;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${url}`);
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    ready,
    failed,
  };
};

export const Remote = ({ remote, ...props }) =>  {
  const { ready, failed } = useDynamicLoadComponent({
    url: remote?.url,
  });

  if (!remote) {
    return <h2>Not remote specified</h2>;
  }

  if (!ready) {
    return <h2>Loading dynamic script: {remote.url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {remote.url}</h2>;
  }

  const Component = React.lazy(
    loadComponent({ scope: remote.scope, module: remote.module })
  );

  return (
    <ModuleErrorBoundary name={remote.module}>
      <React.Suspense fallback={`Loading remote ${remote.module}`}>
        <Component {...props} />
      </React.Suspense>
    </ModuleErrorBoundary>
  );
}