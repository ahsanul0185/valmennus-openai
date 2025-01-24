import React, { useState } from "react";
import { motion } from "framer-motion";

const ToggleButton = ({ isChecked, setIsChecked, setShowTabletSidebar, setShowSidebar }) => {

  // const [isChecked, setIsChecked] = useState(false);


  return (
    <>
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
            className={`absolute left-0 top-1/2 -translate-y-1/2  flex size-5 items-center justify-center rounded-full bg-black transition ${isChecked ? "translate-x-[34px]" : "translate-x-[2px]"}`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default ToggleButton;
