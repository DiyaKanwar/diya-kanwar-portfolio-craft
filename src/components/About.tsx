import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Phone, Mail, User, Target, Rocket } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background text-foreground relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full blur-2xl bg-[#0015240D]"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full blur-2xl bg-[#7957570D]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="space-y-8">
            {[
              {
                icon: User,
                title: "My Journey",
                content: (
                  <>
                    I'm currently pursuing a <span className="font-semibold text-foreground">Bachelor of Engineering in Computer Science</span> at Chandigarh University
                    with a CGPA of <span className="font-semibold text-foreground">7.53</span>. My passion lies in front-end development and creating intuitive user
                    interfaces that solve real-world problems.
                  </>
                )
              },
              {
                icon: Target,
                title: "What Drives Me",
                content: (
                  <>
                    I believe in the power of <span className="font-semibold text-foreground">technology to transform ideas into reality</span>. My approach combines
                    technical expertise with creative problem-solving, always keeping the <span className="font-semibold text-foreground">user experience</span> at
                    the center of every project.
                  </>
                )
              },
              {
                icon: Rocket,
                title: "Looking Forward",
                content: (
                  <>
                    I'm actively seeking <span className="font-semibold text-foreground">internship opportunities</span> where I can contribute to innovative projects,
                    collaborate with experienced teams, and continue growing as a developer.
                  </>
                )
              }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <p className="leading-relaxed pl-14 text-muted-foreground">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side - Cards */}
          <div className="space-y-6">
            {/* Education Card */}
            <Card className="p-6 glass-effect hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Education</h3>
                </div>
                {[
                  {
                    title: "Bachelor of Engineering - CSE",
                    subtitle: "Chandigarh University (Expected July 2026)",
                    extra: "CGPA: 7.53"
                  },
                  {
                    title: "12th Grade",
                    subtitle: "Euro International School, CBSE",
                    extra: "81.67% (2021-2022)"
                  },
                  {
                    title: "10th Grade",
                    subtitle: "Euro International School, CBSE",
                    extra: "87.83% (2019-2020)"
                  }
                ].map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-muted/40">
                    <h4 className="font-semibold text-foreground">{edu.title}</h4>
                    <p className="text-sm text-muted-foreground">{edu.subtitle}</p>
                    <p className="text-sm font-semibold gradient-text">{edu.extra}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card className="p-6 glass-effect hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Location & Contact</h3>
                </div>
                {[
                  { icon: MapPin, text: "Gurgaon, Haryana, India" },
                  { icon: Phone, text: "+91 9643885989" },
                  { icon: Mail, text: "Kanwardiya1@gmail.com" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center text-sm text-muted-foreground">
                    <item.icon className="w-4 h-4 mr-3 text-foreground" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
