import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const Navigation = ({ colors, darkMode, setDarkMode }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const scrolledBgColor = isScrolled ? `${colors.bg}F2` : "transparent";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : ""
      }`}
      style={{ backgroundColor: scrolledBgColor }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Section (Logo + Name) */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
            <Code
              className="w-6 h-6"
              style={{ color: darkMode ? "#D9E0E5" : "#175764" }}
            />
          </div>
          <span
            className="text-xl font-bold"
            style={{ color: darkMode ? "#D9E0E5" : "#175764" }}
          >
            Diya Kanwar
          </span>
        </div>

        {/* Right Section (Links + Toggle + Button + Mobile Menu) */}
        <div className="flex items-center space-x-6">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["about", "skills", "projects", "achievements", "contact"].map(
              (id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="transition-all duration-200 font-medium relative group"
                  style={{ color: colors.primary }}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: colors.secondary }}
                  />
                </button>
              )
            )}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            colors={colors}
          />

          {/* Get In Touch Button */}
          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex hover:opacity-90 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: colors.primary, color: colors.bg }}
          >
            Get In Touch
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: colors.primary }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden mt-4 p-4 glass-effect rounded-xl mx-4 mb-4"
          style={{ backgroundColor: `${colors.bg}F2` }}
        >
          <div className="flex flex-col space-y-4">
            {["about", "skills", "projects", "achievements", "contact"].map(
              (id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="transition-colors duration-200 font-medium text-left"
                  style={{ color: colors.primary }}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              )
            )}
            <Button
              onClick={() => scrollToSection("contact")}
              className="gradient-primary hover:opacity-90 rounded-lg font-semibold transition-all duration-300"
              style={{ color: colors.bg }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
