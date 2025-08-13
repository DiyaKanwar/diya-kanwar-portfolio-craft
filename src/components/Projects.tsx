import React from "react";

interface Project {
  title: string;
  date: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: "Vocal AI Assistant",
    date: "December 2024",
    description:
      "Developed an interactive AI voice assistant using JavaScript, Speech Recognition API, and Tailwind CSS.",
    features: [
      "Voice Command Recognition",
      "Conversational AI Responses",
      "Real-time Subtitle Generation",
    ],
    technologies: ["JavaScript", "Speech Recognition API", "Tailwind CSS"],
    image: "", // optional future thumbnail
    // liveLink: "", // optional future link
  },
  {
    title: "Stone-Paper-Scissors Game",
    date: "March 2023",
    description:
      "Developed a GUI for a Stone-Paper-Scissors game using Java and Swing, improving user interaction.",
    features: ["Graphical User Interface", "Interactive Gameplay", "User-friendly Design"],
    technologies: ["Java", "Swing"],
    image: "", // optional future thumbnail
    // liveLink: "", // optional future link
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden min-h-screen" style={{ backgroundColor: '#FFF0D1' }}>
      {/* Background effects */}
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
              className="px-6 py-3 rounded-full text-sm font-medium border-2 backdrop-blur-sm"
              style={{ 
                backgroundColor: 'rgba(115, 30, 13, 0.1)', 
                borderColor: '#731E0D',
                color: '#731E0D'
              }}
            >
              My Work
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: '#175764' }}>
            My <span style={{ color: '#731E0D' }}>Projects</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#731E0D' }}>
            A collection of my most impactful projects that showcase my technical skills and creativity
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const card = (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden border-2 transition-all duration-500"
                style={{
                  minHeight: "380px",
                  backgroundColor: 'rgba(23, 87, 100, 0.05)',
                  borderColor: 'rgba(23, 87, 100, 0.2)'
                }}
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span 
                        className="px-3 py-1 text-xs rounded-full font-medium"
                        style={{ backgroundColor: '#731E0D', color: '#FFF0D1' }}
                      >
                        {project.date}
                      </span>
                      {project.liveLink && (
                        <span 
                          className="px-3 py-1 text-xs rounded-full font-medium animate-pulse"
                          style={{ backgroundColor: '#175764', color: '#FFF0D1' }}
                        >
                          Live Project
                        </span>
                      )}
                    </div>
                    <h3 
                      className="text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ color: '#175764' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: '#731E0D' }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-semibold" style={{ color: '#175764' }}>Key Features</span>
                      <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(23, 87, 100, 0.2)' }}></div>
                    </div>
                    <ul className="grid gap-3">
                      {project.features.map((f, i) => (
                        <li 
                          key={i} 
                          className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          <span 
                            className="w-2 h-2 rounded-full mt-2 transition-colors duration-300"
                            style={{ backgroundColor: '#731E0D' }}
                          ></span>
                          <span className="text-sm" style={{ color: '#731E0D' }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 pt-6 border-t" style={{ borderColor: 'rgba(23, 87, 100, 0.2)' }}>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                          style={{ 
                            backgroundColor: 'rgba(23, 87, 100, 0.1)',
                            color: '#175764',
                            border: '1px solid rgba(23, 87, 100, 0.2)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );

            return project.liveLink ? (
              <a 
                key={index}
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block transform transition-transform duration-500 hover:scale-[1.02]"
              >
                {card}
              </a>
            ) : (
              card
            );
          })}
        </div>
      </div>
    </section>
  );
};
