import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';
import OperatorButton from './OperatorButton';

function ButtonContainer (props) {
    return (
        <div>
            <div>
                <ActionButton />
                <NumberButton />
                <ActionButton />
            </div>
            <div>
                <OperatorButton />
            </div>
        </div>
    )
}

export default ButtonContainer;