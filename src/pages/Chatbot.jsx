import React, { useState } from "react";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { user: "You", message }]);
      setMessage("");

      // Simulated bot response
      setTimeout(() => {
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { user: "Bot", message: "This is a bot response." },
        ]);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0C10] p-6">
      <div className="w-full max-w-xl bg-[#1F2833] rounded-3xl shadow-xl p-6">
        <h2 className="text-3xl font-bold text-center text-[#66FCF1] mb-6">💬 Chatbot</h2>

        <div className="bg-[#0B0C10] border border-[#45A29E] h-64 overflow-y-auto p-4 rounded-xl text-[#CFC6C7] space-y-2 mb-4">
          {chatHistory.length === 0 ? (
            <p className="text-center text-[#888]">Start the conversation...</p>
          ) : (
            chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`flex ${
                  chat.user === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    chat.user === "You"
                      ? "bg-[#66FCF1] text-[#0B0C10]"
                      : "bg-[#1F2833] border border-[#45A29E] text-[#CFC6C7]"
                  }`}
                >
                  <p className="text-sm">
                    <strong>{chat.user}:</strong> {chat.message}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex gap-2">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-3 rounded-xl bg-[#0B0C10] border border-[#45A29E] text-[#CFC6C7] focus:outline-none"
            rows={2}
          />
          <button
            onClick={handleSend}
            className="bg-[#66FCF1] hover:bg-[#45A29E] text-[#0B0C10] font-semibold px-5 rounded-xl transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
