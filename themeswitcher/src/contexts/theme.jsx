import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  return (
    <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}