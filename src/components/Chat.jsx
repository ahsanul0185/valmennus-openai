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
    <div>
      {/* Conversation */}
      <div className="h-[73vh] p-3 flex flex-col gap-2 overflow-y-scroll custom-scrollbar text-[15px]">
        {chatHistory.map((message, idx) => (
          <div
            key={idx}
            className={`${
              message.role === "assistant" ? "flex gap-1 items-start my-1 max-w-[85%]" : ""
            }`}
          >
            {/* Bot Icon */}
            {message.role === "assistant" && (
              <div className="rounded-full shrink-0 mt-1">
                <img src={icon_bot} className="size-7" alt="bot icon" />
              </div>
            )}

            {message.role !== "developer" && (
              <div
                className={`${
                  message.role === "assistant" ? "" : "flex justify-end"
                }`}
              >
                <div
                  className={`px-3 py-2  ${
                    message.role === "assistant"
                      ? "bg-transparent rounded-2xl"
                      : "bg-[#4d4d4d]  text-white rounded-full px-5"
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
