import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

  }

  increment = () => {
    this.setState({count: this.state.count + 1});
  }
  decrement = () => {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div className='counter-div'>
      <h1 className='head'>Counter App</h1>

        <h2>{this.state.count}</h2>
      <div className='counts'>
        <button onClick={this.decrement} className='decrement'>-</button>
        <button onClick={this.increment} className='increment'>+</button>
      </div>

      </div>
    );
  }
}
