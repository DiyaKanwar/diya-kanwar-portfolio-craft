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
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={() => setDarkMode(!darkMode)}
        className="w-12 h-12 rounded-full shadow-2xl border-2 transition-all duration-300 hover:scale-110"
        style={{ 
          backgroundColor: colors.primary,
          borderColor: colors.secondary,
          color: colors.bg
        }}
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </Button>
    </div>
  );
};

export default ThemeToggle;