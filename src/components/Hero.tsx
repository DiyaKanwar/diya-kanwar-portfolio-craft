import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" style={{ backgroundColor: '#FFF0D1' }}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20"
          style={{ backgroundColor: '#175764' }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl animate-pulse opacity-15"
          style={{ backgroundColor: '#731E0D', animationDelay: '1000ms' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl opacity-10"
          style={{ backgroundColor: '#175764' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Profile Icon */}
        <div className="mb-12">
          <div className="relative inline-block">
            <div 
              className="w-32 h-32 rounded-2xl transform rotate-12 absolute -inset-4 opacity-50"
              style={{ backgroundColor: '#731E0D' }}
            ></div>
            <div 
              className="w-32 h-32 rounded-2xl relative flex items-center justify-center border-2 transform transition-transform duration-500 hover:scale-110 hover:rotate-12"
              style={{ 
                backgroundColor: '#175764',
                borderColor: 'rgba(255, 240, 209, 0.3)'
              }}
            >
              <Code className="w-16 h-16" style={{ color: '#FFF0D1' }} />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-8 h-8 animate-pulse" style={{ color: '#731E0D' }} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#175764' }}>
            Hi, I'm <span style={{ color: '#731E0D' }}>Diya Kanwar</span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl mb-6">
            <span 
              className="px-4 py-2 rounded-xl text-lg font-medium"
              style={{ 
                backgroundColor: 'rgba(23, 87, 100, 0.1)',
                color: '#175764'
              }}
            >
              Front End Developer
            </span>
          </div>

          <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-12" style={{ color: '#731E0D' }}>
            Creating <span className="font-semibold" style={{ color: '#175764' }}>user-centered digital experiences</span> with a passion for 
            innovative design and clean code. Currently pursuing <span className="font-semibold" style={{ color: '#175764' }}>Computer Science</span> at Chandigarh University.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="px-8 py-6 rounded-xl font-medium text-base transition-all duration-300 hover:-translate-y-1"
              style={{ 
                backgroundColor: '#175764',
                color: '#FFF0D1',
                border: '2px solid rgba(255, 240, 209, 0.2)'
              }}
            >
              <Code className="w-5 h-5 mr-2" />
              Explore My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="px-8 py-6 rounded-xl font-medium text-base transition-all duration-300 hover:-translate-y-1"
              style={{ 
                backgroundColor: 'rgba(115, 30, 13, 0.1)',
                borderColor: '#731E0D',
                color: '#731E0D'
              }}
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/DiyaKanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 border-2"
              style={{ 
                backgroundColor: 'rgba(23, 87, 100, 0.1)',
                borderColor: 'rgba(23, 87, 100, 0.2)',
                color: '#175764'
              }}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/diya-kanwar-6a045024a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 border-2"
              style={{ 
                backgroundColor: 'rgba(115, 30, 13, 0.1)',
                borderColor: 'rgba(115, 30, 13, 0.2)',
                color: '#731E0D'
              }}
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
