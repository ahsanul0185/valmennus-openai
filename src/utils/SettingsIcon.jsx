import React, { useState } from 'react'
import icon_settings from "../assets/icon-settings.svg"
import icon_settings_2 from "../assets/icon-settings-2.svg"
import icon_logout from "../assets/icon-logout.svg"

const SettingsIcon = () => {

    const [showSettingsModal, setShowSettingsModal] = useState(false);

  return (
    <div className='relative flex justify-end px-2'>
    <button onClick={() => setShowSettingsModal(prev => !prev)}>
      <img draggable={false} src={icon_settings} alt="icon settings" />
    </button>

    {/* small popup */}
    <div className={`absolute top-full translate-y-2 right-0 bg-white rounded-2xl text-black text-xs w-44 origin-top-right overflow-clip duration-300 ${!showSettingsModal ? " opacity-0" : "opacity-100"}`}>
      <button className='flex items-center gap-3 px-4 py-2.5 w-full duration-200 hover:bg-light/10'>
        <img draggable={false} src={icon_settings_2} alt="" className="size-4" />
        Asetukset
      </button>

      <hr />

      <button onClick={() =>
          (window.location.href = "https://dashboard-edai.netlify.app/")
        } className='flex items-center gap-3 px-4 py-2.5 w-full duration-200 hover:bg-light/10'>
        <img draggable={false} src={icon_logout} alt="" className="size-4" />
        Kirjaudu u10S
      </button>  
    </div>
  </div>
  )
}

export default SettingsIcon