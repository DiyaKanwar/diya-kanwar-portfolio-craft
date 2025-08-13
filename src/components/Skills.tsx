import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Database, Brain, Zap, Star } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    { 
      title: "Front-End Development", 
      skills: ["HTML", "CSS", "JavaScript", "React JS"], 
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    { 
      title: "Programming Languages", 
      skills: ["C++", "Java", "Python", "C#"], 
      icon: Code,
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    { 
      title: "Design Tools", 
      skills: ["Figma", "WordPress"], 
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    },
    { 
      title: "Database", 
      skills: ["MySQL"], 
      icon: Database,
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10"
    },
    { 
      title: "Soft Skills", 
      skills: ["Creativity", "Adaptability", "Critical Thinking", "Communication", "Analytical Thinking"], 
      icon: Brain,
      color: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10"
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
    <section id="skills" className="py-24 bg-background text-foreground relative overflow-hidden min-h-screen">
      {/* Enhanced Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tr from-pink-500/10 to-purple-500/10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl bg-gradient-to-r from-blue-500/5 to-green-500/5"></div>
      <div className="absolute top-20 right-1/4 w-48 h-48 rounded-full blur-2xl bg-gradient-to-br from-indigo-500/8 to-cyan-500/8 animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-sm font-medium text-foreground border border-yellow-500/20">
              My Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Skills & <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            A diverse set of technical and soft skills that help me create amazing digital experiences and solve complex problems
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map(({ title, skills, icon: Icon, color, bgGradient }, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 backdrop-blur-sm border-0 bg-gradient-to-br from-background/50 to-muted/20 hover:scale-[1.02] cursor-pointer"
            >
              <CardHeader className="pb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative`}>
                  <Icon className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300 text-foreground">
                  {title}
                </CardTitle>
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0"></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <div key={i} className="relative group/skill">
                      <span className="px-4 py-2.5 text-sm rounded-2xl border transition-all duration-300 font-medium hover:scale-110 bg-gradient-to-r from-background/80 to-muted/60 text-foreground border-muted-foreground/20 hover:border-yellow-500/40 hover:shadow-lg cursor-pointer inline-block">
                        {skill}
                      </span>
                      
                      {/* Skill proficiency tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gradient-to-r from-gray-900 to-black text-white text-xs rounded-lg opacity-0 group-hover/skill:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                        <div className="flex items-center gap-2">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{proficiencyLevels[skill] || 80}%</span>
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Skill count indicator */}
                <div className="pt-4 border-t border-muted-foreground/10">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      {skills.length} Skills
                    </span>
                    <div className="flex gap-1">
                      {[...Array(Math.min(skills.length, 5))].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${color} animate-pulse`}
                          style={{ animationDelay: `${i * 100}ms` }}
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
          <Card className="inline-block p-8 bg-gradient-to-br from-background/50 to-muted/20 border-0 shadow-lg backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex items-center justify-center gap-8 text-center">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {skillCategories.reduce((total, category) => total + category.skills.length, 0)}+
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    Total Skills
                  </div>
                </div>
                
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent"></div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    {skillCategories.length}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    Categories
                  </div>
                </div>
                
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent"></div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                    4+
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
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