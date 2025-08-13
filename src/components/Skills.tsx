import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Database, Brain, Zap } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    { 
      title: "Front-End Development", 
      skills: ["HTML", "CSS", "JavaScript", "React JS"], 
      icon: Code,
      primary: true
    },
    { 
      title: "Programming Languages", 
      skills: ["C++", "Java", "Python", "C#"], 
      icon: Code,
      primary: false
    },
    { 
      title: "Design Tools", 
      skills: ["Figma", "WordPress"], 
      icon: Palette,
      primary: true
    },
    { 
      title: "Database", 
      skills: ["MySQL"], 
      icon: Database,
      primary: false
    },
    { 
      title: "Soft Skills", 
      skills: ["Creativity", "Adaptability", "Critical Thinking", "Communication", "Analytical Thinking"], 
      icon: Brain,
      primary: true
    }
  ];


  return (
    <section id="skills" className="py-24 relative overflow-hidden min-h-screen" style={{ backgroundColor: '#FFF0D1' }}>
      {/* Enhanced Background effects using theme colors */}
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
      <div 
        className="absolute top-20 right-1/4 w-48 h-48 rounded-full blur-2xl animate-pulse opacity-15"
        style={{ backgroundColor: '#731E0D', animationDelay: '500ms' }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span 
              className="px-6 py-3 rounded-full text-sm font-medium border-2 backdrop-blur-sm"
              style={{ 
                backgroundColor: 'rgba(115, 30, 13, 0.1)', 
                borderColor: '#731E0D',
                color: '#731E0D'
              }}
            >
              My Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: '#175764' }}>
            Skills & <span style={{ color: '#731E0D' }}>Expertise</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#731E0D' }}>
            A diverse set of technical and soft skills that help me create amazing digital experiences and solve complex problems
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map(({ title, skills, icon: Icon, primary }, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:scale-[1.02] cursor-pointer overflow-hidden"
              style={{ 
                backgroundColor: primary ? 'rgba(23, 87, 100, 0.05)' : 'rgba(115, 30, 13, 0.05)',
                borderColor: primary ? 'rgba(23, 87, 100, 0.2)' : 'rgba(115, 30, 13, 0.2)'
              }}
            >
              <CardHeader className="pb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                  style={{ backgroundColor: primary ? '#175764' : '#731E0D' }}
                >
                  <Icon className="w-8 h-8" style={{ color: '#FFF0D1' }} />
                </div>
                <CardTitle className="text-xl font-bold transition-all duration-300" style={{ color: '#175764' }}>
                  {title}
                </CardTitle>
                <div 
                  className="w-12 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0"
                  style={{ backgroundColor: primary ? '#175764' : '#731E0D' }}
                ></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <div key={i} className="relative group/skill">
                      <span 
                        className="px-4 py-2.5 text-sm rounded-2xl border-2 transition-all duration-300 font-medium hover:scale-110 cursor-pointer inline-block shadow-sm hover:shadow-lg"
                        style={{ 
                          backgroundColor: 'rgba(23, 87, 100, 0.1)',
                          color: '#175764',
                          borderColor: 'rgba(23, 87, 100, 0.3)'
                        }}
                      >
                        {skill}
                      </span>
                      

                    </div>
                  ))}
                </div>
                
                {/* Skill count indicator */}
                <div className="pt-4 border-t" style={{ borderColor: 'rgba(23, 87, 100, 0.2)' }}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2" style={{ color: '#731E0D' }}>
                      <Zap className="w-4 h-4" />
                      {skills.length} Skills
                    </span>
                    <div className="flex gap-1">
                      {[...Array(Math.min(skills.length, 5))].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ 
                            backgroundColor: primary ? '#175764' : '#731E0D',
                            animationDelay: `${i * 100}ms`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};