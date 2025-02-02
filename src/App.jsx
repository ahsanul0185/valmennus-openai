import React from "react";
import { useAppContext } from "./contexts/AppContext";
import SidebarContent from "./components/SidebarContent";
import MiddleSection from "./components/MiddleSection";
import RightSide from "./components/RightSide";
import AiChatBox from "./components/AiChatBox";
import ToggleButton from "./utils/ToggleButton";
import icon_sidebar from "./assets/sidebar.svg";
import SettingsIcon from "./utils/SettingsIcon";
import Header from "./components/Header";

const App = () => {
  const {
    isChatBoxOpen,
    setIsChatBoxOpen,
    setShowSidebar,
    showTabletSidebar,
    setShowTabletSidebar,
  } = useAppContext();

  return (
    <div className="relative h-screen flex flex-col sm:flex-row text-white overflow-clip z-0">
      {/* Header */}
      <div className="hidden sm:flex lg:hidden absolute left-0 top-0 px-7 py-6 items-center justify-between gap-6 w-full bg-black">
        <button onClick={() => setShowTabletSidebar((prev) => !prev)}>
          <img draggable={false} src={icon_sidebar} alt="" />
        </button>

        <SettingsIcon />
      </div>
      <Header />

      {/* Left Sidebar */}
      <div
        className={`absolute md:relative h-screen z-20 duration-300  ${
          isChatBoxOpen ? "w-full xs:w-[370px] xl:w-[470px]" : "w-[300px]"
        }  ${
          showTabletSidebar
            ? "-translate-x-0"
            : "-translate-x-full md:-translate-x-0"
        }`}
      >
        <AiChatBox />
        <SidebarContent />
      </div>
      {/* overlay */}
      <div onClick={() => { setShowTabletSidebar(false); setShowSidebar(false) }} className={`absolute inset-0 bg-black/50 z-10 duration-200 ${showTabletSidebar ? "opacity-100 visible md:opacity-0 md:invisible" : "opacity-0 invisible"}`} />

      {/* Center Contents */}
      <MiddleSection />

      {/* Right Side */}
      <RightSide />

      {/* Toggle button */}
      <ToggleButton
        isChecked={isChatBoxOpen}
        setIsChecked={setIsChatBoxOpen}
        setShowTabletSidebar={setShowTabletSidebar}
        setShowSidebar={setShowSidebar}
        className="hidden sm:flex absolute bottom-0 left-1/2 md:left-[55%] -translate-x-1/2  flex-col items-center bg-black w-full py-6"
      />
    </div>
  );
};

export default App;
