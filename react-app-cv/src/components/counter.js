import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }

  return (
    <div className="counter-container">
      <h2>Counter is: {count}</h2>
      <button className="inc-btn" onClick={inc}>
        Increment
      </button>
      <button className="dec-btn" onClick={dec}>
        Decrement
      </button>
    </div>
  );
}
