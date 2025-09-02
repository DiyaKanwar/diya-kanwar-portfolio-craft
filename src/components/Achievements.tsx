import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, GraduationCap, Wrench } from "lucide-react";

interface AchievementsProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  darkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ colors, darkMode }) => {
  const achievements = [
    {
      title: "Elite Silver - NPTEL Cloud Computing",
      organization: "Swayam",
      date: "April 2024",
      icon: Award,
    },
    {
      title: "Game of Code Participant",
      organization: "IEEE",
      date: "March 2024",
      icon: Trophy,
    },
    {
      title: "Introduction to Databases",
      organization: "Meta via Coursera",
      date: "March 2024",
      icon: GraduationCap,
    },
    {
      title: "Flutter Workshop Completion",
      organization: "CSE Department",
      date: "February 2024",
      icon: Wrench,
    }
  ];

  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
           style={{ backgroundColor: colors.secondary }}></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
           style={{ backgroundColor: colors.accent }}></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
           style={{ backgroundColor: colors.primary }}></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-20">
          <Badge className="px-8 py-4 rounded-full text-sm font-bold border-2 mb-6"
                 style={{ 
                   backgroundColor: `${colors.secondary}15`,
                   borderColor: colors.secondary,
                   color: colors.secondary
                 }}>
            Milestones
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-8" style={{ color: colors.primary }}>
            Achievements & <span style={{ color: colors.secondary }}>Certifications</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="border-l-2" style={{borderColor: `${colors.primary}30`}}>
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="relative pl-12 pb-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1 transform -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: colors.bg }}>
                      <div className="w-4 h-4 rounded-full" style={{backgroundColor: colors.primary}}></div>
                  </div>

                  <div className="p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl"
                       style={{
                         backgroundColor: `${colors.primary}05`,
                         borderColor: `${colors.primary}20`
                       }}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                      <h3 className="text-xl font-bold" style={{ color: colors.primary }}>
                        {achievement.title}
                      </h3>
                      <span className="text-sm font-medium mt-2 sm:mt-0" style={{ color: colors.secondary }}>
                        {achievement.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" style={{ color: colors.secondary }} />
                      <p className="font-semibold" style={{ color: colors.secondary }}>
                        {achievement.organization}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;