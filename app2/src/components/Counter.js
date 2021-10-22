import React from 'react';
import { useTranslation } from 'react-i18next';

function Counter(props) {
  const { t } = useTranslation();
  return (
    <>
      <h3>Counter with props</h3>
      <p>{t('Welcome to React')}</p>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrement}>Increment</button>
      <button onClick={props.onDecrement}>Decrement</button>
    </>
  );
}

export default Counter
