
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Tech background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(66,153,225,0.1),transparent)]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-40 h-40 gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center relative tech-shadow">
              <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                <Code className="w-16 h-16 text-primary" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Hi, I'm <span className="gradient-text">Diya Kanwar</span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-muted-foreground">
              <Code className="w-6 h-6 text-primary" />
              <span>Aspiring Front End Developer</span>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Creating <span className="text-primary font-semibold">user-centered digital experiences</span> with a passion for 
              innovative design and clean code. Currently pursuing <span className="text-secondary font-semibold">Computer Science</span> at Chandigarh University.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="gradient-primary hover:opacity-90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 tech-shadow"
            >
              <Code className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-xl font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/DiyaKanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-card hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 tech-shadow group"
            >
              <Github className="w-6 h-6 group-hover:animate-pulse" />
            </a>
            <a
              href="https://www.linkedin.com/in/diya-kanwar-6a045024a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-card hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-110 tech-shadow group"
            >
              <Linkedin className="w-6 h-6 group-hover:animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
