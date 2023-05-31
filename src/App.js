import patternD from './images/pattern-divider-desktop.svg'
import iconBtn from './images/icon-dice.svg'
import axios from 'axios'
import { useState } from 'react'

function App() {

  const [quote , setQuote] = useState('')

  const getQuote = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      console.log(response.data.slip);
      setQuote(response.data.slip)
    } catch (error) {
      console.error(error);
    }
  }
  
  const handleClick = () => {
    getQuote()
  }

  
  return (
    <div className="container mx-auto w-2/5 h-60 px-6 bg-dark-grayish-blue rounded-xl shadow border p-4 m-12 
      flex flex-col items-center relative">
      <p className="uppercase text-neon-green text-xs mt-6">
        advice #{quote.id}
      </p>
      <p className="text-xl font-extrabold text-light-cyan mt-6">
        "{quote.advice}"
      </p>
      <img src={patternD} alt='pattern' className='mt-6'/>
      <button type="submit" onClick={handleClick} className='bg-neon-green p-3 rounded-full cursor-pointer absolute bottom-0 hover:shadow-2xl hover:bg-red-600 hover:ease-in-out'>
        <img src={iconBtn} alt='icon' className='h-4'/>
      </button>
  </div>
  );
}

export default App;