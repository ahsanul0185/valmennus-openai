import { createContext, useContext, useState } from "react";
import { dataContent_1 } from "../contentData-1";
import { dataContent_2 } from "../contentData-2";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {

  const [contentData, setContentData] = useState(dataContent_1);

  const [chatHistory, setChatHistory] = useState([
    {
      role: "developer",
      content: "You are a helpful assistant, you will answer shortly.",
    },
    { role: "assistant", content: "Hello, How can I assist you today?" },
  ]);

  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showTabletSidebar, setShowTabletSidebar] = useState(false);
  const [selectedContent, setSelectedContent] = useState(
    contentData[0].details
  );

  const values = {
    isChatBoxOpen,
    setIsChatBoxOpen,
    contentData,
    selectedContent,
    setSelectedContent,
    showSidebar,
    setShowSidebar,
    showTabletSidebar,
    setShowTabletSidebar,
    chatHistory,
    setChatHistory,
    dataContent_1,
    dataContent_2
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
