import React, { Component } from 'react'
import styles from './styles.css'
import bitcoin from '../../assets/bitcoin.svg'
import ripple from '../../assets/ripple.svg'
import ethereum from '../../assets/ethereum.svg'


class Coin extends Component {

    constructor(props) {
        super();
        this.state = {
            values: [2, 3, 6],
            types: [bitcoin, ripple, ethereum]
        }
    }

    render() {
        return(
            <div className="coins">
                {this.state.values.map((val, index) => (
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <img src={this.state.types[index]}>
                        </img>
                        <span>{val}$</span>
                        <button className="coin-button"> BUY </button>
                        <button className="coin-button"> SELL </button>
                    </div>
                ))}
            </div>
        )
    }
}

export default Coin
