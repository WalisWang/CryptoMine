import React, { Component } from 'react'
import styles from './styles.css'
import ex0 from '../../assets/ex0.png'
import ex1 from '../../assets/ex1.png'
import ex2 from '../../assets/ex2.png'
import ex3 from '../../assets/ex3.png'
import ex4 from '../../assets/ex4.png'


class Progress extends Component {

    constructor(props) {
        super();
    }

    render() {
        return(
            <div className="mining-item">
                <div className="machine-item">
                    <div className="mining-left">
                        <div className="mining-machine">
                            <img src={this.props.ex} alt={ex0}/>
                        </div>
                    </div>
                    <div className="mining-mid">
                       <p class="speed"> {this.props.speed}X
                            <span class="tooltiptext">Mining Speed</span>
                        </p>
                    </div>
                    <div className="mining-right">
                        <div className="mining-count">
                            {this.props.owned} /10
                        </div>
                        <div className="mining-tag">
                            <button className="mine-button" onClick={()=>this.props.buy_machine(this.props.index)}>
                                <span style={{backgroundColor: "coral", padding: "10px"}}>${Number(this.props.btc * (this.props.index + 1)* (Math.pow(2,this.props.owned))).toFixed(2) }</span>
                                <span style={{backgroundColor: "grey", padding: "10px"}}>BUY ONE</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Progress
