import React from "react";
import icon_menu from "../assets/icon-menu.svg";
import icon_logout from "../assets/icon-logout-white.svg";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {

  const {setShowTabletSidebar} = useAppContext();

  return (
    <div className="sm:hidden px-8 py-5 flex justify-between items-center">
      <button onClick={() => setShowTabletSidebar(true)}>
        <img draggable={false} className="size-[18px]" src={icon_menu} alt="menu icon" />
      </button>

      <button onClick={() => window.location.href = "https://dashboard-edai.netlify.app/"} className="flex items-center text-sm gap-3 duration-200 hover:bg-light/10">
        <img draggable={false} src={icon_logout} alt="" className="size-3.5" />
        Kirjaudu u10S
      </button>
    </div>
  );
};

export default Header;
