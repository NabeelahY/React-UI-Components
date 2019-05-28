import React from 'react';
import './Button.css';

function OperatorButton(props) {
    const { operators } = props;

    return (
        operators.forEach(operator => {
           return <div>{operator}</div>
        })
    )
}

export default OperatorButton;
