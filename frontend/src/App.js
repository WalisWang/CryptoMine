import React, { Component } from 'react';
import './App.css';
import Property from './components/property/property';
import Progress from './components/progress/progress';
import Coin from './components/coin/coin';


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
            <Property/>
          </div>
          <div className="coins">
            <Coin/>
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
