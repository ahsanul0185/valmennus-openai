import React from "react";
import { useAppContext } from "./contexts/AppContext";
import SidebarContent from "./components/SidebarContent";
import MiddleSection from "./components/MiddleSection";
import RightSide from "./components/RightSide";
import AiChatBox from "./components/AiChatBox";
import ToggleButton from "./utils/ToggleButton";
import angleLeft from "./assets/angle-left.svg"
import icon_sidebar from "./assets/sidebar.svg"
import SettingsIcon from "./utils/SettingsIcon";

const App = () => {
  const { isChatBoxOpen, setIsChatBoxOpen, showTabletSidebar, setShowTabletSidebar } = useAppContext();

  return (
    <div className="relative h-screen flex text-white overflow-clip z-0">

      {/* Top icon */}
      <div className="flex lg:hidden absolute left-0 top-6 px-7 items-center justify-between gap-6 w-full pb-2 bg-black">
        <button onClick={() => setShowTabletSidebar((prev) => !prev)}>
          <img draggable={false} src={icon_sidebar} alt="" />
        </button>

        <SettingsIcon />
      </div>

      {/* Left Sidebar */}
      <div
        className={`absolute md:relative h-screen z-10 duration-300  ${
          isChatBoxOpen ? "w-96" : "w-[300px]"
        }  ${showTabletSidebar ? "-translate-x-0" : "-translate-x-full md:-translate-x-0"}`}
      >
        <AiChatBox />
        <SidebarContent />
      </div>

      {/* Center Contents */}
      <MiddleSection />

      {/* Right Side */}
      <RightSide />

      {/* Toggle button */}
      <div className="md:-z-10 absolute bottom-12 md:bottom-8 left-1/2 md:left-[55%] -translate-x-1/2 flex flex-col items-center bg-black w-full pt-2">
        <ToggleButton
          isChecked={isChatBoxOpen}
          setIsChecked={setIsChatBoxOpen}
          setShowTabletSidebar={setShowTabletSidebar}
        />
        <p className="text-center text-sm text-light mt-2">
          Aktivoi tekoäly ja tehosta oppimistasi!
        </p>
      </div>
    </div>
  );
};

export default App;
