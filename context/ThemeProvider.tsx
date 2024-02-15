"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// * setting types for TypeScript
interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void; // * void means doesn't return anything
}

// * Context creation
// * in TypeScript type is defined as `<type>`
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");

  // ! these is rookie mistake which I made (since I. Am. Rookie). Here we didn't fetched localStorage yet that's why it's switching between different mode which almost crashed my computer (because useEffect was in infinite loop checking again & again and throwing errors 1000+ in 5 seconds)
  // const handleThemeChange = () => {
  //   if (mode === "dark") {
  //     setMode("light");
  //     document.documentElement.classList.add("light");
  //   } else {
  //     setMode("dark");
  //     document.documentElement.classList.add("dark");
  //   }
  // };

  //   * Checking Theme at start of the app
  // useEffect(
  //   () => {
  //     handleThemeChange();
  //   },
  //   [
  //     // mode
  //   ]
  // );

  return (
    // * all the data passed in value is usable across entire application
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
