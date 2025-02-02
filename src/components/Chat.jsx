import React, { useEffect, useRef } from "react";
import icon_bot from "../assets/ai-icon.svg";
import { useAppContext } from "../contexts/AppContext";
import Typing from "../utils/Typing";
import Typewriter from "../utils/Typewriter";

const Chat = () => {
  const { chatHistory } = useAppContext();
  const msgEnd = useRef();

  useEffect(() => {
    msgEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className={`overflow-y-auto custom-scrollbar  ${chatHistory.length === 2 ? "mb-10" : "mb-0"}`}>
      {/* Conversation */}
      <div className={`w-full p-3 flex flex-col gap-3 text-sm sm:text-[15px]`}>
        {chatHistory.map((message, idx) => (
          <div
            key={idx}
            className={`${
              message.role === "assistant" ? "flex gap-1 items-start my-1" : ""
            }`}
          >
            {/* Bot Icon */}
            {message.role === "assistant" && (
              <div className="rounded-full bg-black size-[38px] grid place-items-center shrink-0 mt-0.5">
                <img draggable={false} src={icon_bot} className="size-5" alt="bot icon" />
              </div>
            )}

            {message.role !== "developer" && (
              <div
                className={`${
                  message.role === "assistant" ? "max-w-[85%]" : "flex justify-end"
                }`}
              >
                <div
                  className={`px-3 py-2  ${
                    message.role === "assistant"
                      ? "rounded-2xl"
                      : "bg-[#4d4d4d]  max-w-[80%] text-white rounded-3xl px-4"
                  }`}
                >
                  {message.content === "typing" ? <Typing /> : ""}

                  {message.content !== "typing" && (message.role === "assistant" ? (
                    <Typewriter
                      text={message.content}
                      delay={10}
                      infinite={false}
                      endIndicator={msgEnd}
                    />
                  ) : (
                    message.content
                  ))}

                </div>
              </div>
            )}
          </div>
        ))}

        <div ref={msgEnd} />
      </div>
    </div>
  );
};

export default Chat;
