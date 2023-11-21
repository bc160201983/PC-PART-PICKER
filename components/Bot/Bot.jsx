"use client";
import { BsRobot } from "react-icons/bs";
import React, { useState } from "react";
import { set } from "mongoose";

const Bot = () => {
  const [botPopup, setBotPopup] = useState(false);

  const toggleBotPopup = () => {
    setBotPopup(!botPopup);
  };
  const closeBotPopUp = () => {
    setBotPopup(false);
  };
  return (
    <>
      {!botPopup && (
        <div className="chat-box cursor-pointer" onClick={toggleBotPopup}>
          <BsRobot className="text-4xl" />
        </div>
      )}

      {botPopup && (
        <div className="chat-box">
          <div class="close-icon" onClick={closeBotPopUp}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-white"
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
          <p>Hello! How can I help you?</p>
          <p>
            Sure, I can compare PC parts. Just let me know which parts you want
            to compare.
          </p>
          <p>
            Please provide the names or specifications of the PC parts you want
            to compare.
          </p>
        </div>
      )}
    </>
  );
};

export default Bot;
