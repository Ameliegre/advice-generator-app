import React from 'react';
import patternD from './images/pattern-divider-desktop.svg'
import iconBtn from './images/icon-dice.svg'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [quote, setQuote] = useState('')

  const getQuote = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setQuote(response.data.slip)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getQuote()
  },[])
  
  const handleClick = () => {
    getQuote()
  }

  return (
    <div className="container mx-auto w-96 max-h-fit px-6 bg-dark-grayish-blue rounded-xl shadow p-4 m-12 
      flex flex-col items-center relative mt-60 mobile:w-72">
      <p className="uppercase text-neon-green text-xs mt-6">
        advice #{quote.id}
      </p>
      <p className="text-xl font-extrabold text-light-cyan mt-6 text-center">&quot;{quote.advice}&quot;</p>
      <img src={patternD} alt='pattern' className='my-8'/>
      <button type="submit" onClick={handleClick} className='bg-neon-green p-3 rounded-full cursor-pointer absolute -bottom-4 
      shadow-lg shadow-rose-950'>
        <img src={iconBtn} alt='icon' className='h-4'/>
      </button>
  </div>
  );
}

export default App;