import { createContext, useContext, useState } from "react";
import { dataContent } from "../dataContent";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [contentData, setContentData] = useState(dataContent);

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
    contentData[0][0].details
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
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
