import React, { Component } from 'react';
import './App.css';
import Progress from './components/progress/progress';
import Coin from './components/coin/coin';
import axios from 'axios';


//let current = "";
const reducer = (accumulator, currentValue) => accumulator + currentValue;

class App extends Component {
  constructor() {
    super();
    this.state = {
      machine_prices: [2,4,9,10,11,24,56,89,100,120],
      machines_owned: [0,0,0,0,0],
      usd_amt: 10000,
      btc_amt: 0,
      eth_amt: 0,
      xrp_amt: 0,
    }
    this.buy_machine = this.buy_machine.bind(this);
  }
  
  buy_machine(index){
      let current = this.state.machines_owned;
      current[index] += 1;
      this.setState({machines_owned: current});
  }

  componentDidMount(){
      var self = this;
      var usd_amt = this.state.usd_amt;
      var btc_amt = this.state.btc_amt;
      var eth_amt = this.state.eth_amt;
      var xrp_amt = this.state.xrp_amt;
      var machines = this.state.machines_owned;
      setInterval(function(){
          axios.get("http://localhost:8080/")
          .then(function(response){
           let data = response.data;
           //console.log(machines.map(function(item){return item*(1/data.difficulty)}).reduce(reducer));
           let btc_amt1 = btc_amt + machines.map(function(item){return item*(1/data.difficulty)}).reduce(reducer);
           let net_asset_value = usd_amt + (btc_amt1 * data.btc) + (eth_amt * data.eth) + (xrp_amt * data.xrp);
           self.setState({btc: data.btc, eth: data.eth, xrp: data.xrp, timestamp: data.timestamp, difficulty: data.difficulty, total: net_asset_value, btc_amt: btc_amt1});
          console.log(JSON.stringify(self.state))
          });
      },3000);
      
  }
    
  
    
  render() {
    return (
      <div className="main">
        <div className="main-left">
          <div className="assets">
          </div>
          <div className="coins">
            <Coin/>
          </div>
        </div>
        <div className="main-right">
          <div className="mining">
            <Progress callback={this.buy_machine}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
