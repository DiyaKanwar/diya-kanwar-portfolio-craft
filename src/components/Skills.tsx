import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Database, Brain, Zap, Star } from "lucide-react";

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

  const proficiencyLevels = {
    "HTML": 95,
    "CSS": 90,
    "JavaScript": 85,
    "React JS": 80,
    "C++": 88,
    "Java": 82,
    "Python": 78,
    "C#": 75,
    "Figma": 85,
    "WordPress": 80,
    "MySQL": 75,
    "Creativity": 95,
    "Adaptability": 90,
    "Critical Thinking": 88,
    "Communication": 85,
    "Analytical Thinking": 90
  };

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
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 backdrop-blur-sm border-0 hover:scale-[1.02] cursor-pointer"
              style={{ backgroundColor: 'rgba(255, 240, 209, 0.8)' }}
            >
              <CardHeader className="pb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative"
                  style={{ backgroundColor: primary ? '#175764' : '#731E0D' }}
                >
                  <Icon className="w-8 h-8" style={{ color: '#FFF0D1' }} />
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: 'rgba(255, 240, 209, 0.2)' }}
                  ></div>
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
                      
                      {/* Skill proficiency tooltip */}
                      <div 
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs rounded-lg opacity-0 group-hover/skill:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg z-20"
                        style={{ backgroundColor: '#175764', color: '#FFF0D1' }}
                      >
                        <div className="flex items-center gap-2">
                          <Star className="w-3 h-3 fill-current" style={{ color: '#731E0D' }} />
                          <span>{proficiencyLevels[skill] || 80}%</span>
                        </div>
                        <div 
                          className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent"
                          style={{ borderTopColor: '#175764' }}
                        ></div>
                      </div>
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

        {/* Skills Summary */}
        <div className="text-center">
          <Card 
            className="inline-block p-8 border-2 shadow-lg backdrop-blur-sm"
            style={{ 
              backgroundColor: 'rgba(255, 240, 209, 0.9)',
              borderColor: '#175764'
            }}
          >
            <CardContent className="p-0">
              <div className="flex items-center justify-center gap-8 text-center">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#175764' }}>
                    {skillCategories.reduce((total, category) => total + category.skills.length, 0)}+
                  </div>
                  <div className="text-sm font-medium uppercase tracking-wide" style={{ color: '#731E0D' }}>
                    Total Skills
                  </div>
                </div>
                
                <div 
                  className="w-px h-12"
                  style={{ backgroundColor: 'rgba(23, 87, 100, 0.3)' }}
                ></div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#731E0D' }}>
                    {skillCategories.length}
                  </div>
                  <div className="text-sm font-medium uppercase tracking-wide" style={{ color: '#731E0D' }}>
                    Categories
                  </div>
                </div>
                
                <div 
                  className="w-px h-12"
                  style={{ backgroundColor: 'rgba(23, 87, 100, 0.3)' }}
                ></div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#175764' }}>
                    4+
                  </div>
                  <div className="text-sm font-medium uppercase tracking-wide" style={{ color: '#731E0D' }}>
                    Years Learning
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};