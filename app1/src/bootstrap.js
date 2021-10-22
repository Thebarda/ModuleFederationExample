import * as React from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { Remote } from './dynamicRemoteLoader';
import remotes from './dynamicRemoteLoader/remotes';
import './i18n';

function App() {
  const [count, setCount] = React.useState(0);
  const { t } = useTranslation();

  return (
    <>
      <h1>Hello from React component</h1>
      <p>{t('Welcome to React')}</p>
      <p>Count from App1: {count}</p>
      <Remote
        system={remotes[2]}
      />
      <Remote remote={remotes[1]} count={count}
        onIncrement={() => setCount(count + 1)}
        onDecrement={() => setCount(count - 1)} />
      <Remote remote={remotes[0]} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
