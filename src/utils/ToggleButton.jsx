
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const ToggleButton = ({ isChecked, setIsChecked, setShowTabletSidebar, setShowSidebar, className, text = "Aktivoi tekoäly ja tehosta oppimistasi!" }) => {

  return (
    <div className={twMerge("flex flex-col items-center", className)}>
      <label className="flex cursor-pointer select-none items-center scale-75">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => { setIsChecked((prev) => !prev); setShowTabletSidebar(true); setShowSidebar(false) }}
            className="sr-only"
          />
          <div
            className={`box block h-6 w-14 rounded-full ${
              isChecked ? "bg-white" : "bg-white"
            }`}
          ></div>
          <div
            className={`absolute left-0 top-1/2 -translate-y-1/2  flex size-5 items-center justify-center rounded-full transition ${isChecked ? "translate-x-[34px] bg-[#6e3b00]" : "translate-x-[2px] bg-black"}`}
          ></div>
        </div>
      </label>

      <p className="text-center text-sm text-light mt-2">
          {text}
        </p>
    </div>
  );
};

export default ToggleButton;