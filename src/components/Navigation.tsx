import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Code, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-lg' : ''}`} style={{ backgroundColor: isScrolled ? 'rgba(255, 240, 209, 0.95)' : 'transparent' }}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
            <Code className="w-6 h-6" style={{ color: '#FFF0D1' }} />
          </div>
          <span className="text-xl font-bold gradient-text">Diya Kanwar</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {['about', 'skills', 'projects', 'achievements', 'contact'].map(id => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="transition-all duration-200 font-medium relative group"
              style={{ color: '#3B3030' }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#795757' }} />
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Button
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex gradient-primary hover:opacity-90 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{ color: '#FFF0D1' }}
          >
            Get In Touch
          </Button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg" style={{ color: '#3B3030' }}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 p-4 glass-effect rounded-xl">
          <div className="flex flex-col space-y-4">
            {['about', 'skills', 'projects', 'achievements', 'contact'].map(id => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="transition-colors duration-200 font-medium text-left"
                style={{ color: '#3B3030' }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="gradient-primary hover:opacity-90 rounded-lg font-semibold transition-all duration-300"
              style={{ color: '#FFF0D1' }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
