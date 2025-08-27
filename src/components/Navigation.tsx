import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Code, Menu, X } from "lucide-react";

// Define the type for the props that this component will accept
interface NavigationProps {
  colors: {
    primary: string;
    secondary: string;
    bg: string;
  };
}

export const Navigation = ({ colors }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  // Convert hex background color to hex with alpha for the glass effect
  const scrolledBgColor = isScrolled ? `${colors.bg}F2` : 'transparent'; // F2 hex is ~95% opacity

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-lg' : ''}`} 
      style={{ backgroundColor: scrolledBgColor }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
            {/* The color of the icon now uses the theme's background color for contrast */}
            <Code className="w-6 h-6" style={{ color: colors.bg }} />
          </div>
          <span className="text-xl font-bold gradient-text">Diya Kanwar</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {['about', 'skills', 'projects', 'achievements', 'contact'].map(id => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="transition-all duration-200 font-medium relative group"
              style={{ color: colors.primary }} // Use primary theme color for text
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              {/* Use secondary theme color for the hover underline */}
              <span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" 
                style={{ backgroundColor: colors.secondary }} 
              />
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Button
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex gradient-primary hover:opacity-90 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{ color: colors.bg }} // Use background color for contrast on the button
          >
            Get In Touch
          </Button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2 rounded-lg" 
            style={{ color: colors.primary }} // Use primary theme color for the menu icon
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 p-4 glass-effect rounded-xl mx-4 mb-4" style={{ backgroundColor: `${colors.bg}F2`}}>
          <div className="flex flex-col space-y-4">
            {['about', 'skills', 'projects', 'achievements', 'contact'].map(id => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="transition-colors duration-200 font-medium text-left"
                style={{ color: colors.primary }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
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