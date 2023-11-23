"use client";
import React, { useState } from "react";
import Bot from "../Bot/Bot";

const AIChatButton = () => {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  return (
    <>
      <button className="btn-icon" onClick={() => setChatBoxOpen(true)}>
        AI Chat
      </button>
      <Bot open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
};

export default AIChatButton;
