import React, { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import angleLeft from "../assets/angle-left.svg";
import icon_sidebar from "../assets/sidebar.svg";
import icon_wave from "../assets/icon-wave.svg";
import icon_arrow_up from "../assets/arrow-up.svg"; 
import Chat from "./Chat";
import { sendMessageToOpenAIFetch } from "../openai";
import { useRef } from "react";

const AiChatBox = () => {
  const { isChatBoxOpen, setShowSidebar, setShowTabletSidebar, setChatHistory, chatHistory } =
    useAppContext();
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const inputRef = useRef(null);

  const handleSendButton = async () => {
    inputRef.current.focus();

    const trimmedInput = userInput.trim();

    if (trimmedInput === "") return;

    setUserInput("");

    setChatHistory((prev) => [
      ...prev,
      { role: "user", content: trimmedInput },
    ]);

    setIsTyping(true);

    const response = await sendMessageToOpenAIFetch(trimmedInput, chatHistory);

    setIsTyping(false);

    setChatHistory((prev) => [
      ...prev,
      { role: "assistant", content: response },
    ]);
  };

  useEffect(() => {
    if (isTyping) {
      setChatHistory((prev) => [
        ...prev,
        { role: "assistant", content: "typing" },
      ]);
    } else {
      setChatHistory((prev) =>
        prev.filter((item) => item.content !== "typing")
      );
    }
  }, [isTyping]);

  const handleEnterButton = async (e) => {
    if (!e.shiftKey && e.key === "Enter" && userInput !== "") {
      e.preventDefault();
      await handleSendButton();
    }
  };

  return (
    <div
      className={`absolute inset-0 z-0 w-[470px] flex flex-col bg-darkGray h-full duration-300 ${
        isChatBoxOpen ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Top */}
      <div className="flex items-center gap-6  py-7 px-5">
        <button className="block md:hidden" onClick={() => setShowTabletSidebar(false)}>
          <img draggable={false} src={angleLeft} alt="" />
        </button>
        <button onClick={() => setShowSidebar((prev) => !prev)}>
          <img draggable={false} src={icon_sidebar} alt="" />
        </button>
      </div>

      {/* Chat */}
      <div className="min-h-0 h-full px-2 flex flex-col justify-end">
        <Chat />
      </div>

      {/* Bottom Input Field*/}
      <div className="px-5 pb-6 shrink-0">
        <label
          htmlFor="inputBox"
          className="block relative bg-[#1e1e1e] rounded-[30px] overflow-clip px-4 py-2"
        >
          <textarea
            id="inputBox"
            ref={inputRef}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleEnterButton}
            value={userInput}
            rows={1}
            autoFocus
            className="bg-[#1e1e1e] px-2 pt-2 w-full outline-none  custom-scrollbar resize-none"
            placeholder="Ask Question"
          ></textarea>
          <div className="flex justify-end">
            <button
              onClick={() => userInput && handleSendButton()}
              className="bg-white size-8 grid place-items-center rounded-full outline-none"
            >
              <img
                src={userInput ? icon_arrow_up : icon_wave}
                alt="wave icon"
              />
            </button>
          </div>
        </label>
        <p className="text-light text-xs text-center mt-4">
          Tekoäly voi tehdä virheitä. Tarkista tärkeät tiedot.
        </p>
      </div>
    </div>
  );
};

export default AiChatBox;
