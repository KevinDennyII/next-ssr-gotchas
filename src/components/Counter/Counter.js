'use client';
import React from 'react';

import Spinner from '../Spinner';

function Counter() {
  const [count, setCount] = React.useState(null);

  // so useEffect does not get rendered on the server, so it is only running one time
  // from the client
  React.useEffect(() => {
    const savedValue = window.localStorage.getItem('saved-count');
    setCount(savedValue ? Number(savedValue) : 0)
  }, [])

  React.useEffect(() => {
    window.localStorage.setItem('saved-count', count);
  }, [count]);

  return (
    <button
      className="count-btn"
      onClick={() => setCount(count + 1)}
    >
      Count:{' '}
      {typeof count === 'number' ? count : <Spinner />}
    </button>
  );
}

export default Counter;
