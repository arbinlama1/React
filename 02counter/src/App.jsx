import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5);
  let [message, setMessage] = useState('');

  const addValue = () => {
    if(counter < 20) {
    setCounter(counter + 1);
    }else {
      setMessage('You reach maximum value');
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }else {
      setMessage('Sorry you can not decrease the value');
    }
  }
  return (
    <>
      <h1>Practice hook</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}> Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <h3>{message}</h3>
    </>
  )
}

export default App
