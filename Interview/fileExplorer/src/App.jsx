import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import explorer from './data/fileData';
import RootFolder from './component/RootFolder/RootFolder';
import useTraverseTree from './hooks/usetraverseTree';

function App() {
  const [folderData, setFolderData] = useState(explorer);
  const [counter, setCounter] = useState(0);
  const [click, setClick] = useState(0);
  const {insertNode} = useTraverseTree(0)
  
  const handleInsertnode = (folderId, item, isFolder) => {
    const finaltree = insertNode(folderData, folderId, item, isFolder);
    setFolderData(finaltree)
  }
  const handleCounter = (clickVal) => {
    if (clickVal === 0) {
      setCounter(counter + 1)
    } else if (clickVal === 1) {
      setCounter(counter + 1)
    } else if (clickVal === 2) {
      setCounter(0)
    }
  }
  const handleClick = (cb) => {
   setClick(click + 1);
   cb(click)
  }

  return (
    <>
      <RootFolder handleInsertnode={handleInsertnode} folderData={folderData} />
      <br /><br /><br /><br />
      <p>Current Counter Value: {counter} in {click} click</p>
      <button onClick={() => handleClick(handleCounter)}>Click me</button>
    </>
  )
}

export default App
