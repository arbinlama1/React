import { useState } from 'react'
import './App.css'
import Card from './components/card';
function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    name: "arbin",
    age: 21
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Hello world!
      </h1>
      <Card username="arbin" btnText="Click Me"/>
      <Card username="Bibash"/>
    </>
  )
}

export default App
