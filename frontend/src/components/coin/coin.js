import React, { Component } from 'react'
import styles from './styles.css'
import bitcoin from '../../assets/bitcoin.png'
import dogecoin from '../../assets/dogecoin.png'
import ripple from '../../assets/ripplecoin.png'


class Coin extends Component {

    constructor(props) {
        super();
        this.state = {
            types: [bitcoin, ripple, dogecoin]
        }
    }

    render() {
        return(
            <div className="coin-item">
                {this.props.coin_values.map((val, index) => (
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <img src={this.state.types[index]} className="coin-icon">
                        </img>
                        <p style={{minWidth: "100px", padding: "5px", flex:"2", color: "#b83432"}}>${val}</p>
                        <div id="boi">
                        <button className="coin-button"> BUY </button>
                        <button className="coin-button"> SELL </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Coin
