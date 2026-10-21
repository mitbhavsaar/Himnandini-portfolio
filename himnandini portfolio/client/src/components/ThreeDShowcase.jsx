import React from 'react';
import ThreeDCard from './ThreeDCard';
import ThreeDTechCore from './ThreeDTechCore';
import { Sparkles, Cpu, Bot, Database, ArrowUpRight, Zap, Code2, Globe } from 'lucide-react';
import { OdooIcon, PythonIcon, OwlIcon, PostgresIcon, AzureIcon } from './BrandIcons';

export default function ThreeDShowcase({ isDark = false }) {
  return (
    <section id="innovation-3d" className="relative py-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-400/10 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-widest border border-purple-500/20 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Interactive 3D Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-slate-950 dark:text-white">
            Beyond Standard CSS: <br className="hidden sm:block" />
            <span className="italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-emerald-500 dark:from-purple-400 dark:via-indigo-300 dark:to-emerald-400">
              3D Models &amp; Dynamic Parallax
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Moving past flat Material UI cards. Here are real-time 3D vector projections, mouse-tracked holographic light reflections, and multi-depth parallax layers.
          </p>
        </div>

        {/* 2-Column Grid: 3D Interactive Canvas Model (Left) + 3D Tilt Parallax Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive 3D Model Core */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                Live 3D Geodesic Model
              </span>
              <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold">
                Pure Canvas (60 FPS)
              </span>
            </div>

            <ThreeDTechCore isDark={isDark} />

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 px-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500" /> Odoo &amp; OWL Nodes
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-400" /> Python &amp; Postgres
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> AI OCR &amp; APIs
              </span>
              <span className="flex items-center gap-1.5 font-mono text-purple-600 dark:text-purple-400">
                Euler Angles (rx, ry)
              </span>
            </div>
          </div>

          {/* Right Column: 3D Holographic Parallax Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Card 1: 3D Tilt Card with Odoo & OWL depth */}
            <ThreeDCard
              borderBeam={true}
              glare={true}
              maxTilt={18}
              className="p-6 bg-white/90 dark:bg-[#101c19]/90 border border-slate-200/90 dark:border-white/10 shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-inner translate-z-30 transition-transform">
                  <OdooIcon className="w-7 h-7" />
                </div>
                <div className="px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40 text-[11px] font-bold uppercase tracking-wider translate-z-20">
                  3D Depth: Z+40px
                </div>
              </div>

              <div className="mt-4 translate-z-20">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Holographic Tilt Card</span>
                  <ArrowUpRight className="w-4 h-4 text-purple-600 dark:text-purple-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Hover your cursor across this card! Notice how it physically tilts in 3D perspective while the icons pop forward in physical Z-space.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs translate-z-30">
                <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-purple-600" />
                  Preserve-3D Transform
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                  Active
                </span>
              </div>
            </ThreeDCard>

            {/* Card 2: AI Document Intelligence */}
            <ThreeDCard
              borderBeam={false}
              glare={true}
              maxTilt={16}
              className="p-6 bg-white/90 dark:bg-[#101c19]/90 border border-slate-200/90 dark:border-white/10 shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner translate-z-30">
                  <AzureIcon className="w-7 h-7" />
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-800/40 translate-z-20">
                  <Zap className="w-3 h-3" /> Realtime Glare
                </span>
              </div>

              <div className="mt-4 translate-z-20">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Specular Light Reflection
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Calculates mouse angle in real-time to cast a dynamic radial glass sheen across the frosted surface, mimicking real-world studio lighting.
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2 translate-z-30">
                <div className="h-1.5 flex-1 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[88%]" />
                </div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold">
                  88% Depth
                </span>
              </div>
            </ThreeDCard>

          </div>

        </div>

      </div>
    </section>
  );
}
