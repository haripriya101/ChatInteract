import React, { useState, useEffect, useRef } from "react";
import { sendChatMessage, fetchChatHistory } from "../api/api.js";
import ChatInput from "./ChatInput.jsx";
import Message from "./Message.jsx";

const ChatWindow = ({ token, role }) => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const data = await fetchChatHistory(token);
        setMessages(data.messages);
      } catch (error) {
        console.error("Error fetching chat history:", error);
      }
    };
    loadHistory();
  }, [token]);

  const handleSend = async (message) => {
    setMessages([...messages, { sender: "user", message }]);
    setIsTyping(true);

    try {
      const { response } = await sendChatMessage(token, message);
      setMessages((prev) => [...prev, { sender: "bot", message: response }]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-2xl w-full max-w-5xl h-[80vh] flex flex-col border border-gray-200">
      <div className="flex-1 overflow-y-auto mb-4 p-4 rounded-xl bg-gray-50 space-y-4">
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} message={msg.message} />
        ))}
        {isTyping && (
          <Message sender="bot" message="Answering your question..." />
        )}
        <div ref={bottomRef} />
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
