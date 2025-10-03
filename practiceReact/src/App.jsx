import { useCallback, useState,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")
  
  
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '~!`@#$%^&*()_+{}[]';

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },[length, numberAllowed, charAllowed, setPassword])

  useEffect(()=> {
    passwordGenerator();
  },[length, numberAllowed, charAllowed, passwordGenerator]);

  const passwordRef = useRef(null);
  const copyToClip = useCallback (() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  })
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
    rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl mt-4 my-3 text-center text-white '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input
            type="text"
            value={password}
            readOnly
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            ref={passwordRef} />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'
            onClick={copyToClip}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }} />
            <label htmlFor="number">Number</label>
          </div>
          <div className='flex gap-x-1 items-center'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onClick={() => {
                setCharAllowed((prev) => !prev);
              }} />
            <label htmlFor="char">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
