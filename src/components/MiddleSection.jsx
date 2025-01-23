import React, { useEffect, useRef } from "react";
import { useAppContext } from "../contexts/AppContext";

const MiddleSection = () => {
  const { selectedContent } = useAppContext();
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, [selectedContent])

  return (
    <div
      className="flex-1 mt-[3rem] md:mt-10 px-10 sm:px-20 md:px-12 overflow-y-scroll  custom-scrollbar h-[82%]"
    >
      <div ref={topRef} />
      
      <div>
        <p className="leading-loose">
          {selectedContent} 
        </p>
      </div>
    </div>
  );
};

export default MiddleSection;
