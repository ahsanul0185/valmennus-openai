import React from "react";

const Typing = () => {
  return (
    <div className="flex flex-row gap-1 py-1 mt-1">
      <div className="size-2 rounded-full bg-[#636363] animate-bounce [animation-delay:-.3s]"></div>
      <div className="size-2 rounded-full bg-[#636363] animate-bounce [animation-delay:-.15s]"></div>
      <div className="size-2 rounded-full bg-[#636363] animate-bounce"></div>
    </div>
  );
};

export default Typing;
