import React from 'react';

import Counter from './counter';

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      hrs: 0,
      min: 0,
      sec: 0
    }
  }

  updateCount() {
    let hours = this.state.hrs;
    let minutes = this.state.min;
    let seconds = this.state.sec;

    seconds += 0.01;

    if(seconds > 59.99) {
      minutes += 1;
      seconds = 0;
    }
    if(minutes === 59) {
      hours += 1;
      minutes = 0;
    }

    let counter = `${hours}:${minutes}:${seconds.toFixed(2)}`;
    this.setState({
      counter,
      hrs: hours,
      min: minutes,
      sec: seconds
    });
  }

  startCounter() {
    this.timer = setInterval(() => {
      this.updateCount()
      }, 10);
  }

  stopCounter() {
    clearInterval(this.timer);
  }

  resetCounter() {
    clearInterval(this.timer);
    this.setState({
      counter: 0,
      min: 0,
      sec: 0
    })
  }

  render() {
    return [
      <Counter
        counter={this.state.counter}
        onStartCounter={() => this.startCounter()}
        onStopCounter={() => this.stopCounter()}
        onResetCounter={() => this.resetCounter()}
      />
    ];
  }
}