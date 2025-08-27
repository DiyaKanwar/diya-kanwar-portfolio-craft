import React, { useState } from 'react';

// Import the Navigation component
import { Navigation } from './components/Navigation'; 
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Theme colors
  const colors = {
    primary: darkMode ? '#FFF0D1' : '#175764',
    secondary: darkMode ? '#175764' : '#731E0D', 
    accent: darkMode ? '#731E0D' : '#FFF0D1',
    bg: darkMode ? '#0a0a0a' : '#FFF0D1'
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen transition-all duration-500" style={{ backgroundColor: colors.bg }}>
      {/* Render the Navigation component and pass the colors object as a prop */}
      <Navigation colors={colors} />
      
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} colors={colors} />
      
      {/* The rest of your components remain the same */}
      <Hero colors={colors} scrollToSection={scrollToSection} />
      <Projects colors={colors} />
      <Skills colors={colors} />
      <About colors={colors} />
      <Achievements colors={colors} />
      <Contact colors={colors} />
    </div>
  );
}

export default App;