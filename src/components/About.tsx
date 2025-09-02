import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  User, Target, Rocket, GraduationCap, MapPin, Phone, Mail, Award
} from "lucide-react";

interface AboutProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  darkMode: boolean; // This is the line you need to add
}

const About: React.FC<AboutProps> = ({ colors, darkMode }) => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Dynamic Background - Same as Hero */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-15"
          style={{ backgroundColor: colors.primary }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl animate-pulse opacity-10"
          style={{ backgroundColor: colors.secondary, animationDelay: "1000ms" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-5 relative z-10 max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <Badge
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium border mb-4 sm:mb-5"
            style={{
              backgroundColor: `${colors.secondary}15`,
              borderColor: colors.secondary,
              color: colors.secondary,
            }}
          >
            Get to Know Me
          </Badge>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6"
            style={{ color: colors.primary }}
          >
            About <span style={{ color: colors.secondary }}>Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Story Cards */}
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                icon: User,
                title: "My Journey",
                content:
                  "Computer Science student at Chandigarh University with 7.53 CGPA, passionate about creating user-centered digital experiences that solve real-world problems.",
              },
              {
                icon: Target,
                title: "What Drives Me",
                content:
                  "I believe in the power of technology to transform ideas into reality. My approach combines technical expertise with creative problem-solving.",
              },
              {
                icon: Rocket,
                title: "Looking Forward",
                content:
                  "Actively seeking UX/UI internship opportunities to contribute to innovative projects and grow with experienced teams.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="p-4 sm:p-6 border shadow-md hover:shadow-lg transition-all duration-500 hover:scale-[1.02] group"
                style={{
                  backgroundColor:
                    idx % 2 === 0 ? `${colors.primary}10` : `${colors.secondary}10`,
                  borderColor:
                    idx % 2 === 0 ? `${colors.primary}30` : `${colors.secondary}30`,
                }}
              >
                <CardContent className="p-0">
                  <div className="flex items-start mb-4">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mr-4 sm:mr-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-md"
                      style={{
                        backgroundColor: idx % 2 === 0 ? colors.primary : colors.secondary,
                      }}
                    >
                      <item.icon
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        style={{ color: colors.bg }} 
                      />
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-bold mb-3"
                        style={{ color: colors.primary }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="leading-relaxed"
                        style={{ color: colors.secondary }}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education & Contact */}
          <div className="space-y-8">
            {/* Education Card */}
            <Card
              className="p-8 border-2 shadow-lg"
              style={{
                backgroundColor: `${colors.secondary}10`,
                borderColor: `${colors.secondary}30`,
              }}
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
                    style={{ backgroundColor: colors.secondary }}
                  >
                    <GraduationCap
                      className="w-8 h-8"
                      style={{ color: colors.bg }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: colors.primary }}>
                      Education
                    </h3>
                    <p style={{ color: colors.secondary }}>Academic Excellence</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Bachelor of Engineering - CSE",
                      subtitle: "Chandigarh University (Expected July 2026)",
                      extra: "CGPA: 7.53",
                      current: true,
                    },
                    {
                      title: "12th Grade - CBSE",
                      subtitle: "Euro International School",
                      extra: "81.67% (2021-2022)",
                      current: false,
                    },
                  ].map((edu, idx) => (
                    <div
                      key={idx}
                      className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                        edu.current ? "border-2" : ""
                      }`}
                      style={{
                        backgroundColor: edu.current
                          ? `${colors.primary}15`
                          : `${colors.secondary}10`,
                        borderColor: edu.current ? colors.primary : "transparent",
                      }}
                    >
                      {edu.current && (
                        <Badge
                          className="mb-3 font-bold"
                          style={{
                            backgroundColor: colors.secondary,
                            color: colors.primary,
                          }}
                        >
                          Current
                        </Badge>
                      )}
                      <h4
                        className="font-bold text-lg mb-2"
                        style={{ color: colors.primary }}
                      >
                        {edu.title}
                      </h4>
                      <p className="mb-2" style={{ color: colors.secondary }}>
                        {edu.subtitle}
                      </p>
                      <div className="flex items-center">
                        <Award
                          className="w-4 h-4 mr-2"
                          style={{ color: colors.secondary }}
                        />
                        <p className="font-bold" style={{ color: colors.secondary }}>
                          {edu.extra}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card
              className="p-8 border-2 shadow-lg"
              style={{
                backgroundColor: `${colors.primary}10`,
                borderColor: `${colors.primary}30`,
              }}
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6 shadow-lg"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <Mail className="w-8 h-8" style={{ color: colors.bg }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: colors.primary }}>
                      Contact Info
                    </h3>
                    <p style={{ color: colors.secondary }}>Let's connect</p>
                  </div>
                </div>

                {/* Only email left */}
                <div className="space-y-4">
                  <div
                    className="flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: `${colors.secondary}10` }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                      style={{ backgroundColor: colors.secondary }}
                    >
                      <Mail className="w-6 h-6" style={{ color: colors.bg }} />
                    </div>
                    <span className="font-medium" style={{ color: colors.secondary }}>
                      Kanwardiya1@gmail.com
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;