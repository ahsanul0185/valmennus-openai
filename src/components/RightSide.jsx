import React from 'react'
import SettingsIcon from '../utils/SettingsIcon';

const topics = [
  "Aritmeettiset ja geometriset lukujonot",
  "Summakaavat ja niiden soveltaminen",
  "Sarjojen konvergenssi",
  "Tehtävät lukuun"
];

const RightSide = () => {



  return (
    <div className='hidden lg:flex flex-col justify-between h-screen w-64 py-8 px-6'>

      {/* Settings icon */}
<SettingsIcon />


      <div>
        <h2 className='mb-4'>Lukujonot ja sarjat</h2>

        <ul className='text-xs flex flex-col gap-3'>
          {topics.map((topic, idx) => (<li key={idx} className='cursor-pointer hover:translate-x-1 duration-200'>{ topic }</li>))}
        </ul>
      </div>

      <div>
      </div>

    </div>
  )
}

export default RightSide