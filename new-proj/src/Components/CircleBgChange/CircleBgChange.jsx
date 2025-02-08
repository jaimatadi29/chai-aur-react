import { useEffect, useState } from 'react'
import '../../App.css'

function CircleBgChange() {
 const [color, setColor] = useState('red')

  const generateColor = () => {
    setColor(Math.random().toString(16).substr(-6));
   };

 useEffect(() => {
  setInterval(() => { 
     generateColor();
  }, 6000)
 }, [])
 
  return (
    <>
      
      <div className='circle' style={{backgroundColor: "#" + color}}></div>
      
    </>
  )
}

export default CircleBgChange;
