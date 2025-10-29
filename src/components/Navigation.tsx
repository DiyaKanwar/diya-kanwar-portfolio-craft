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
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section for better UX
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ["about", "skills", "projects", "achievements", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const scrolledBgColor = isScrolled ? `${colors.bg}F8` : "transparent";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md backdrop-blur-md" : "backdrop-blur-sm"
      }`}
      style={{ 
        backgroundColor: scrolledBgColor,
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo Section - Improved accessibility */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg p-1"
          style={{ '--tw-ring-color': colors.primary } as React.CSSProperties}
          aria-label="Scroll to top"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transform transition-transform hover:scale-105 shadow-sm"
               style={{ backgroundColor: colors.primary }}>
            <Code
              className="w-4 h-4 sm:w-5 sm:h-5"
              style={{ color: colors.bg }}
              aria-hidden="true"
            />
          </div>
          <span
            className="text-base sm:text-lg font-bold"
            style={{ color: colors.primary }}
          >
            Diya Kanwar
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8" role="menubar">
            {["about", "skills", "projects", "achievements", "contact"].map(
              (id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="transition-all duration-200 text-sm lg:text-base font-medium relative group py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-2"
                  style={{ 
                    color: activeSection === id ? colors.secondary : colors.primary,
                    '--tw-ring-color': colors.primary
                  } as React.CSSProperties}
                  role="menuitem"
                  aria-current={activeSection === id ? "page" : undefined}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ backgroundColor: colors.secondary }}
                    aria-hidden="true"
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

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex hover:opacity-90 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md focus:ring-4 focus:ring-offset-2"
            style={{ 
              backgroundColor: colors.primary, 
              color: colors.bg,
              '--tw-ring-color': colors.primary
            } as React.CSSProperties}
            aria-label="Navigate to contact section"
          >
            Get In Touch
          </Button>

          {/* Mobile Menu Button - Improved touch target */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ 
              color: colors.primary,
              '--tw-ring-color': colors.primary,
              minWidth: '44px',
              minHeight: '44px'
            } as React.CSSProperties}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden mt-2 p-5 backdrop-blur-xl rounded-xl mx-4 mb-4 shadow-lg border"
          style={{ 
            backgroundColor: `${colors.bg}F5`,
            borderColor: `${colors.primary}20`
          }}
          role="menu"
        >
          <div className="flex flex-col space-y-4">
            {["about", "skills", "projects", "achievements", "contact"].map(
              (id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="transition-all duration-200 font-medium text-left py-3 px-4 rounded-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ 
                    color: activeSection === id ? colors.secondary : colors.primary,
                    backgroundColor: activeSection === id ? `${colors.primary}10` : 'transparent',
                    '--tw-ring-color': colors.primary,
                    minHeight: '44px'
                  } as React.CSSProperties}
                  role="menuitem"
                  aria-current={activeSection === id ? "page" : undefined}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              )
            )}
            <Button
              onClick={() => scrollToSection("contact")}
              className="hover:opacity-90 rounded-lg font-semibold transition-all duration-300 mt-2 shadow-sm hover:shadow-md focus:ring-4 focus:ring-offset-2"
              style={{ 
                backgroundColor: colors.primary,
                color: colors.bg,
                '--tw-ring-color': colors.primary,
                minHeight: '44px'
              } as React.CSSProperties}
              role="menuitem"
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