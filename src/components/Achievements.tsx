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

      <div className="container mx-auto px-4 sm:px-5 relative z-10 max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium border mb-4 sm:mb-5"
                 style={{ 
                   backgroundColor: `${colors.secondary}15`,
                   borderColor: colors.secondary,
                   color: colors.secondary
                 }}>
            Milestones
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6" style={{ color: colors.primary }}>
            Achievements & <span style={{ color: colors.secondary }}>Certifications</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="border-l" style={{borderColor: `${colors.primary}30`}}>
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="relative pl-8 sm:pl-10 pb-8 sm:pb-10">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: colors.bg }}>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{backgroundColor: colors.primary}}></div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl border transition-all duration-300 hover:shadow-lg"
                       style={{
                         backgroundColor: `${colors.primary}05`,
                         borderColor: `${colors.primary}20`
                       }}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                      <h3 className="text-base sm:text-lg font-bold" style={{ color: colors.primary }}>
                        {achievement.title}
                      </h3>
                      <span className="text-xs sm:text-sm font-medium mt-1.5 sm:mt-0" style={{ color: colors.secondary }}>
                        {achievement.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" style={{ color: colors.secondary }} />
                      <p className="text-sm font-medium" style={{ color: colors.secondary }}>
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