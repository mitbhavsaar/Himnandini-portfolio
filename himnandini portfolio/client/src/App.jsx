import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutModal from './components/AboutModal';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  useEffect(() => {
    // Strictly default to light mode on initial load
    setIsDark(false);
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#fbfafd] dark:bg-[#070d0c] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-purple-500/20 selection:text-purple-900 dark:selection:text-purple-300">
      {/* Navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main>
        <Hero isDark={isDark} />
        <About isDark={isDark} onOpenAboutModal={() => setAboutModalOpen(true)} />
        <TechStack isDark={isDark} />
        <Experience isDark={isDark} />
        <Projects isDark={isDark} />
        <Contact isDark={isDark} />
      </main>


      {/* Floating AI Chatbot Widget */}
      <AIChatBot />

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* About Detailed Modal */}
      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
      />
    </div>
  );
}

export default App;
