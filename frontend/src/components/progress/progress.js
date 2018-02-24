import React, { Component } from 'react'
import styles from './styles.css'
import excavator from '../../assets/excavator.svg'

var loading;
var elem;
function move() {
    elem = document.getElementsByClassName("progress-bar")[0];   
    var width = 1;
    loading = setInterval(function() {
        if (width >= 100) {
            width = 0;
        } 
        width++; 
        elem.style.width = width + '%'; 
    }, 20); // repeat forever
}

function stop() {
    clearInterval(loading);
    elem.style.width = 1 + '%'; 
}

class Progress extends Component {

    constructor(props) {
        super();
    }

    render() {
        return(
            <div className="mining-item">
                <div className="mining-left">
                    <div className="mining-machine">
                        <a href="https://codepen.io/MarioDesigns/">
                            <img src={excavator} alt="excavator" />
                        </a>
                    </div>
                    <div className="progress">
                        <div className="progress-bar"></div>
                    </div>
                </div>
                <div className="mining-right">
                    <button onClick={move}>Price {this.props.price}</button> 
                    <button onClick={stop}>Stop me</button> 
                </div>
            </div>
        )
    }
}

export default Progress
