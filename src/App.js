import React, {useState} from 'react';
import Calculate from './components/Calculate';
import Solvings from './components/Solvings';



function App() {
  const [count, setCount] = useState(() => {
    console.log('xxxyzzzz')
    return 100
  })
  function Multiplier() {
    setCount(multiplier => multiplier * 1000)
  }

  function Subtractor() {
    setCount(subtractor => subtractor - 10)
  }
  return (
    <div>
      <button onClick={Subtractor}>-</button>
      <span>{count}</span>
      <button onClick={Multiplier}>X</button>
      <Calculate />
      <Solvings />
    </div>
  );
}

export default App;
