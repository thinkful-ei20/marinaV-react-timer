import React from 'react';

export default function Counter(props) {
  return [
    <div>{props.counter}</div>,
    <button type="button" onClick={() => props.onStartCounter()}>Start</button>,
    <button type="button" onClick={() => props.onStopCounter()}>Pause</button>,
    <button type="button" onClick={() => props.onResetCounter()}>Reset</button>

  ];
}

// Counter.defaultProps = {
//   number: 0
// };