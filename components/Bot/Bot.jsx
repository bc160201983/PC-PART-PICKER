"use client";
import { useChat } from "ai/react";
import { BsFillTrash3Fill, BsRobot } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Bot = ({ products, shareProducts }) => {
  const finalProducts = products.length > 0 ? products : shareProducts;
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat({
    body: { products: finalProducts },
    initialInput: "Tell me about These products",
  });

  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  const [botPopup, setBotPopup] = useState(false);

  const toggleBotPopup = () => {
    setBotPopup(!botPopup);
  };
  const closeBotPopUp = () => {
    setBotPopup(false);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);
  useEffect(() => {
    if (botPopup) {
      inputRef.current.focus();
    }
  }, [botPopup]);

  return (
    <>
      {!botPopup && (
        <div className="chat-box cursor-pointer" onClick={toggleBotPopup}>
          <BsRobot className="text-4xl" />
        </div>
      )}

      {botPopup && (
        <div className="chat-box z-10 w-full max-w-[500px] p-1">
          <div
            className="close-icon border rounded-full p-1 relative top-0 bottom-0 left-[450px] max-w-fit"
            onClick={closeBotPopUp}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex h-[600px] flex-col bg-white rounded text-black">
            <div className="h-full mt-3 px-3 overflow-y-auto" ref={scrollRef}>
              {messages.map((message) => (
                <ChatMessage message={message} key={message.id} />
              ))}
              {isLoading && lastMessageIsUser && (
                <ChatMessage
                  message={{ role: "assistant", content: "Thinking..." }}
                />
              )}
              {error && (
                <ChatMessage
                  message={{
                    role: "assistant",
                    content: "Something went wrong, Please try again",
                  }}
                />
              )}
              {!error && messages.length === 0 && (
                <div className="flex h-full items-center justify-center gap-3">
                  <BsRobot className="text-4xl" />
                  <p className="text-lg font-medium">
                    Hi, I'm a bot. I can help you to find the best product for
                    you.
                  </p>
                </div>
              )}
            </div>
            <form action="" onSubmit={handleSubmit} className="m-3 flex gap-1">
              <button
                className="btn-icon shrink-0 ml-0"
                type="button"
                onClick={() => setMessages([])}
              >
                <BsFillTrash3Fill className="w-4 h-4" />
              </button>
              <input
                ref={inputRef}
                className="w-full bg-[#f7f7f7] outline-none border border-[#e0e0e0] rounded px-2 py-1 text-black"
                value={input}
                onChange={handleInputChange}
                placeholder="say something"
                type="text"
              />
              <button
                className="btn-add flex justify-center items-center gap-1 py-[5px] px-[10px] rounded bg-[#2c87c3] text-white font-medium hover:bg-[#153f5b] hover:transition-all hover:ease-in-out cursor-pointer"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Bot;

function ChatMessage({ message: { role, content } }) {
  const isAiMessage = role === "assistant";

  return (
    <div
      className={`mb-3 flex items-center ${
        isAiMessage ? "me-5 justify-start" : "justify-end ms-5"
      }`}
    >
      {isAiMessage && <BsRobot className="mr-2 shrink-0" />}

      <p
        className={`whitespace-pre-line rounded-md border px-3 py-2 ${
          isAiMessage ? "bg-[#e0e0e0] text-black" : "bg-[#2c87c3] text-white"
        }`}
      >
        {content}
      </p>
    </div>
  );
}
