"use client";

import { useGlobalContext } from "@/context/context";

const Button = ({ text, icon }) => {
  const { handleBotToggle } = useGlobalContext();
  return (
    <>
      <button onClick={handleBotToggle} className="btn-icon">
        {icon}
        {text}
      </button>
    </>
  );
};

export default Button;
