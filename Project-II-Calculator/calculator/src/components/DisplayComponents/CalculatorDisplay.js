import React from 'react';
import './Display.css';


function CalcDisplay (props) {
    return (
        <div className= {props.displayStyle} >{props.total}</div>
    )
}

export default CalcDisplay;