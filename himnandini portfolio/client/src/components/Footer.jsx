import React from 'react';
import { Globe, ArrowUp } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './BrandIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-slate-200/80 dark:border-white/8 bg-slate-100 dark:bg-[#060b09] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row (matches screenshot) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200 dark:border-white/5">
          
          {/* Left: HS Monogram & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 dark:bg-purple-950/40 border border-purple-500/30 flex items-center justify-center font-sans font-bold text-purple-700 dark:text-purple-300">
              HS
            </div>
            <div>
              <span className="font-serif font-bold text-slate-900 dark:text-white tracking-wide block leading-none text-base">
                Himnandini Sharma
              </span>
              <span className="text-[11px] text-purple-700 dark:text-purple-400 font-semibold tracking-wider uppercase mt-1 block">
                Odoo Developer
              </span>
            </div>
          </div>

          {/* Center: Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white dark:bg-[#101c19] border border-slate-300 dark:border-white/10 hover:border-purple-500 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 hover:scale-105 transition-all shadow-xs"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/sharmahimnandini"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-white dark:bg-[#101c19] border border-slate-300 dark:border-white/10 hover:border-purple-500 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 hover:scale-105 transition-all shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Website"
              className="w-9 h-9 rounded-full bg-white dark:bg-[#101c19] border border-slate-300 dark:border-white/10 hover:border-purple-500 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 hover:scale-105 transition-all shadow-xs"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white dark:bg-[#101c19] border border-slate-300 dark:border-white/10 hover:border-purple-500 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 hover:scale-105 transition-all shadow-xs"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Himnandini Sharma. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
