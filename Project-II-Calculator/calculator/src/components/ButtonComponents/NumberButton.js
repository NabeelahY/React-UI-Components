import React from 'react';
import './Button.css';

function NumberButton(props) {
    const { numbers } = props;

    return (
        numbers.map(no => {
           return <button className = {props.btnStyle}  onClick={() => props.handleClick(no)} key={no}>{no}</button>
        })
    )
}

export default NumberButton;
