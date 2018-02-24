import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Progress from './components/progress/progress';
class App extends Component {
  constructor() {
    super();
    this.state = {
      machine_prices: [2,4,9,10,11,24,56,89,100,120]
    }
  }
  render() {
    return (
      <div className="main">
        <div className="main-left">
          <div className="assets">
          </div>
          <div className="coins">
          </div>
        </div>
        <div className="main-right">
          <div className="mining">
            <Progress/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
