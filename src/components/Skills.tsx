
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Database, Brain } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      skills: ["HTML", "CSS", "JavaScript", "React JS"],
      icon: Code
    },
    {
      title: "Programming Languages", 
      skills: ["C++", "Java", "Python", "C#"],
      icon: Code
    },
    {
      title: "Design Tools",
      skills: ["Figma", "WordPress"],
      icon: Palette
    },
    {
      title: "Database",
      skills: ["MySQL"],
      icon: Database
    },
    {
      title: "Soft Skills",
      skills: ["Creativity", "Adaptability", "Critical Thinking", "Communication", "Analytical Thinking"],
      icon: Brain
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden" style={{ backgroundColor: 'rgba(255, 240, 209, 0.5)' }}>
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(59, 48, 48, 0.05)' }}></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(121, 87, 87, 0.05)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#3B3030' }}>
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#795757' }}>
            A diverse set of technical and soft skills that help me create amazing digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm border-0 tech-shadow" style={{ backgroundColor: 'rgba(255, 240, 209, 0.8)' }}>
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" style={{ color: '#FFF0D1' }} />
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300" style={{ color: '#3B3030' }}>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 text-sm rounded-full border transition-all duration-300 font-medium hover:scale-105"
                        style={{ 
                          backgroundColor: 'rgba(255, 240, 209, 0.8)',
                          color: '#3B3030',
                          borderColor: 'rgba(121, 87, 87, 0.3)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
