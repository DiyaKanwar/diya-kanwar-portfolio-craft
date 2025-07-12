import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 w-full" style={{ backgroundColor: '#FFF0D1' }}>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full blur-xl animate-pulse" style={{ backgroundColor: 'rgba(121, 87, 87, 0.1)' }} />
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full blur-xl animate-pulse delay-1000" style={{ backgroundColor: 'rgba(59, 48, 48, 0.1)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-full">
        <div className="mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center relative tech-shadow">
            <div className="absolute inset-2 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFF0D1' }}>
              <Code className="w-12 h-12 md:w-16 md:h-16" style={{ color: '#3B3030' }} />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 animate-pulse" style={{ color: '#795757' }} />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold break-words" style={{ color: '#3B3030' }}>
          Hi, I'm <span className="gradient-text">Diya Kanwar</span>
        </h1>
        <div className="flex items-center justify-center gap-2 text-lg md:text-xl lg:text-2xl text-[#795757] mt-2 flex-wrap">
          <Code className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#3B3030' }} />
          <span>Aspiring Front End Developer</span>
        </div>
        <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-4 px-2" style={{ color: '#795757' }}>
          Creating <span className="font-semibold text-[#3B3030]">user-centered digital experiences</span> with a passion for 
          innovative design and clean code. Currently pursuing <span className="font-semibold text-[#3B3030]">Computer Science</span> at Chandigarh University.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-12 px-4">
          <Button
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="gradient-primary hover:opacity-90 text-white px-6 md:px-8 py-3 rounded-xl font-semibold transition-all duration-300 tech-shadow w-full sm:w-auto"
            style={{ color: '#FFF0D1' }}
          >
            <Code className="w-5 h-5 mr-2" />
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            size="lg"
            className="px-6 md:px-8 py-3 rounded-xl font-semibold border-2 transition-all duration-300 w-full sm:w-auto"
            style={{ borderColor: '#3B3030', color: '#3B3030', backgroundColor: 'transparent' }}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/DiyaKanwar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 md:p-4 rounded-xl transition-all duration-300 tech-shadow group"
            style={{ backgroundColor: 'rgba(59, 48, 48, 0.1)' }}
          >
            <Github className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#3B3030' }} />
          </a>
          <a
            href="https://www.linkedin.com/in/diya-kanwar-6a045024a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 md:p-4 rounded-xl transition-all duration-300 tech-shadow group"
            style={{ backgroundColor: 'rgba(121, 87, 87, 0.1)' }}
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" style={{ color: '#795757' }} />
          </a>
        </div>
      </div>
    </section>
  );
};