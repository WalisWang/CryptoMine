import React, { Component } from 'react';
import './App.css';
import Property from './components/property/property';
import Progress from './components/progress/progress';
import Coin from './components/coin/coin';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      machine_prices: [2,4,9,10,11,24,56,89,100,120]
    }
  }
  componentDidMount(){
      var self = this;
      setInterval(function(){
          axios.get("http://localhost:8080/")
          .then(function(response){
           let data = response.data;
           console.log(data);
           self.setState({btc: data.btc, eth: data.eth, xrp: data.xrp, timestamp: data.timestamp});
          });
      },3000);
      
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
