import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import ThreeDCard from './ThreeDCard';
import {
  OdooIcon,
  PythonIcon,
  OwlIcon,
  PostgresIcon,
  AzureIcon,
  PowerBiIcon,
  GithubIcon,
} from './BrandIcons';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const technologies = [
    { name: 'Odoo', icon: OdooIcon, color: 'text-[#714B67]' },
    { name: 'Python', icon: PythonIcon, color: 'text-[#387EB8]' },
    { name: 'OWL', icon: OwlIcon, color: 'text-[#9333ea]' },
    { name: 'PostgreSQL', icon: PostgresIcon, color: 'text-[#336791]' },
    { name: 'Azure OCR', icon: AzureIcon, color: 'text-[#0078D4]' },
    { name: 'Power BI', icon: PowerBiIcon, color: 'text-[#F2C811]' },
    { name: 'GitHub', icon: GithubIcon, color: 'text-slate-900 dark:text-white' },
  ];

  const stats = [
    { value: '2+', line1: 'Years', line2: 'Experience', animClass: 'animate-drop-bounce-1' },
    { value: '10+', line1: 'Projects', line2: 'Delivered', animClass: 'animate-drop-bounce-2' },
    { value: '17/18/19', line1: 'Odoo', line2: 'Versions', animClass: 'animate-drop-bounce-3' },
    { value: '100%', line1: 'Client', line2: 'Focused', animClass: 'animate-drop-bounce-4', hasSticky: true },
  ];

  // =========================================================================
  // CONTINUOUS LOOPING TYPEWRITER EFFECT FOR HERO TEXT
  // Target: ODOO DEVELOPER -> Himnandini -> Sharma -> Subtitle Description -> Loop
  // =========================================================================
  const fullKicker = 'ODOO DEVELOPER';
  const fullNameFirst = 'Himnandini';
  const fullNameLast = 'Sharma';
  const fullDescription =
    'Crafting intuitive ERP solutions with Odoo & modern technologies for real business impact.';

  const [typedKicker, setTypedKicker] = useState('');
  const [typedFirst, setTypedFirst] = useState('');
  const [typedLast, setTypedLast] = useState('');
  const [typedDesc, setTypedDesc] = useState('');
  // phase: 'typing-kicker' | 'typing-first' | 'typing-last' | 'typing-desc' | 'pause-full' | 'deleting-desc' | 'deleting-last' | 'deleting-first' | 'deleting-kicker' | 'pause-empty'
  const [typePhase, setTypePhase] = useState('typing-kicker');

  useEffect(() => {
    let timer;

    switch (typePhase) {
      case 'typing-kicker':
        if (typedKicker.length < fullKicker.length) {
          timer = setTimeout(() => {
            setTypedKicker(fullKicker.slice(0, typedKicker.length + 1));
          }, 40);
        } else {
          setTypePhase('typing-first');
        }
        break;

      case 'typing-first':
        if (typedFirst.length < fullNameFirst.length) {
          timer = setTimeout(() => {
            setTypedFirst(fullNameFirst.slice(0, typedFirst.length + 1));
          }, 50);
        } else {
          setTypePhase('typing-last');
        }
        break;

      case 'typing-last':
        if (typedLast.length < fullNameLast.length) {
          timer = setTimeout(() => {
            setTypedLast(fullNameLast.slice(0, typedLast.length + 1));
          }, 55);
        } else {
          setTypePhase('typing-desc');
        }
        break;

      case 'typing-desc':
        if (typedDesc.length < fullDescription.length) {
          timer = setTimeout(() => {
            setTypedDesc(fullDescription.slice(0, typedDesc.length + 1));
          }, 20);
        } else {
          setTypePhase('pause-full');
        }
        break;

      case 'pause-full':
        // Hold full text for 3.5 seconds so user can read comfortably
        timer = setTimeout(() => {
          setTypePhase('deleting-desc');
        }, 3500);
        break;

      case 'deleting-desc':
        if (typedDesc.length > 0) {
          timer = setTimeout(() => {
            setTypedDesc(typedDesc.slice(0, -1));
          }, 12);
        } else {
          setTypePhase('deleting-last');
        }
        break;

      case 'deleting-last':
        if (typedLast.length > 0) {
          timer = setTimeout(() => {
            setTypedLast(typedLast.slice(0, -1));
          }, 25);
        } else {
          setTypePhase('deleting-first');
        }
        break;

      case 'deleting-first':
        if (typedFirst.length > 0) {
          timer = setTimeout(() => {
            setTypedFirst(typedFirst.slice(0, -1));
          }, 25);
        } else {
          setTypePhase('deleting-kicker');
        }
        break;

      case 'deleting-kicker':
        if (typedKicker.length > 0) {
          timer = setTimeout(() => {
            setTypedKicker(typedKicker.slice(0, -1));
          }, 20);
        } else {
          setTypePhase('pause-empty');
        }
        break;

      case 'pause-empty':
        // Brief pause before restarting loop
        timer = setTimeout(() => {
          setTypePhase('typing-kicker');
        }, 500);
        break;

      default:
        break;
    }

    return () => clearTimeout(timer);
  }, [typePhase, typedKicker, typedFirst, typedLast, typedDesc]);

  // Active cursor placement helper
  const isKickerActive = typePhase === 'typing-kicker' || typePhase === 'deleting-kicker';
  const isFirstActive = typePhase === 'typing-first' || typePhase === 'deleting-first';
  const isLastActive = typePhase === 'typing-last' || typePhase === 'deleting-last';
  const isDescActive = typePhase === 'typing-desc' || typePhase === 'pause-full' || typePhase === 'deleting-desc';

  // =========================================================================
  // ONE BY ONE SIDE-BY-SIDE REVEAL FOR "TECHNOLOGIES I WORK WITH"
  // =========================================================================
  const [revealedTechCount, setRevealedTechCount] = useState(0);

  useEffect(() => {
    if (revealedTechCount < technologies.length) {
      const timer = setTimeout(() => {
        setRevealedTechCount((prev) => prev + 1);
      }, 160);
      return () => clearTimeout(timer);
    }
  }, [revealedTechCount, technologies.length]);

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-12 overflow-hidden min-h-[720px] lg:min-h-[800px] flex flex-col justify-between"
    >
      {/* 1. Full Unified Desktop & Tablet Hero Background Scene */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/images/hero_landscape_clean.jpg"
          alt="Himnandini Sharma Workspace"
          className="w-full h-full object-cover object-right-top transition-all duration-500 dark:brightness-[0.62] dark:contrast-[1.12]"
        />
        {/* Light Mode Left Gradient Wash - Keeps text 100% crisp and readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbfafd] via-[#fbfafd]/85 to-transparent w-full md:w-[65%] lg:w-[58%] dark:hidden" />

        {/* Dark Mode Left Gradient Wash - Smoothly merges image into dark background with NO white border */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-[#070d0c] via-[#070d0c]/90 to-transparent w-full md:w-[65%] lg:w-[58%]" />

        {/* Bottom subtle blend into the page */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#fbfafd] via-[#fbfafd]/60 to-transparent dark:from-[#070d0c] dark:via-[#070d0c]/60" />

        {/* Top subtle blend under navbar */}
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#fbfafd]/80 to-transparent dark:from-[#070d0c]/80" />
      </div>

      {/* 2. Soft Ambient Lighting Glows */}
      <div className="absolute top-10 -left-20 w-[500px] h-[500px] rounded-full bg-purple-200/30 dark:bg-purple-900/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[450px] h-[450px] rounded-full bg-amber-100/30 dark:bg-amber-900/15 blur-[130px] pointer-events-none" />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex-1 flex flex-col justify-between">
        {/* Main Hero Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center pt-2 sm:pt-4">
          {/* Left Column: Heading, Subtitle, CTA buttons, Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pr-4 z-10">
            {/* Odoo Developer Kicker with Continuous Typewriter */}
            <div className="tracking-[0.25em] text-xs sm:text-sm font-bold text-purple-700 dark:text-purple-400 uppercase min-h-[22px] flex items-center">
              <span>{typedKicker}</span>
              {isKickerActive && (
                <span className="inline-block w-1.5 h-4 ml-1 bg-purple-600 dark:bg-purple-400 animate-cursor-blink" />
              )}
            </div>

            {/* Himnandini Sharma Heading with Continuous Typewriter */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-[5.4rem] tracking-tight leading-[1.03] min-h-[140px] sm:min-h-[180px]">
              <span className="font-serif font-black text-slate-950 dark:text-white block min-h-[48px] sm:min-h-[64px]">
                {typedFirst}
                {isFirstActive && (
                  <span className="inline-block w-2 sm:w-3 h-9 sm:h-14 ml-1 bg-purple-600 dark:bg-purple-400 animate-cursor-blink align-middle" />
                )}
              </span>
              <span className="font-serif italic font-extrabold text-purple-600 dark:text-purple-400 block mt-1 min-h-[48px] sm:min-h-[64px]">
                {typedLast}
                {isLastActive && (
                  <span className="inline-block w-2 sm:w-3 h-9 sm:h-14 ml-1 bg-purple-600 dark:bg-purple-400 animate-cursor-blink align-middle" />
                )}
              </span>
            </h1>

            {/* Description Subtitle with Continuous Typewriter */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl min-h-[68px]">
              {typedDesc}
              {isDescActive && (
                <span className="inline-block w-1.5 h-5 ml-1 bg-purple-600 dark:bg-purple-400 animate-cursor-blink align-middle" />
              )}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-slate-950 hover:bg-purple-950 text-white font-medium text-sm sm:text-base shadow-lg shadow-purple-950/15 hover:shadow-purple-900/25 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/95 hover:bg-white text-slate-800 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white font-medium text-sm sm:text-base border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer backdrop-blur-md"
              >
                <Play className="w-3.5 h-3.5 fill-slate-800 dark:fill-white text-slate-800 dark:text-white" />
                <span>View My Work</span>
              </button>
            </div>

            {/* Dedicated Mobile Artwork Scene (Visible only on mobile devices < md) */}
            <div className="md:hidden pt-4 pb-2">
              <div className="relative w-full max-w-[420px] mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-black/40">
                <img
                  src="/images/hero_portrait_clean.jpg"
                  alt="Himnandini Sharma - Odoo Developer"
                  className="w-full h-[320px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="font-serif font-bold text-base leading-tight">Himnandini Sharma</p>
                    <p className="text-xs text-purple-300 font-medium mt-0.5">Odoo &amp; Enterprise Solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* 4 Metric Stats Cards - Drop-Down Fall from Top with Bounce + 3D Tilt      */}
            {/* ========================================================================= */}
            <div className="pt-6 sm:pt-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 relative">
                {stats.map((stat, idx) => (
                  <div key={idx} className={`relative ${stat.animClass} ${stat.hasSticky ? 'z-30' : 'z-10'}`}>
                    
                    {/* Available for Opportunities Sticky Note perched CLEANLY above Card 4 */}
                    {stat.hasSticky && (
                      <div className="absolute -top-7 sm:-top-8.5 -right-1 sm:-right-2 transform -rotate-3 hover:rotate-0 transition-transform duration-200 z-40 cursor-pointer select-none">
                        <div
                          onClick={() => scrollTo('contact')}
                          className="relative bg-[#fff9c4] text-slate-900 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md shadow-md border border-amber-300/80 flex items-center gap-1.5 text-xs font-handwriting hover:shadow-lg transition-all"
                        >
                          {/* Translucent tape effect */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-amber-200/60 backdrop-blur-xs rounded-xs" />
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          <span className="font-bold text-slate-900 whitespace-nowrap text-[11px] sm:text-[12px] tracking-tight">
                            Available for Opportunities
                          </span>
                          <span className="text-rose-500 text-xs sm:text-sm leading-none">♡</span>
                        </div>
                      </div>
                    )}

                    <ThreeDCard
                      glare={true}
                      maxTilt={12}
                      className="p-3.5 sm:p-5 bg-white/95 dark:bg-[#121c19]/90 backdrop-blur-md border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-md flex flex-col justify-center h-full"
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight font-sans translate-z-20">
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 leading-snug translate-z-10">
                        <div>{stat.line1}</div>
                        <div>{stat.line2}</div>
                      </div>
                    </ThreeDCard>
                  </div>
                ))}
              </div>
            </div>


            {/* ========================================================================= */}
            {/* "Technologies I Work With" - Sequential One-by-One Side-by-Side Reveal     */}
            {/* ========================================================================= */}
            <ThreeDCard
              glare={true}
              maxTilt={8}
              className="rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#101b17]/95 backdrop-blur-md p-4 sm:p-5 border border-slate-200/90 dark:border-white/10 shadow-lg shadow-slate-200/40 dark:shadow-black/40"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                  Technologies I Work With
                </span>
                <span className="text-[11px] text-purple-600 dark:text-purple-400 font-semibold">
                  Side-by-Side &bull; Sequential
                </span>
              </div>

              {/* Side-by-Side Row where items reveal one by one */}
              <div className="flex items-center gap-5 overflow-x-auto pb-1 scrollbar-none sm:grid sm:grid-cols-7 sm:gap-2">
                {technologies.map((tech, idx) => {
                  const Icon = tech.icon;
                  const isRevealed = idx < revealedTechCount;

                  return (
                    <div
                      key={tech.name}
                      onClick={() => scrollTo('tech-stack')}
                      style={{
                        transitionDelay: `${idx * 120}ms`,
                      }}
                      className={`flex flex-col items-center justify-center gap-1.5 group cursor-pointer flex-shrink-0 transition-all duration-500 transform ${
                        isRevealed
                          ? 'opacity-100 translate-y-0 scale-100'
                          : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
                      }`}
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xs">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </ThreeDCard>
          </div>

          {/* Right Spacer for Desktop (Background scene shines through naturally without boxed frames) */}
          <div className="hidden lg:flex lg:col-span-5 min-h-[480px] pointer-events-none" />
        </div>

        {/* Bottom Transition Section */}
        <div className="mt-12 pt-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left: Curved arrow with cursive text */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img
              src="/images/hero_bottom_arrow_clean.png"
              alt="Turning Business Needs into Smarter Odoo Solutions"
              className="w-36 sm:w-44 h-auto object-contain select-none"
            />
          </div>

          {/* Center: Mouse Scroll Indicator */}
          <div className="flex flex-col items-center justify-center text-center">
            <button
              type="button"
              onClick={() => scrollTo('about')}
              aria-label="Scroll to About section"
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className="w-6 h-10 rounded-full border-2 border-slate-700 dark:border-slate-300 flex justify-center pt-2 group-hover:border-purple-600 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 animate-bounce" />
              </div>
              <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 mt-2 tracking-wider uppercase group-hover:text-purple-600 transition-colors">
                Scroll Down
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-1" />
            </button>
          </div>

          {/* Right: Desk with notebook and plant */}
          <div className="hidden md:flex justify-end">
            <div className="w-44 lg:w-52 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-white/10">
              <img
                src="/images/hero_bottom_notebook.png"
                alt="Workspace desk setup"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
