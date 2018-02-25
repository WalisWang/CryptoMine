import React, { Component } from 'react'
import styles from './styles.css'
import total from '../../assets/money-bag.png'
import bitcoin from '../../assets/bitcoin.png'
import ethereum from '../../assets/ethereum.png'
import ripple from '../../assets/ripplecoin.png'


class Property extends Component {

    constructor(props) {
        super();
        this.state = {
            total: "$" + Number(10000).toFixed(2).toLocaleString('en'),
            bit: 0.00,
            dog: 0.00,
            rip: 0.00,
        }
    }
    
    componentWillReceiveProps(props){
        let total = "$" + (props.total).toFixed(2).toLocaleLowerCase('en');
        let btc = props.amounts[0].toFixed(2).toLocaleLowerCase('en');
        let eth = props.amounts[1].toFixed(2).toLocaleLowerCase('en');
        let xrp = props.amounts[2].toFixed(2).toLocaleLowerCase('en');

        this.setState({total: total, bit:btc, dog: eth, rip:xrp});
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
                        <p className="img-des">ripple</p>
                        <p>{this.state.rip}</p>
                    </div>
                    <div className="bit-with-text">
                        <img src={ethereum} alt="ethereum" className="bit-icon"></img>
                        <p className="img-des">ethereum</p>
                        <p>{this.state.dog}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Property
