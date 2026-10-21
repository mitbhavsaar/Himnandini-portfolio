import React, { useState } from 'react';
import {
  Briefcase,
  Layers,
  Users,
  Star,
  ChevronRight,
  ArrowRight,
  Code2,
  GraduationCap,
} from 'lucide-react';
import {
  OdooIcon,
  PythonIcon,
  OwlIcon,
  PostgresIcon,
  JavascriptIcon,
  Html5Icon,
  Css3Icon,
  GitIcon,
  DockerIcon,
  LinuxIcon,
  VsCodeIcon,
  PostmanIcon,
  FigmaIcon,
} from './BrandIcons';
import ThreeDCard from './ThreeDCard';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const timelineExperiences = [
    {
      period: 'AUG 2025',
      periodSub: '- Present',
      role: 'Odoo Developer',
      company: 'Entrivis Tech Pvt. Ltd. | Gandhinagar',
      isCurrent: true,
      desc: 'Developing custom Odoo modules, integration and business solutions for clients. Working on ERP customizations, API integrations and advanced Odoo features.',
      tags: ['Odoo', 'Python', 'OWL', 'API Integration', 'Business Automation'],
      icon: Briefcase,
    },
    {
      period: 'FEB 2025',
      periodSub: '- JUL 2025',
      role: 'Odoo Trainee',
      company: 'Acespritech Solutions Pvt. Ltd. | Gandhinagar',
      isCurrent: false,
      desc: 'Learned Odoo ORM, QWeb, reporting and security rules. Worked on real client projects, customizations and module development.',
      tags: ['Odoo', 'Python', 'QWeb', 'Reports', 'Security Rules'],
      icon: Briefcase,
    },
    {
      period: 'JUN 2024',
      periodSub: '- JAN 2025',
      role: 'Intern - Python Developer',
      company: 'Tech Solutions | Remote',
      isCurrent: false,
      desc: 'Worked on automation scripts, data processing and web development tools. Gained hands-on experience with Python and APIs.',
      tags: ['Python', 'Automation', 'API', 'Scripting', 'Data Processing'],
      icon: Code2,
    },
    {
      period: '2020',
      periodSub: '- 2024',
      role: 'B.Tech in Information Technology',
      company: 'Gujarat Technological University',
      isCurrent: false,
      desc: 'Built a strong foundation in programming, databases and web technologies. Explored development, problem solving and real-world applications.',
      tags: ['C', 'Python', 'Web Development', 'Database', 'Problem Solving'],
      icon: GraduationCap,
    },
  ];

  const statCards = [
    {
      value: '2+',
      label1: 'Years',
      label2: 'Experience',
      icon: Briefcase,
      color: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400',
    },
    {
      value: '10+',
      label1: 'Projects',
      label2: 'Delivered',
      icon: Layers,
      color: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400',
    },
    {
      value: '8+',
      label1: 'Happy',
      label2: 'Clients',
      icon: Users,
      color: 'bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400',
    },
    {
      value: '100%',
      label1: 'Learning',
      label2: 'Focused',
      icon: Star,
      color: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400',
    },
  ];

  const workCards = [
    {
      title: 'ERP Customization',
      subtitle: 'Custom modules, workflows and reports.',
      tag: 'Odoo',
      image: '/images/exp_work_erp.jpg',
    },
    {
      title: 'Third Party Integrations',
      subtitle: 'REST APIs, webhook and service integrations.',
      tag: 'API',
      image: '/images/exp_work_api.jpg',
    },
    {
      title: 'Process Automation',
      subtitle: 'Automation to streamline business operations.',
      tag: 'Business',
      image: '/images/exp_work_auto.jpg',
    },
  ];

  const techTools = [
    { name: 'Odoo', icon: OdooIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'OWL', icon: OwlIcon },
    { name: 'PostgreSQL', icon: PostgresIcon },
    { name: 'JavaScript', icon: JavascriptIcon },
    { name: 'HTML5', icon: Html5Icon },
    { name: 'CSS3', icon: Css3Icon },
    { name: 'Git', icon: GitIcon },
    { name: 'Docker', icon: DockerIcon },
    { name: 'Linux', icon: LinuxIcon },
    { name: 'VS Code', icon: VsCodeIcon },
    { name: 'Postman', icon: PostmanIcon },
    { name: 'Figma', icon: FigmaIcon },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-200/30 dark:bg-purple-900/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-amber-100/30 dark:bg-amber-900/15 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-700 dark:text-purple-400 block mb-2">
            PROFESSIONAL EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight leading-[1.08]">
            <span className="font-serif font-black text-slate-950 dark:text-white">
              My{' '}
            </span>
            <span className="font-serif italic font-extrabold text-purple-600 dark:text-purple-400">
              Journey
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mt-3">
            A journey of continuous learning, real-world problem solving and building impactful Odoo solutions.
            Here's a glimpse of my professional growth and the experiences that shaped me.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MAIN SPLIT GRID: Left Timeline + Right Showcase & Work Cards              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT COLUMN: Timeline Experience Cards (col-span-6) */}
          <div className="lg:col-span-6 relative pl-3 sm:pl-4 space-y-6 sm:space-y-7 before:absolute before:left-[68px] sm:before:left-[82px] before:top-4 before:bottom-4 before:w-[2px] before:bg-purple-200 dark:before:bg-purple-900/40">
            {timelineExperiences.map((exp, idx) => {
              const Icon = exp.icon;
              const isExpanded = expandedIndex === idx;

              // User Requirement:
              // Pahele niche wala card LEFT se swap hokar aayega (bottomUpIndex 0: left),
              // Fir iske upar wala RIGHT side se (bottomUpIndex 1: right),
              // Fir uske upar wala LEFT se (bottomUpIndex 2: left),
              // Phir uske upar wala RIGHT se (bottomUpIndex 3: right)!
              const bottomUpIndex = timelineExperiences.length - 1 - idx;
              const isFromLeft = bottomUpIndex % 2 === 0;
              const slideAnimClass = isFromLeft ? 'animate-slide-left' : 'animate-slide-right';
              const animDelay = `${0.18 + bottomUpIndex * 0.28}s`;

              return (
                <div
                  key={idx}
                  style={{ animationDelay: animDelay }}
                  className={`relative flex items-start gap-4 sm:gap-6 group ${slideAnimClass}`}
                >
                  
                  {/* Timeline Date & Marker */}
                  <div className="w-16 sm:w-20 flex-shrink-0 text-left pt-1">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block leading-tight mt-0.5">
                      {exp.periodSub}
                    </span>
                    {/* Purple bullet node */}
                    <span className="absolute left-[62px] sm:left-[76px] top-2.5 w-3.5 h-3.5 rounded-full bg-purple-600 dark:bg-purple-400 ring-4 ring-white dark:ring-[#070d0c] z-10" />
                  </div>


                  {/* 3D Tilt Card Container */}
                  <ThreeDCard
                    glare={true}
                    maxTilt={10}
                    onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                    className={`flex-1 p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#111d1a] border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${
                      isExpanded
                        ? 'border-purple-400/80 dark:border-purple-500/50 ring-2 ring-purple-500/10 dark:ring-purple-400/10'
                        : 'border-slate-200/90 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    {/* Role Header */}
                    <div className="flex items-start justify-between gap-3 mb-2.5 translate-z-20">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-sm sm:text-base text-slate-950 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {exp.role}
                            </h3>
                            {exp.isCurrent && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold border border-emerald-200/80 dark:border-emerald-800/40">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                            {exp.company}
                          </div>
                        </div>
                      </div>

                      <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-shrink-0">
                        <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3.5 translate-z-10">
                      {exp.desc}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-white/5 translate-z-10">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-[#0c1613] text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </ThreeDCard>

                </div>
              );
            })}

          </div>

          {/* RIGHT COLUMN: Photo + Stats + "What I've Worked On" (col-span-6) */}
          <div className="lg:col-span-6 space-y-6">

            {/* Top Workspace Image with Cursive Doodle */}
            <div className="relative">
              {/* Handwritten cursive doodle pointing to Himnandini */}
              <div className="hidden xl:block absolute -top-8 -left-12 z-20 pointer-events-none select-none">
                <img
                  src="/images/experience_doodle.png"
                  alt="Continuous Learning Better Solutions ♡"
                  className="w-28 h-auto object-contain"
                />
              </div>

              {/* Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-[#0c1613] group">
                <img
                  src="/images/experience_workspace_clean.jpg"
                  alt="Himnandini Sharma Odoo Development Setup"
                  className="w-full h-[320px] sm:h-[360px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* 4 Stat Cards Row with 3D Movement */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {statCards.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <ThreeDCard
                    key={idx}
                    glare={true}
                    maxTilt={12}
                    className="p-3.5 sm:p-4 bg-white dark:bg-[#111d1a] border border-slate-200/90 dark:border-white/10 shadow-sm flex items-center gap-3 h-full"
                  >
                    <div className={`w-9 h-9 rounded-xl ${stat.color} flex items-center justify-center flex-shrink-0 translate-z-20`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="translate-z-10">
                      <div className="text-lg sm:text-xl font-black text-slate-950 dark:text-white leading-tight font-sans">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 leading-tight">
                        <div>{stat.label1}</div>
                        <div>{stat.label2}</div>
                      </div>
                    </div>
                  </ThreeDCard>
                );
              })}
            </div>

            {/* "What I've Worked On" Section with 3D Movement */}
            <div className="pt-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-5 bg-purple-600 dark:bg-purple-400 rounded-full" />
                  <h3 className="font-serif font-bold text-xl text-slate-950 dark:text-white">
                    What I've Worked On
                  </h3>
                </div>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                From custom module development to complex integrations, I've worked on diverse Odoo projects across different industries.
              </p>

              {/* 3 Project Preview Cards with 3D Tilt */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {workCards.map((work, idx) => (
                  <ThreeDCard
                    key={idx}
                    glare={true}
                    maxTilt={14}
                    className="p-3 bg-white dark:bg-[#111d1a] border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Image with Tag badge */}
                      <div className="relative h-24 sm:h-26 rounded-xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-xs mb-2.5 translate-z-20">
                        <img
                          src={work.image}
                          alt={work.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-white/95 dark:bg-[#070d0c]/90 text-[10px] font-bold text-purple-700 dark:text-purple-400 border border-slate-200/80 dark:border-white/10 shadow-xs">
                          {work.tag}
                        </span>
                      </div>

                      <h4 className="font-bold text-xs sm:text-[13px] text-slate-900 dark:text-white leading-snug translate-z-10">
                        {work.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug translate-z-10">
                        {work.subtitle}
                      </p>
                    </div>
                  </ThreeDCard>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM FULL-WIDTH: Tools & Technologies Container                         */}
        {/* ========================================================================= */}
        <div className="mt-14 sm:mt-18">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-5 bg-purple-600 dark:bg-purple-400 rounded-full" />
            <h3 className="font-serif font-bold text-xl text-slate-950 dark:text-white">
              Tools &amp; Technologies
            </h3>
          </div>

          <div className="rounded-3xl bg-white dark:bg-[#111d1a] p-4 sm:p-6 border border-slate-200/90 dark:border-white/10 shadow-lg shadow-slate-200/30 dark:shadow-black/40">
            <div className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-13 gap-3 items-center justify-items-center">
              {techTools.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center gap-1.5 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all group cursor-pointer w-full"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors whitespace-nowrap text-center">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
