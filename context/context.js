"use client";
import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showBot, setBot] = useState(false);
  ///chnage this
  const handleBotToggle = () => {
    setBot(!showBot);
  };
  return (
    <AppContext.Provider value={{ handleBotToggle, showBot }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
