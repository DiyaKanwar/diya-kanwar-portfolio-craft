import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Phone, Mail, User, Target, Rocket, Award } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden min-h-screen" style={{ backgroundColor: '#FFF0D1' }}>
      {/* Enhanced Background effects using theme colors */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-30"
        style={{ backgroundColor: '#175764' }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl animate-pulse opacity-20"
        style={{ backgroundColor: '#731E0D', animationDelay: '1000ms' }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl opacity-10"
        style={{ backgroundColor: '#175764' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span 
              className="px-6 py-3 rounded-full text-sm font-medium border-2 backdrop-blur-sm"
              style={{ 
                backgroundColor: 'rgba(23, 87, 100, 0.1)', 
                borderColor: '#175764',
                color: '#175764'
              }}
            >
              Get to know me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: '#175764' }}>
            About <span style={{ color: '#731E0D' }}>Me</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#731E0D' }}>
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
                    I'm currently pursuing a <span className="font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'rgba(23, 87, 100, 0.1)', color: '#175764' }}>Bachelor of Engineering in Computer Science</span> at Chandigarh University
                    with a CGPA of <span className="font-bold px-2 py-1 rounded" style={{ backgroundColor: 'rgba(115, 30, 13, 0.1)', color: '#731E0D' }}>7.53</span>. My passion lies in front-end development and creating intuitive user
                    interfaces that solve real-world problems.
                  </>
                )
              },
              {
                icon: Target,
                title: "What Drives Me",
                subtitle: "Purpose behind the code",
                content: (
                  <>
                    I believe in the power of <span className="font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'rgba(115, 30, 13, 0.1)', color: '#731E0D' }}>technology to transform ideas into reality</span>. My approach combines
                    technical expertise with creative problem-solving, always keeping the <span className="font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'rgba(23, 87, 100, 0.1)', color: '#175764' }}>user experience</span> at
                    the center of every project.
                  </>
                )
              },
              {
                icon: Rocket,
                title: "Looking Forward",
                subtitle: "Ready for new challenges",
                content: (
                  <>
                    I'm actively seeking <span className="font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'rgba(23, 87, 100, 0.1)', color: '#175764' }}>internship opportunities</span> where I can contribute to innovative projects,
                    collaborate with experienced teams, and continue growing as a developer. Ready to bring fresh perspectives and dedication to your team.
                  </>
                )
              }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <Card 
                  className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(255, 240, 209, 0.8)' }}
                >
                  <CardContent className="p-0">
                    <div className="flex items-start mb-6">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                        style={{ backgroundColor: idx === 1 ? '#731E0D' : '#175764' }}
                      >
                        <item.icon className="w-7 h-7" style={{ color: '#FFF0D1' }} />
                      </div>
                      <div className="flex-1">
                        <h3 
                          className="text-2xl font-bold mb-2 transition-all duration-300"
                          style={{ color: '#175764' }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-sm font-medium mb-4 uppercase tracking-wide" style={{ color: '#731E0D' }}>
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="leading-relaxed text-lg" style={{ color: '#731E0D' }}>
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
            <Card 
              className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(255, 240, 209, 0.8)' }}
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-8">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                    style={{ backgroundColor: '#175764' }}
                  >
                    <GraduationCap className="w-7 h-7" style={{ color: '#FFF0D1' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold transition-all duration-300" style={{ color: '#175764' }}>
                      Education
                    </h3>
                    <p className="text-sm font-medium uppercase tracking-wide" style={{ color: '#731E0D' }}>
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
                    <div 
                      key={idx} 
                      className={`p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden ${
                        edu.level === 'current' ? 'border-2' : ''
                      }`}
                      style={{ 
                        backgroundColor: edu.level === 'current' 
                          ? 'rgba(23, 87, 100, 0.1)' 
                          : 'rgba(115, 30, 13, 0.1)',
                        borderColor: edu.level === 'current' ? '#175764' : 'transparent'
                      }}
                    >
                      {edu.level === 'current' && (
                        <div className="absolute top-2 right-2">
                          <span 
                            className="px-3 py-1 text-xs font-semibold rounded-full"
                            style={{ backgroundColor: '#731E0D', color: '#FFF0D1' }}
                          >
                            Current
                          </span>
                        </div>
                      )}
                      <h4 className="font-bold text-lg mb-2" style={{ color: '#175764' }}>{edu.title}</h4>
                      <p className="mb-2" style={{ color: '#731E0D' }}>{edu.subtitle}</p>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2" style={{ color: '#731E0D' }} />
                        <p className="font-bold" style={{ color: '#731E0D' }}>{edu.extra}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card 
              className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(255, 240, 209, 0.8)' }}
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-8">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                    style={{ backgroundColor: '#731E0D' }}
                  >
                    <MapPin className="w-7 h-7" style={{ color: '#FFF0D1' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold transition-all duration-300" style={{ color: '#175764' }}>
                      Get In Touch
                    </h3>
                    <p className="text-sm font-medium uppercase tracking-wide" style={{ color: '#731E0D' }}>
                      Let's connect
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { icon: MapPin, text: "Gurgaon, Haryana, India" },
                    { icon: Phone, text: "+91 9643885989" },
                    { icon: Mail, text: "Kanwardiya1@gmail.com" }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] group/item"
                      style={{ backgroundColor: 'rgba(23, 87, 100, 0.1)' }}
                    >
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: idx === 0 ? '#175764' : idx === 1 ? '#731E0D' : '#175764' }}
                      >
                        <item.icon className="w-5 h-5" style={{ color: '#FFF0D1' }} />
                      </div>
                      <span className="font-medium transition-all duration-300" style={{ color: '#175764' }}>
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