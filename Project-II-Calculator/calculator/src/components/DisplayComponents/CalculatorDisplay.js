import React from 'react';
import './Display.css';


function CalcDisplay (props) {
    return (
        <div className='display'>{props.total}</div>
    )
}

export default CalcDisplay;