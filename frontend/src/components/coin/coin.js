import React, { Component } from 'react'
import styles from './styles.css'
import bitcoin from '../../assets/bitcoin.png'
import ethereum from '../../assets/ethereum.png'
import ripple from '../../assets/ripplecoin.png'


class Coin extends Component {

    constructor(props) {
        super();
        this.state = {
            types: [bitcoin, ripple, ethereum]
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
                            <button className="coin-button" onClick={()=>this.props.fns[index].buy()}> BUY </button>
                            <button className="coin-button" onClick={()=>this.props.fns[index].sell()}> SELL </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Coin
