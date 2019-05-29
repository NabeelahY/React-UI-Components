import React from 'react';
import './Button.css';


function ActionButton(props) {
    return (
        <div>
            <button className= {props.actionStyle} onClick={() =>  props.handleClick(props.action)}>{props.action}</button>
        </div>
    )
}

export default ActionButton;
