import React, { Component } from 'react';
import './App.css';
import Property from './components/property/property';
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

      setInterval(function(){
          
          var usd_amt = self.state.usd_amt;
          var btc_amt = self.state.btc_amt;
          var eth_amt = self.state.eth_amt;
          var xrp_amt = self.state.xrp_amt;
          var machines = self.state.machines_owned;

          axios.get("http://localhost:8080/")
          .then(function(response){
           let data = response.data;
           let new_btc_amt = btc_amt + machines.map(function(item){return item*(1/data.difficulty)}).reduce(reducer);
           let new_eth_amt = eth_amt + machines.map(function(item){return item*((Math.random()*2)/data.difficulty)}).reduce(reducer);
           let new_xrp_amt = xrp_amt + machines.map(function(item){return item*((Math.random()*10)/data.difficulty)}).reduce(reducer);
           let net_asset_value = usd_amt + (new_btc_amt * data.btc) + (new_eth_amt * data.eth) + (new_xrp_amt * data.xrp);
           console.log((new_btc_amt * data.btc),(new_eth_amt * data.eth),(new_xrp_amt * data.xrp))
          self.setState({btc: data.btc, eth: data.eth, xrp: data.xrp, timestamp: data.timestamp, difficulty: data.difficulty, total: net_asset_value, btc_amt: new_btc_amt, eth_amt: new_eth_amt, xrp_amt: new_xrp_amt});
          console.log(JSON.stringify(self.state))
          });
      },3000);
  }
    
  
    
  render() {
    let vals = [this.state.btc, this.state.eth, this.state.xrp];
    let coin_amounts = [this.state.btc_amt, this.state.eth_amt, this.state.xrp_amt];
    return (
      <div className="main">
        <div className="main-left">
          <div className="assets">
            <Property total={this.state.total} amounts={coin_amounts}/>
          </div>
          <div className="coins">
            <Coin coin_values={vals}/>
            {/*<Coin/>*/}
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
