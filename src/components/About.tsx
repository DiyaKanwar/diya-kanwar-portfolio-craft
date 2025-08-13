import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Phone, Mail, User, Target, Rocket, Award } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background text-foreground relative overflow-hidden min-h-screen">
      {/* Enhanced Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl bg-gradient-to-r from-cyan-500/5 to-violet-500/5"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-sm font-medium text-foreground border border-blue-500/20">
              Get to know me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Passionate about creating digital experiences that make a difference and solving complex problems through innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Story Cards */}
          <div className="space-y-8">
            {[
              {
                icon: User,
                title: "My Journey",
                subtitle: "Building the foundation",
                content: (
                  <>
                    I'm currently pursuing a <span className="font-semibold text-foreground bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-2 py-1 rounded">Bachelor of Engineering in Computer Science</span> at Chandigarh University
                    with a CGPA of <span className="font-bold text-foreground bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-2 py-1 rounded">7.53</span>. My passion lies in front-end development and creating intuitive user
                    interfaces that solve real-world problems.
                  </>
                ),
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Target,
                title: "What Drives Me",
                subtitle: "Purpose behind the code",
                content: (
                  <>
                    I believe in the power of <span className="font-semibold text-foreground bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-2 py-1 rounded">technology to transform ideas into reality</span>. My approach combines
                    technical expertise with creative problem-solving, always keeping the <span className="font-semibold text-foreground bg-gradient-to-r from-orange-500/10 to-red-500/10 px-2 py-1 rounded">user experience</span> at
                    the center of every project.
                  </>
                ),
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Rocket,
                title: "Looking Forward",
                subtitle: "Ready for new challenges",
                content: (
                  <>
                    I'm actively seeking <span className="font-semibold text-foreground bg-gradient-to-r from-indigo-500/10 to-blue-500/10 px-2 py-1 rounded">internship opportunities</span> where I can contribute to innovative projects,
                    collaborate with experienced teams, and continue growing as a developer. Ready to bring fresh perspectives and dedication to your team.
                  </>
                ),
                color: "from-indigo-500 to-purple-500"
              }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <Card className="p-8 bg-gradient-to-br from-background/50 to-muted/20 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="flex items-start mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="leading-relaxed text-muted-foreground text-lg">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Right Side - Info Cards */}
          <div className="space-y-8">
            {/* Education Card */}
            <Card className="p-8 bg-gradient-to-br from-background/50 to-muted/20 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all duration-300">
                      Education
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Academic Excellence
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Bachelor of Engineering - CSE",
                      subtitle: "Chandigarh University (Expected July 2026)",
                      extra: "CGPA: 7.53",
                      level: "current"
                    },
                    {
                      title: "12th Grade",
                      subtitle: "Euro International School, CBSE",
                      extra: "81.67% (2021-2022)",
                      level: "completed"
                    },
                    {
                      title: "10th Grade",
                      subtitle: "Euro International School, CBSE",
                      extra: "87.83% (2019-2020)",
                      level: "completed"
                    }
                  ].map((edu, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden ${
                      edu.level === 'current' 
                        ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20' 
                        : 'bg-muted/40 hover:bg-muted/60'
                    }`}>
                      {edu.level === 'current' && (
                        <div className="absolute top-2 right-2">
                          <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
                            Current
                          </span>
                        </div>
                      )}
                      <h4 className="font-bold text-foreground text-lg mb-2">{edu.title}</h4>
                      <p className="text-muted-foreground mb-2">{edu.subtitle}</p>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-yellow-500" />
                        <p className="font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">{edu.extra}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card className="p-8 bg-gradient-to-br from-background/50 to-muted/20 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-rose-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                      Get In Touch
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Let's connect
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { icon: MapPin, text: "Gurgaon, Haryana, India", color: "text-blue-500" },
                    { icon: Phone, text: "+91 9643885989", color: "text-green-500" },
                    { icon: Mail, text: "Kanwardiya1@gmail.com", color: "text-purple-500" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] group/item">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <span className="font-medium text-foreground group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-gray-700 group-hover/item:to-gray-900 group-hover/item:bg-clip-text dark:group-hover/item:from-gray-200 dark:group-hover/item:to-gray-400 transition-all duration-300">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};