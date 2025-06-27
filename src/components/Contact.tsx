
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Send, Heart } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#FFF0D1' }}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(59, 48, 48, 0.05)' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(121, 87, 87, 0.05)' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#3B3030' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#795757' }}>
            I'm always interested in new opportunities and collaborations. Let's connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 tech-shadow backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300 group" style={{ backgroundColor: 'rgba(255, 240, 209, 0.8)' }}>
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Send className="w-6 h-6" style={{ color: '#FFF0D1' }} />
                  </div>
                  <CardTitle className="text-2xl font-bold" style={{ color: '#3B3030' }}>
                    Let's Work Together
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="leading-relaxed" style={{ color: '#795757' }}>
                  I'm currently seeking <span className="font-semibold" style={{ color: '#3B3030' }}>internship opportunities</span> in front-end development where I can 
                  contribute to innovative projects and grow as a developer.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 rounded-xl transition-colors duration-300 group/item hover:bg-white/30">
                    <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5" style={{ color: '#FFF0D1' }} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: '#3B3030' }}>Email</p>
                      <a 
                        href="mailto:Kanwardiya1@gmail.com"
                        className="font-medium transition-colors duration-300"
                        style={{ color: '#795757' }}
                      >
                        Kanwardiya1@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 rounded-xl transition-colors duration-300 group/item hover:bg-white/30">
                    <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5" style={{ color: '#FFF0D1' }} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: '#3B3030' }}>Phone</p>
                      <a 
                        href="tel:+919643885989"
                        className="font-medium transition-colors duration-300"
                        style={{ color: '#795757' }}
                      >
                        +91 9643885989
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 rounded-xl transition-colors duration-300 group/item hover:bg-white/30">
                    <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5" style={{ color: '#FFF0D1' }} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: '#3B3030' }}>Location</p>
                      <p style={{ color: '#795757' }}>Gurgaon, Haryana, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 tech-shadow backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300 group" style={{ backgroundColor: 'rgba(255, 240, 209, 0.8)' }}>
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6" style={{ color: '#FFF0D1' }} />
                  </div>
                  <CardTitle className="text-2xl font-bold" style={{ color: '#3B3030' }}>
                    Connect With Me
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="leading-relaxed" style={{ color: '#795757' }}>
                  Follow my journey and connect with me on social media platforms.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="https://github.com/DiyaKanwar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl border transition-all duration-300 group/link hover:scale-105"
                    style={{ 
                      borderColor: 'rgba(121, 87, 87, 0.3)',
                      backgroundColor: 'rgba(255, 240, 209, 0.5)'
                    }}
                  >
                    <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300">
                      <Github className="w-5 h-5" style={{ color: '#FFF0D1' }} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: '#3B3030' }}>GitHub</p>
                      <p className="text-sm" style={{ color: '#795757' }}>Check out my repositories</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/diya-kanwar-6a045024a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-xl border transition-all duration-300 group/link hover:scale-105"
                    style={{ 
                      borderColor: 'rgba(121, 87, 87, 0.3)',
                      backgroundColor: 'rgba(255, 240, 209, 0.5)'
                    }}
                  >
                    <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300">
                      <Linkedin className="w-5 h-5" style={{ color: '#FFF0D1' }} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: '#3B3030' }}>LinkedIn</p>
                      <p className="text-sm" style={{ color: '#795757' }}>Let's connect professionally</p>
                    </div>
                  </a>
                </div>

                <div className="pt-4">
                  <Button 
                    className="w-full gradient-primary hover:opacity-90 rounded-xl font-semibold py-3 transition-all duration-300 hover:scale-105 tech-shadow"
                    onClick={() => window.open('mailto:Kanwardiya1@gmail.com', '_blank')}
                    style={{ color: '#FFF0D1' }}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send me an Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t" style={{ borderColor: 'rgba(121, 87, 87, 0.2)' }}>
          <p style={{ color: '#795757' }}>
            © 2024 Diya Kanwar. Built with <span style={{ color: '#3B3030' }}>React</span>, <span style={{ color: '#3B3030' }}>TypeScript</span>, and <span className="gradient-text">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
