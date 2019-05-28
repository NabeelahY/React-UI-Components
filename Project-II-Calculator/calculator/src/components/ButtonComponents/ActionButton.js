import React from 'react';
import './Button.css';


function ActionButton(props) {
    return (
        <div>
            <button>{props.action}</button>
        </div>
    )
}

export default ActionButton;
