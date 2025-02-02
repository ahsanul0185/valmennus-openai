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
      className="flex-1 px-8 sm:px-20 md:px-12 mb-8 lg:mt-10 lg:mb-[6rem] overflow-y-scroll overflow-x-hidden custom-scrollbar "
    >
      <div ref={topRef} />
      
      <div >
        <p className="text-sm sm:text-base leading-loose sm:pt-16 lg:pt-0">
          {selectedContent} 
        </p>
      </div>
    </div>
  );
};

export default MiddleSection;
