import React from 'react'
import zenitsu from './img/zenitsu.png'
const Top = () => {
  return (
    <div className='top'>
        
    <div className='h-120 w-80% m-10 flex rounded-md bg-[#faebd7] '>
        <div className='h-60 w-700 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] bg-[#deb887] relative'>
        <h1 className='text-5xl ml-15 pt-5 w-25'>ZENITSU</h1>
        <p className='text-sm w-150 ml-15 pt-5'>Zenitsu wields the Thunder 
            Breathing technique, which he masters through instinct 
            rather than formal training, allowing him to unleash 
            devastating attacks like the First Form: Thunderclap 
            and Flash. Despite his constant complaints, fear of 
            demons, and obsession with marrying Nezuko, Zenitsu 
            proves his worth in battles, particularly against 
            powerful foes, showcasing a hidden bravery and loyalty 
            to his friends. His comedic antics, such as his love 
            confessions and exaggerated reactions, provide much-needed
             levity to the series, making him a fan-favorite for his 
             relatability and growth throughout the story.</p>
                </div>
            <img className='h-150 absolute ml-195 top-5' src={zenitsu} alt="zenitsu" />
            
            <div id='quote1' className='bg-amber-50 h-40 w-40 absolute mt-75 ml-20 rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
              
            </div>
            <div id='quote2' className='bg-amber-50 h-40 w-40 absolute mt-65 ml-45 rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'>
              
            </div>

            <div id='grandfather' className='bg-amber-50 h-50 w-80 absolute mt-65 ml-100 rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.1)]'></div>
    </div>
    </div>
  )
}

export default Top
