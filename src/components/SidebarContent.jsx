import React from "react";
import angleLeft from "../assets/angle-left.svg"
import icon_sidebar from "../assets/sidebar.svg"
import icon_edit from "../assets/edit.svg"
import { useAppContext } from "../contexts/AppContext";

const SidebarContent = () => {

  const { contentData, isChatBoxOpen, setSelectedContent, setShowTabletSidebar, showSidebar, setShowSidebar } = useAppContext();

  return (
    <div className={`absolute w-[300px] h-full z-10 duration-300 ${ isChatBoxOpen && showSidebar ? "translate-x-0 bg-black" : !isChatBoxOpen ? "-translate-x-0 bg-darkGray" : isChatBoxOpen ? "-translate-x-full bg-darkGray" : "bg-darkGray"} `}>
      {/* Top Section */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center gap-6">
          {
            !showSidebar && !isChatBoxOpen ? <button onClick={() => setShowTabletSidebar(false)}>
            <img draggable={false} src={angleLeft} alt="" />
          </button> : !isChatBoxOpen ? <button>
            <img draggable={false} src={angleLeft} alt="" />
          </button> : ""
          }
          <button onClick={() => showSidebar && setShowSidebar(false)}>
            <img draggable={false} src={icon_sidebar} alt="" />
          </button>
        </div>
        <button>
          <img draggable={false} src={icon_edit} alt="" />
        </button>
      </div>

      {/* Contents */}
      <div className="p-3 mt-16">
        <h2 className="text-lg font-semibold mb-5 px-3"> Talousmatematiikka </h2>

        <ul className="flex flex-col justify-start text-[#bfbfbf]">
          {contentData.map((item, idx) => (
            <li key={idx} onClick={() => setSelectedContent(item.details)} className="cursor-pointer duration-200 hover:bg-light/20 px-3 py-2 rounded-lg" >{ item.title}</li>
          ))}
        </ul>

      </div>

    </div>
  );
};

export default SidebarContent;
