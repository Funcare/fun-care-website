"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await res.json();

      const aiMessage = { sender: "ai", text: data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Something went wrong. Please try again." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-coral text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center 
                     hover:bg-peach transition transform hover:scale-110"
        >
          <MessageCircle size={30} />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div
          className="w-80 h-96 bg-cream shadow-2xl rounded-2xl flex flex-col border border-peach 
                     animate-fadeIn"
        >
          {/* Header */}
          <div
            className="bg-gradient-to-r from-peach to-coral text-white p-4 flex justify-between 
                       items-center rounded-t-2xl shadow-md"
          >
            <span className="font-semibold">FunCare AI Assistant</span>
            <button
              onClick={() => setOpen(false)}
              className="hover:text-yellow transition"
            >
              <X size={22} />
            </button>
          </div>

          {/* Messages */}
<div className="flex-1 p-4 overflow-y-auto space-y-3">
  {messages.map((msg, i) => {
    const isAI = msg.sender === "ai";

    // Look for button token in AI messages: [PROGRAM_BUTTON:/path|Label]
    let buttonPath = null;
    let buttonLabel = null;
    let cleanText = msg.text;

    if (isAI) {
      const match = msg.text.match(
        /\[PROGRAM_BUTTON:([^|\]]+)\|([^\]]+)\]/
      );
      if (match) {
        buttonPath = match[1];
        buttonLabel = match[2];
        cleanText = msg.text.replace(match[0], "").trim();
      }
    }

    return (
      <div
        key={i}
        className={`p-3 rounded-xl max-w-[80%] text-sm shadow-sm ${
          msg.sender === "user"
            ? "bg-teal text-white ml-auto"
            : "bg-white text-gray-800 border border-gray-300"
        }`}
      >
        {/* INLINE BUTTON SUPPORT */}
        {(() => {
          // If there is a token, split the text into segments around it
          if (buttonPath) {
            const tokenRegex = new RegExp(`\\[PROGRAM_BUTTON:${buttonPath}\\|${buttonLabel}\\]`, "g");
            const segments = msg.text.split(tokenRegex);

            return (
              <div className="flex flex-wrap items-center gap-1 whitespace-pre-line">
                {segments.map((segment, index) => (
                  <span key={index} className="text-gray-800">
                    {segment}
                  </span>
                ))}

                {/* Inline button */}
                <button
                  onClick={() => (window.location.href = buttonPath)}
                  className="bg-teal text-white px-3 py-1.5 rounded-lg shadow hover:bg-teal/80 transition inline-block"
                >
                  {buttonLabel}
                </button>
              </div>
            );
          }

          // No button token — render normal text
          return (
            <div className="mb-2 whitespace-pre-line text-gray-800">
              {cleanText}
            </div>
          );
        })()}
      </div>
    );
  })}

  {loading && (
    <div className="text-gray-500 text-sm italic">AI is typing…</div>
  )}
</div>

          {/* Input */}
          <div className="p-3 border-t border-gray-300 flex gap-2 bg-white rounded-b-2xl">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border border-gray-300 bg-gray-100 rounded-xl p-2 outline-none text-gray-700 placeholder-gray-400"
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              className="bg-teal text-white px-4 py-2 rounded-xl hover:bg-teal/80 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}