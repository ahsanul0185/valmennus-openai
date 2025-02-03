import { dataContent } from "./dataContent";

const API_KEY = import.meta.env.VITE_API_KEY;

export const sendMessageToOpenAIFetch = async (userInput, chat) => {

    const contentData = [...dataContent[0], ...dataContent[1]];
    
  const contextData = getRelevantContent(userInput, contentData);

  // Preparing context message to send the api for better performance
  const contextMessage = {
    role: "system",
    content: `You are an assistant. Here is the context for the next message:\n\n${contextData
      .map((item) => `Title: ${item.title}\nDetails: ${item.details}`)
      .join("\n\n")}`,
  };

    const messages = contextData.length > 0 ? [...chat, contextMessage, { role: "user", content: userInput }] : [...chat, { role: "user", content: userInput }] ;

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages,
                temperature: 0.1,  
                max_tokens: 256,   
            })
        });

        if (!response.ok) {
            console.log(response)
            return "Something went wrong"
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error("Error:", error);
    }
};


export const getRelevantContent = (question, contentData) => {
  const keywords = question.toLowerCase().split(/\s+/);
    
  return contentData.filter(({ title, details }) => {
      const contentText = `${title} ${details}`.toLowerCase();
      return keywords.some(keyword => contentText.includes(keyword));
  });
};