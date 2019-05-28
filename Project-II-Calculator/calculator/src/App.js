import React, {useState} from 'react';
import './App.css';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import OperatorButton from './components/ButtonComponents/OperatorButton';

const data = {
  numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1'],
  operators: ['÷', 'x', '-', '+', '='],
  zero: '0',
  clear: 'clear'
}



const App = () => {
 const [count, updateCount] = useState(0);

const handleClick = (value) => {
  updateCount(count + value)
};
 return (
    <div className="cal-container">
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

      <CalcDisplay total={count} />
      <div className='button-container'>
        <div className='btn-container'>
          <div className= 'action'>
            <ActionButton action={data.clear}  handleClick={handleClick} />
          </div>
          <div className= 'number'>
            <NumberButton numbers={data.numbers} handleClick={handleClick} />
          </div>
          <div>
            <ActionButton action={data.zero}  handleClick={handleClick} />
          </div>
        </div>
        <div className = 'operators'>
          <OperatorButton operators={data.operators} handleClick={handleClick} />
        </div>
      </div>

    </div>
  );
};

export default App;
