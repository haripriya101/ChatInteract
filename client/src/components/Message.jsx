import React from "react";

const Message = ({ sender, message }) => {
  const isUser = sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-lg px-4 py-3 rounded-xl text-sm whitespace-pre-line backdrop-blur-sm shadow-sm ${
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-200 text-gray-800 rounded-bl-none"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default Message;
