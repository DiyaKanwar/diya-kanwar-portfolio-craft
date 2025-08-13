import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, BookOpen, Wrench, GraduationCap } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      title: "Elite Silver - NPTEL Cloud Computing",
      organization: "Swayam",
      date: "April 2024",
      type: "Certification",
      description: "Successfully completed cloud computing course with Elite Silver grade",
      icon: Award
    },
    {
      title: "Game of Code Participant",
      organization: "IEEE",
      date: "March 27-29, 2024",
      type: "Competition",
      description: "Participated in the competitive programming event organized by IEEE",
      icon: Trophy
    },
    {
      title: "Introduction to Databases",
      organization: "Meta via Coursera",
      date: "March 2024",
      type: "Certification",
      description: "Meta certificate program focusing on database fundamentals and design",
      icon: GraduationCap
    },
    {
      title: "Flutter Workshop",
      organization: "CSE Department",
      date: "February 2024",
      type: "Workshop",
      description: "Attended hands-on workshop on Flutter mobile app development",
      icon: Wrench
    },
    {
      title: "Multi-Core Computer Architecture",
      organization: "Swayam",
      date: "July-October 2023",
      type: "Course",
      description: "Comprehensive course on computer architecture and multi-core systems",
      icon: BookOpen
    }
  ];



  return (
    <section id="achievements" className="py-24 relative overflow-hidden min-h-screen" style={{ backgroundColor: '#FFF0D1' }}>
      {/* Enhanced Background effects */}
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

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span 
              className="px-6 py-3 rounded-full text-sm font-medium border-2"
              style={{ 
                backgroundColor: 'rgba(115, 30, 13, 0.1)', 
                borderColor: '#731E0D',
                color: '#731E0D'
              }}
            >
              Growth & Learning
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: '#175764' }}>
            Achievements & <span style={{ color: '#731E0D' }}>Certifications</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#731E0D' }}>
            A collection of my accomplishments and continuous learning journey in technology and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index} 
                className="group transition-all duration-500 hover:-translate-y-2 border-2 overflow-hidden"
                style={{ 
                  backgroundColor: index % 2 === 0 ? 'rgba(23, 87, 100, 0.05)' : 'rgba(115, 30, 13, 0.05)',
                  borderColor: index % 2 === 0 ? 'rgba(23, 87, 100, 0.2)' : 'rgba(115, 30, 13, 0.2)'
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                        style={{ 
                          backgroundColor: index % 2 === 0 ? '#175764' : '#731E0D'
                        }}
                      >
                        <Icon className="w-7 h-7" style={{ color: '#FFF0D1' }} />
                      </div>
                      <span 
                        className="px-3 py-1 text-xs rounded-full font-medium"
                        style={{ 
                          backgroundColor: index % 2 === 0 ? 'rgba(23, 87, 100, 0.1)' : 'rgba(115, 30, 13, 0.1)',
                          color: index % 2 === 0 ? '#175764' : '#731E0D'
                        }}
                      >
                        {achievement.type}
                      </span>
                    </div>
                    <span 
                      className="text-sm font-medium px-3 py-1 rounded-full"
                      style={{ 
                        backgroundColor: 'rgba(255, 240, 209, 0.8)',
                        color: index % 2 === 0 ? '#175764' : '#731E0D'
                      }}
                    >
                      {achievement.date}
                    </span>
                  </div>
                  <CardTitle 
                    className="text-xl font-bold mb-2"
                    style={{ color: index % 2 === 0 ? '#175764' : '#731E0D' }}
                  >
                    {achievement.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: index % 2 === 0 ? '#175764' : '#731E0D' }}
                      ></span>
                      <p 
                        className="text-sm font-semibold"
                        style={{ color: index % 2 === 0 ? '#175764' : '#731E0D' }}
                      >
                        {achievement.organization}
                      </p>
                    </div>
                    <p 
                      className="text-base leading-relaxed pl-4"
                      style={{ color: '#731E0D' }}
                    >
                      {achievement.description}
                    </p>
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
