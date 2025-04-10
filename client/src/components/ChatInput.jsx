import React, { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    onSend(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSend}
      className="flex rounded-full overflow-hidden border border-gray-300 shadow-md"
    >
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-3 text-sm outline-none bg-white"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 text-sm transition-all"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
