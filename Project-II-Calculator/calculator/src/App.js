import React from 'react';
import './App.css';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import OperatorButton from './components/ButtonComponents/OperatorButton';

const data = {
  numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  operators: ['=', '+', '-', 'x', '÷'],
  zero: '0',
  clear: 'clear'
}

const App = () => {
  return (
    <div>
      {/* <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p> */}

      <CalcDisplay />
      <div>
        <div>
          <ActionButton action = {data.clear}/>
          <NumberButton numbers = {data.numbers} />
          <ActionButton action = {data.zero} />
        </div>
        <div>
          <OperatorButton operators = {data.operators} />
        </div>
      </div>

    </div>
  );
};

export default App;
