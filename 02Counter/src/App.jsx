import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let [counterMsg, setCounterMsg] = useState('');
 const addNumber = () => {
  if (count < 20) {
    setCount(++count);
    setCount(++count);
    setCount(++count);
    setCount(++count);
  } else {
    setCounterMsg('We can increase Counter Till 20')
  }
 }
 const deleteNumber = () => {
  if (count >= 1){
   setCount(--count);
  } else {
    setCounterMsg(`We can't decrease Counter to negative !!!`)
  }
 }
  return (
    <>
      <h1>Chai aur Code React</h1>
      <h2>Counter : {count}</h2>
      <button  onClick={() => addNumber()}>Increment</button><br /><br />
      <button onClick={() => deleteNumber()}>Decrement</button>
      <br /><br />
      {counterMsg && <h3>{counterMsg}</h3>}
    </>
  )
}

export default App
