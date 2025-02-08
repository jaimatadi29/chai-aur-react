import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const myRef = useRef();
 const [myData, setMyData] = useState([])
 const data = [];
function handleKeyPress(e) {
  console.log( myRef )
  if (e.key === 'Enter') {
    data.push(e.target.value);
    setMyData(() => myData.push(data))
    e.target.value = '';
  }
}

  return (
    <>
     <h1>This is my first own Project</h1>
     <label htmlFor="doc-lists">Enter All your document list</label><br/><br/>
     <textarea ref={myRef} name="doc-lists" id="doclists" onKeyPress={(e) => handleKeyPress(e)}></textarea>
     <br/><br/>
     <ul>
      <li>Data</li>
        {myData?.map((item) => {
          return (

            <li>{item}</li>
          )
        })}
     </ul>
    </>
  )
}

export default App
