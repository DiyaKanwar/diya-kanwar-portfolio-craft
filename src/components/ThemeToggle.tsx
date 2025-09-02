import React from 'react';
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode, colors }) => {
  return (
 <Button
  onClick={() => setDarkMode(!darkMode)}
  className="w-12 h-12 rounded-full shadow-2xl border-2 transition-all duration-300 hover:scale-110"
  style={{
    backgroundColor: darkMode ? "#0D1117" : "#FBEACB",
    color: darkMode ? "#D9E0E5" : "#731E0D",
    borderColor: darkMode ? "#D9E0E5" : "#731E0D",
  }}
  onMouseEnter={(e) => {
    (e.currentTarget as HTMLButtonElement).style.backgroundColor = darkMode ? "#8B949E" : "#731E0D";
    (e.currentTarget as HTMLButtonElement).style.color = darkMode ? "#0D1117" : "#FFF0D1";
  }}
  onMouseLeave={(e) => {
    (e.currentTarget as HTMLButtonElement).style.backgroundColor = darkMode ? "#0D1117" : "#FBEACB";
    (e.currentTarget as HTMLButtonElement).style.color = darkMode ? "#D9E0E5" : "#731E0D";
  }}
>
  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
</Button>


  );
};

export default ThemeToggle;