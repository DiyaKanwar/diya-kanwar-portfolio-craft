import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github, Linkedin, Briefcase, Coffee
} from "lucide-react";

interface HeroProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  scrollToSection: (sectionId: string) => void;
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ colors = {primary: '#000', secondary: '#000', accent: '#000', bg: '#fff'}, scrollToSection, darkMode }) => {
  // Set the image source conditionally based on the theme
  const pfImageSrc = darkMode ? "/dark_pf.png" : "/light_pf.png";

  return (
    <section className="min-h-[90svh] sm:min-h-[100svh] flex items-center justify-center relative overflow-hidden pt-14 sm:pt-16 md:pt-20">
      {/* Dynamic Background - Optimized responsive sizes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-40 h-40 sm:w-72 md:w-96 sm:h-72 md:h-96 rounded-full blur-3xl animate-pulse opacity-10 sm:opacity-15"
          style={{ backgroundColor: colors.primary }}></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 md:w-80 sm:h-64 md:h-80 rounded-full blur-3xl animate-pulse opacity-5 sm:opacity-10"
          style={{ backgroundColor: colors.secondary, animationDelay: '1000ms' }}></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10 text-center">
        {/* Profile Section - More compact responsive sizing */}
        <div className="mb-4 sm:mb-6">
          <div className="relative inline-block group">
            {/* Floating Elements - Smaller for better proportion */}
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-bounce"
              style={{ backgroundColor: colors.secondary, animationDelay: '0s' }}></div>
            <div className="absolute top-0 -right-4 sm:-right-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-bounce"
              style={{ backgroundColor: colors.primary, animationDelay: '1s' }}></div>
            <div className="absolute -bottom-2 -left-4 sm:-bottom-3 sm:-left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-bounce"
              style={{ backgroundColor: colors.secondary, animationDelay: '2s' }}></div>

            {/* Main Profile Image - More compact responsive sizes */}
            <div className="w-20 h-20 sm:w-24 md:w-28 sm:h-24 md:h-28 rounded-2xl relative flex items-center justify-center border-2 transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-xl overflow-hidden"
              style={{
                borderColor: `${colors.primary}50`
              }}>
              <img
                src={pfImageSrc}
                alt="Profile"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Text Content - Improved responsive typography */}
        <div className="max-w-[85vw] sm:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="mb-2 sm:mb-3">
            <span className="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium border inline-block"
              style={{
                backgroundColor: `${colors.primary}15`,
                borderColor: colors.primary,
                color: colors.primary
              }}>
              ✨ Seeking UX/UI Internship Opportunities
            </span>
          </div>

          {/* Main Heading - More compact fluid typography */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 tracking-tight" 
            style={{ color: colors.primary }}>
            Designer Who Codes.
          </h1>

          <p className="text-sm sm:text-base lg:text-lg max-w-lg sm:max-w-xl mx-auto leading-relaxed mb-4 sm:mb-6" 
            style={{ color: colors.secondary }}>
            I'm Diya Kanwar, a passionate designer focused on creating
            <span className="font-bold px-2 py-1 mx-1.5 rounded-md inline-block sm:inline"
              style={{ backgroundColor: `${colors.secondary}20`, color: colors.secondary }}>
              intuitive and beautiful
            </span>
            digital experiences that solve real-world problems.
          </p>

          {/* CTA Buttons - Responsive sizing and spacing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-500 hover:-translate-y-1 hover:scale-105 shadow-xl group"
              style={{
                backgroundColor: colors.primary,
                color: colors.bg
              }}
            >
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-rotate-6 transition-transform" />
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-500 hover:-translate-y-1 hover:scale-105 border-2 group shadow-lg"
              style={{
                backgroundColor: darkMode ? "#0D1117" : "#FBEACB",
                color: darkMode ? "#D9E0E5" : "#731E0D",
                borderColor: darkMode ? "#D9E0E5" : "#731E0D"
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
              <Coffee className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform group-hover:rotate-12" />
              Let's Talk
            </Button>


          </div>

          {/* Social Links - Enhanced Responsive Design */}
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <a
              href="https://github.com/DiyaKanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 border-2 group shadow-lg"
              style={{
                backgroundColor: `${colors.primary}10`,
                borderColor: colors.primary,
                color: colors.primary,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = colors.primary;
                (e.currentTarget as HTMLAnchorElement).style.color = colors.bg;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${colors.primary}10`;
                (e.currentTarget as HTMLAnchorElement).style.color = colors.primary;
              }}
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://www.linkedin.com/in/diya-kanwar-6a045024a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 border-2 group shadow-lg"
              style={{
                backgroundColor: darkMode ? "#0D1117" : "#FBEACB",
                color: darkMode ? "#D9E0E5" : "#731E0D",
                borderColor: darkMode ? "#D9E0E5" : "#731E0D",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = darkMode ? "#8B949E" : "#731E0D";
                (e.currentTarget as HTMLAnchorElement).style.color = darkMode ? "#0D1117" : "#FFF0D1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = darkMode ? "#0D1117" : "#FBEACB";
                (e.currentTarget as HTMLAnchorElement).style.color = darkMode ? "#D9E0E5" : "#731E0D";
              }}
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
