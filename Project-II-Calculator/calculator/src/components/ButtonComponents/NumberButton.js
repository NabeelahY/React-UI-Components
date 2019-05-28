import React from 'react';
import './Button.css';

function NumberButton(props) {
    const { numbers } = props;

    return (
        numbers.map(no => {
           return <div key={no}>{no}</div>
        })
    )
}

export default NumberButton;
