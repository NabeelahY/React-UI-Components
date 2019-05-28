import React from 'react';
import './Button.css';


function ActionButton(props) {
    return (
        <div>
            <button className= 'action-btn' onClick={() =>  props.handleClick(props.action)}>{props.action}</button>
        </div>
    )
}

export default ActionButton;
