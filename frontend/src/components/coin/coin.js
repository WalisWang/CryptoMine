import React, { Component } from 'react'
import styles from './styles.css'
import bitcoin from '../../assets/bitcoin.png'
import ethereum from '../../assets/ethereum.png'
import ripple from '../../assets/ripplecoin.png'


class Coin extends Component {

    constructor(props) {
        super();
        this.state = {
            types: [bitcoin, ripple, ethereum],
            names: ["Bicoin", "Ripple Coin", "Etherem Coin"]
        }
    }

    render() {
        return(
            <div className="coin-item">
                {this.props.coin_values.map((val, index) => (
                    <div key={index} className="icons">
                        <img src={this.state.types[index]} className="coin-icon">
                        </img>
                        <p className="coin-val">${val}
                            <span class="tooltiptext">Current Value of {this.state.names[index]}</span>
                        </p>
                        <div id="boi">
                            <button className="coin-button" onClick={()=>this.props.fns[index].buy()}> BUY </button>
                            <button className="coin-button" onClick={()=>this.props.fns[index].sell()}> SELL </button>
                        </div>
                    </div>
                ))}
                <h1 style={{textAlign:"center",fontSize:"2em"}}>{this.props.date}</h1>
            </div>
        )
    }
}

export default Coin
