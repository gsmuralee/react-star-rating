import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {getClockTime} from './lib/clock.js'
console.log(render)
const {Component} = React;

const target = document.getElementsByClassName('app');

class Clock extends Component {
    constructor(){
        super();
        this.state = getClockTime();
    }

    componentDidMount(){
        this.ticking = setInterval(() => {
            this.setState(getClockTime())
        }, 1000)
        
    }

    render(){
        const {hours, minutes, seconds} = this.state;
        return (
            <div className = "clock">
                <span> {hours} </span>
                <span> : </span>
                <span> {minutes} </span>
                <span> : </span>
                <span> {seconds} </span>
                <button onClick={this.props.onClose}>x</button>
             </div>
        )
    }

}


export default Clock