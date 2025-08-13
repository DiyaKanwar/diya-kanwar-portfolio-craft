import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Send, Heart } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden min-h-screen" style={{ backgroundColor: '#FFF0D1' }}>
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
              Let's Connect
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: '#175764' }}>
            Get In <span style={{ color: '#731E0D' }}>Touch</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#731E0D' }}>
            I'm always interested in new opportunities and collaborations. Let's connect and create something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info Card */}
            <Card 
              className="p-8 border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group"
              style={{ 
                backgroundColor: 'rgba(23, 87, 100, 0.05)',
                borderColor: 'rgba(23, 87, 100, 0.2)'
              }}
            >
              <CardContent className="p-0">
                <div className="flex items-start mb-6">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                    style={{ backgroundColor: '#175764' }}
                  >
                    <Send className="w-7 h-7" style={{ color: '#FFF0D1' }} />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-2xl font-bold mb-2 transition-all duration-300"
                      style={{ color: '#175764' }}
                    >
                      Let's Work Together
                    </h3>
                    <p className="text-sm font-medium mb-4 uppercase tracking-wide" style={{ color: '#731E0D' }}>
                      Open for opportunities
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed text-lg" style={{ color: '#731E0D' }}>
                  I'm currently seeking <span className="font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'rgba(23, 87, 100, 0.1)', color: '#175764' }}>internship opportunities</span> in front-end development where I can contribute to innovative projects and grow as a developer.
                </p>

                <div className="space-y-4 mt-8">
                  {/* Email */}
                  <div className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden border-2"
                    style={{ 
                      backgroundColor: 'rgba(23, 87, 100, 0.1)',
                      borderColor: 'rgba(23, 87, 100, 0.2)'
                    }}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                        style={{ backgroundColor: '#175764' }}
                      >
                        <Mail className="w-6 h-6" style={{ color: '#FFF0D1' }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1" style={{ color: '#175764' }}>Email</h4>
                        <a href="mailto:Kanwardiya1@gmail.com" className="font-medium hover:font-semibold transition-all" style={{ color: '#731E0D' }}>
                          Kanwardiya1@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
                    style={{ 
                      backgroundColor: 'rgba(115, 30, 13, 0.1)'
                    }}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                        style={{ backgroundColor: '#731E0D' }}
                      >
                        <Phone className="w-6 h-6" style={{ color: '#FFF0D1' }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1" style={{ color: '#175764' }}>Phone</h4>
                        <a href="tel:+919643885989" className="font-medium hover:font-semibold transition-all" style={{ color: '#731E0D' }}>
                          +91 9643885989
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
                    style={{ 
                      backgroundColor: 'rgba(23, 87, 100, 0.1)'
                    }}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                        style={{ backgroundColor: '#175764' }}
                      >
                        <MapPin className="w-6 h-6" style={{ color: '#FFF0D1' }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1" style={{ color: '#175764' }}>Location</h4>
                        <p className="font-medium" style={{ color: '#731E0D' }}>Gurgaon, Haryana, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links Card */}
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
                    <Heart className="w-7 h-7" style={{ color: '#FFF0D1' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold transition-all duration-300" style={{ color: '#175764' }}>
                      Connect With Me
                    </h3>
                    <p className="text-sm font-medium uppercase tracking-wide" style={{ color: '#731E0D' }}>
                      Let's stay in touch
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* GitHub */}
                  <a
                    href="https://github.com/DiyaKanwar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] block"
                    style={{ backgroundColor: 'rgba(23, 87, 100, 0.1)' }}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                        style={{ backgroundColor: '#175764' }}
                      >
                        <Github className="w-6 h-6" style={{ color: '#FFF0D1' }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1" style={{ color: '#175764' }}>GitHub</h4>
                        <p style={{ color: '#731E0D' }}>Check out my repositories</p>
                      </div>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/diya-kanwar-6a045024a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] block"
                    style={{ backgroundColor: 'rgba(115, 30, 13, 0.1)' }}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                        style={{ backgroundColor: '#731E0D' }}
                      >
                        <Linkedin className="w-6 h-6" style={{ color: '#FFF0D1' }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1" style={{ color: '#175764' }}>LinkedIn</h4>
                        <p style={{ color: '#731E0D' }}>Let's connect professionally</p>
                      </div>
                    </div>
                  </a>

                  {/* Email Button */}
                  <Button
                    className="w-full p-6 mt-6 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => window.open('mailto:Kanwardiya1@gmail.com', '_blank')}
                    style={{ 
                      backgroundColor: '#175764',
                      color: '#FFF0D1'
                    }}
                  >
                    <Mail className="w-6 h-6 mr-3" />
                    Send me an Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8" style={{ borderTop: '2px solid rgba(115, 30, 13, 0.1)' }}>
          <p style={{ color: '#731E0D' }} className="text-lg">
            © {new Date().getFullYear()} Diya Kanwar. Built with <span className="font-semibold">React</span>, <span className="font-semibold">TypeScript</span>, and <span className="font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'rgba(23, 87, 100, 0.1)', color: '#175764' }}>Tailwind CSS</span>
          </p>
        </div>
      </div>
    </section>
  );
};
