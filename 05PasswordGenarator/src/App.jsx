import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const passwordRef = useRef(null);
 const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(isNumberAllowed) str += '0123456789';
    if(isCharAllowed) str += '!@#$%^&*-_+=[]{}~`';
    for (let i = 0; i <= length; i++) {
     let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass);
 }, [length, isNumberAllowed, isCharAllowed]);
 const copyToClipBoard = () => {
  passwordRef?.current?.select();
  passwordRef.current?.setSelectionRange(0, 999);
  window.navigator.clipboard.writeText(password);
 }
 useEffect(() => {
  passwordGenerator()
 }, [length, isNumberAllowed, isCharAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-whie text-center my-3'>Password Generator</h1>
        <div className='flex w-3/4 bg-gray-500 p-5 h-24 rounded-md text-center gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          className='p-2 rounded-sm'
          type="text" 
          name="password"
          placeholder='Password'
          value={password}
          ref={passwordRef}
          />
          <button
          onClick={copyToClipBoard}
          className='bg-lime-950 p-2 rounded-sm'
          >Copy</button>
          </div>
        </div>
        <div className='flex text-xs gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input name='passwordRange' type="range" min={8} max={100} className='my-3' value={length} onChange={(e) => setLength(e.target.value)} />
          <label style={{paddingLeft: '8px'}} htmlFor="passwordRange">Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox" name="NumberAllowed" onChange={() => setIsNumberAllowed((prev) => !prev)} />
          <label htmlFor="NumberAllowed">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox" name="charAllowed" onChange={() => setIsCharAllowed((prev) => !prev)} />
          <label htmlFor="charAllowed">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
