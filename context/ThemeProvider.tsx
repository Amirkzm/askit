"use client";
import { createContext, useContext, useEffect, useState } from "react";

type themeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

const themeContext = createContext<themeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("light");

  const handleThemeChange = () => {
    if (mode === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <themeContext.Provider value={{ mode, setMode }}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(themeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
