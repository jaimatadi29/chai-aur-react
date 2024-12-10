import {useState} from 'react';

const colorsList = ['red', 'green', 'blue', 'black', 'Olive', 'Gray', 'Yellow', 'Pink', 'Purple', 'Lavender', 'White']
function App() {
  const [colorClass, setColorClass] = useState('Olive')

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: colorClass}}>
        <div className='fixed flex flex-wrap p-2 inset-x-0 bottom-12 justify-center'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          {colorsList?.map(color => {
            return (
              <button 
                      className='outline-none px-4 py-1 text-white rounded-full shodow-lg'
                      style={{backgroundColor: color !== 'White' ? color : '#FBE8F6', color: '#fff'}}
                      onClick={() => setColorClass(color)}
                      >{color}</button>
            )
          })}
          </div>
        </div>
    </div>
  )
}

export default App
