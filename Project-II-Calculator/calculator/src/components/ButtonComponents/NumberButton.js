import React from 'react';
import './Button.css';

function NumberButton(props) {
    const { numbers } = props;

    return (
        numbers.forEach(no => {
           return <div>{no}</div>
        })
    )
}

export default NumberButton;
