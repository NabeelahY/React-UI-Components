import React from 'react';
import './Button.css';

function OperatorButton(props) {
    const { operators } = props;

    return (
        operators.map(operator => {
           return <div key={operator}>{operator}</div>
        })
    )
}

export default OperatorButton;
