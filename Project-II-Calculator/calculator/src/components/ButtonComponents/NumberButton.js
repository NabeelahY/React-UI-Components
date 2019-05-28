import React from 'react';
import './Button.css';

function NumberButton(props) {
    const { numbers } = props;

    return (
        numbers.map(no => {
           return <button className = 'no-key' key={no}>{no}</button>
        })
    )
}

export default NumberButton;
