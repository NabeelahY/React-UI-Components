import React from 'react';
import './Button.css';

function OperatorButton(props) {
    const { operators } = props;

    return (
        operators.map(operator => {
           return <button className= {props.operatorStyle} onClick={() => props.handleClick(operator)} key={operator}>{operator}</button>
        })
    )
}

export default OperatorButton;
