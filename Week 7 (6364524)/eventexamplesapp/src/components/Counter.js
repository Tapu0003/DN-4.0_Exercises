import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }, () => {
     
    });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert("Hello! Welcome to the website.");
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <br /><br />
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />
        <button onClick={this.sayHello}>Say welcome</button>
      </div>
    );
  }
}

export default Counter;

