import React, { Component } from 'react'
import styles from './styles.css'
import total from '../../assets/money-bag.png'
import bitcoin from '../../assets/bitcoin.png'
import dogecoin from '../../assets/dogecoin.png'
import ripple from '../../assets/ripplecoin.png'


class Property extends Component {

    constructor(props) {
        super();
        this.state = {
            total: "$" + Number(123443645).toLocaleString('en'),
            bit: 234,
            dog: 3464,
            rip: 546,
        }
    }

    render() {
        return(
            <div className="property-item">
                <div className="total">
                    <div className="icon-with-text">
                        <img src={total} alt="total" className="mon-icon"/>
                        <p className="img-des">Total Property</p>
                        <p className="number">{this.state.total}</p>
                    </div>
                </div>
                <div className="bit">
                    <div className="bit-with-text">
                        <img src={bitcoin} alt="bit" className="bit-icon"></img>
                        <p className="img-des">bitcoin</p>
                        <p>{this.state.bit}</p>
                    </div>
                    <div className="bit-with-text">
                        <img src={ripple} alt="ripple" className="bit-icon"></img>
                        <p className="img-des">ripplecoin</p>
                        <p>{this.state.rip}</p>
                    </div>
                    <div className="bit-with-text">
                        <img src={dogecoin} alt="dogecoin" className="bit-icon"></img>
                        <p className="img-des">dogecoin</p>
                        <p>{this.state.dog}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Property
