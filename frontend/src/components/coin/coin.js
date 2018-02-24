import React, { Component } from 'react'
import styles from './styles.css'
import bitcoin from '../../assets/bitcoin.svg'
import ripple from '../../assets/ripple.svg'
import ethereum from '../../assets/ethereum.svg'


class Coin extends Component {

    constructor(props) {
        super();
        this.state = {
            values: [2, 3, 6]
        }
    }

    render() {
        return(
            <div className="coins">
                {this.state.values.map((val, index) => (
                    <div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Coin
