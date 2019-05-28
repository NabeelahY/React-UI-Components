import React from 'react';
import './Button.css';


function ActionButton(props) {
    return (
        <div>
            <button className= 'action'>{props.action}</button>
        </div>
    )
}

export default ActionButton;
