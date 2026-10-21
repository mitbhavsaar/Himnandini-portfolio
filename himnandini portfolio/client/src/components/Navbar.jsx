import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowDown, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ isDark, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'tech-stack', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#ai-section') {
      const chatBtn = document.querySelector('[data-ai-trigger]');
      if (chatBtn) {
        chatBtn.click();
        return;
      }
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#070d0c]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-white/5 py-3 shadow-xs'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* HS Brand Monogram Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight text-slate-950 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          HS
        </a>

        {/* Center Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const linkId = link.name.toLowerCase();
            const isActive = activeSection === linkId || (linkId === 'home' && activeSection === 'home');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative py-1 text-sm lg:text-[15px] font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-purple-700 dark:text-purple-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2.5px] bg-purple-600 dark:bg-purple-400 rounded-full transition-all duration-300" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Download CV + Capsule Theme Toggle Switch */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Download CV Button */}
          <a
            href="/Himnandini_Sharma_CV.pdf"
            download="Himnandini_Sharma_CV.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Download CV</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          {/* Capsule Theme Toggle Switch */}
          <button
            type="button"
            id="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            className="flex items-center gap-1 p-1 rounded-full bg-amber-50/90 hover:bg-amber-100/90 dark:bg-slate-800/90 dark:hover:bg-slate-700/80 border border-amber-200/70 dark:border-slate-700 shadow-xs transition-all cursor-pointer"
          >
            <span
              className={`p-1 sm:p-1.5 rounded-full transition-all duration-200 ${
                !isDark
                  ? 'bg-white text-amber-500 shadow-xs scale-105'
                  : 'text-slate-400 hover:text-amber-400'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
            </span>
            <span
              className={`p-1 sm:p-1.5 rounded-full transition-all duration-200 ${
                isDark
                  ? 'bg-slate-950 text-purple-300 shadow-xs scale-105'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Mobile Menu"
            className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-white/95 dark:bg-[#091210]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-2xl transition-all animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const linkId = link.name.toLowerCase();
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-200 dark:border-white/10">
              <a
                href="/Himnandini_Sharma_CV.pdf"
                download="Himnandini_Sharma_CV.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-slate-950 text-white font-semibold text-sm shadow-md"
              >
                <span>Download CV</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
