import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrencyInputBox from './componens/CurrencyInputBox'
import CurrencyCustomHook from './CustomHook/CurrencyCustomHook'

function App() {
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('IND');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyOption = CurrencyCustomHook(from);
  console.log(currencyOption);
  
  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}>
          <div className='w-full'>
            <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
              <h1>Currency Convertor</h1>
              <div>
                <CurrencyInputBox
                label='To' />
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
