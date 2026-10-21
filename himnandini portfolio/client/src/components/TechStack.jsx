import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ThreeDCard from './ThreeDCard';
import RotatingTechEarth from './RotatingTechEarth';
import {
  OdooIcon,
  PythonIcon,
  OwlIcon,
  PostgresIcon,
  AzureIcon,
  AwsIcon,
  NginxIcon,
  PowerBiIcon,
  JavascriptIcon,
  Html5Icon,
  Css3Icon,
  TailwindIcon,
  GitIcon,
  DockerIcon,
  LinuxIcon,
  VsCodeIcon,
  PostmanIcon,
  FigmaIcon,
} from './BrandIcons';

export default function TechStack({ isDark = false }) {
  const [selectedTech, setSelectedTech] = useState(null);
  const [filter, setFilter] = useState('all');

  const technologies = [
    {
      name: 'Odoo',
      category: 'erp',
      icon: OdooIcon,
      accent: 'border-purple-500/30 hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(113,75,103,0.3)]',
      proficiency: 'Expert (Odoo 17, 18, 19)',
      description: 'Core ERP architecture, custom models, ORM operations, QWeb PDF reports, security record rules, automated actions and workflows.',
    },
    {
      name: 'Azure OCR',
      category: 'erp',
      icon: AzureIcon,
      accent: 'border-blue-500/30 hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(0,120,212,0.3)]',
      proficiency: 'Advanced',
      description: 'Azure AI Document Intelligence integration for automated vendor bill digitization, line-item extraction, and invoice processing in Odoo.',
    },
    {
      name: 'Python',
      category: 'backend',
      icon: PythonIcon,
      accent: 'border-blue-500/30 hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(56,126,184,0.3)]',
      proficiency: 'Advanced',
      description: 'Object-Oriented backend business logic, asynchronous task execution, automated scripts, API integrations, and data processing.',
    },
    {
      name: 'OWL',
      category: 'frontend',
      icon: OwlIcon,
      accent: 'border-purple-500/30 hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]',
      proficiency: 'Advanced',
      description: 'Odoo Web Library component development, reactive hooks, custom field widgets, action buttons, and progressive offline dashboards.',
    },
    {
      name: 'PostgreSQL',
      category: 'database',
      icon: PostgresIcon,
      accent: 'border-sky-500/30 hover:border-sky-400 group-hover:shadow-[0_0_20px_rgba(51,103,145,0.3)]',
      proficiency: 'Advanced',
      description: 'Relational database schema optimization, indexing strategies, complex analytical queries, stored procedures, and Power BI connectors.',
    },
    {
      name: 'AWS',
      category: 'devops',
      icon: AwsIcon,
      accent: 'border-amber-500/30 hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(255,153,0,0.3)]',
      proficiency: 'Intermediate',
      description: 'EC2 instance deployment, S3 object storage for document attachments, automated backup snapshots, and security group rules.',
    },
    {
      name: 'Nginx',
      category: 'devops',
      icon: NginxIcon,
      accent: 'border-emerald-500/30 hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(0,150,57,0.3)]',
      proficiency: 'Advanced',
      description: 'Reverse proxy setup for multi-tenant Odoo instances, SSL/TLS certificates (Let\'s Encrypt), rate limiting, and longpolling websocket routing.',
    },
    {
      name: 'Power BI',
      category: 'analytics',
      icon: PowerBiIcon,
      accent: 'border-yellow-500/30 hover:border-yellow-400 group-hover:shadow-[0_0_20px_rgba(242,200,17,0.3)]',
      proficiency: 'Advanced',
      description: 'Direct SQL connection to Odoo PostgreSQL, data modeling, automated ETL transformations, and interactive executive reporting dashboards.',
    },
    {
      name: 'Javascript',
      category: 'frontend',
      icon: JavascriptIcon,
      accent: 'border-yellow-400/30 hover:border-yellow-300 group-hover:shadow-[0_0_20px_rgba(247,223,30,0.3)]',
      proficiency: 'Advanced',
      description: 'Modern ES6+ frontend scripting, asynchronous fetch, browser IndexedDB caching, DOM manipulation, and interactive web tools.',
    },
    {
      name: 'HTML5',
      category: 'frontend',
      icon: Html5Icon,
      accent: 'border-orange-500/30 hover:border-orange-400 group-hover:shadow-[0_0_20px_rgba(228,77,38,0.3)]',
      proficiency: 'Expert',
      description: 'Semantic markup for custom web views, Odoo website building blocks, and clean structured templates.',
    },
    {
      name: 'CSS3',
      category: 'frontend',
      icon: Css3Icon,
      accent: 'border-blue-500/30 hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(21,114,182,0.3)]',
      proficiency: 'Expert',
      description: 'Modern responsive styling, CSS Grid, Flexbox, custom animations, and responsive media queries.',
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      icon: TailwindIcon,
      accent: 'border-sky-400/30 hover:border-sky-300 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]',
      proficiency: 'Advanced',
      description: 'Utility-first rapid prototyping, theme extension, responsive enterprise dashboard interfaces, and dark mode tokens.',
    },
    {
      name: 'Git',
      category: 'devops',
      icon: GitIcon,
      accent: 'border-orange-500/30 hover:border-orange-400 group-hover:shadow-[0_0_20px_rgba(240,80,50,0.3)]',
      proficiency: 'Expert',
      description: 'Version control branching strategies, git rebase, merge conflict resolution, and collaborative open-source workflows.',
    },
    {
      name: 'Docker',
      category: 'devops',
      icon: DockerIcon,
      accent: 'border-blue-500/30 hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(36,150,237,0.3)]',
      proficiency: 'Advanced',
      description: 'Containerizing multi-service Odoo instances, docker-compose orchestration, persistent database volumes, and isolated environments.',
    },
    {
      name: 'Linux',
      category: 'devops',
      icon: LinuxIcon,
      accent: 'border-yellow-500/30 hover:border-yellow-400 group-hover:shadow-[0_0_20px_rgba(252,198,36,0.3)]',
      proficiency: 'Expert',
      description: 'Ubuntu / Debian server administration, systemd service management, bash shell automation, and production server optimization.',
    },
    {
      name: 'VS Code',
      category: 'tools',
      icon: VsCodeIcon,
      accent: 'border-blue-500/30 hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(0,122,204,0.3)]',
      proficiency: 'Expert',
      description: 'Primary IDE for Python, Odoo development, OWL components, interactive debugging, linting, and GitLens integrations.',
    },
    {
      name: 'Postman',
      category: 'tools',
      icon: PostmanIcon,
      accent: 'border-orange-500/30 hover:border-orange-400 group-hover:shadow-[0_0_20px_rgba(255,108,55,0.3)]',
      proficiency: 'Expert',
      description: 'API endpoint testing, JSON-RPC payload validation, webhook simulation, automated test suites, and documentation.',
    },
    {
      name: 'Figma',
      category: 'tools',
      icon: FigmaIcon,
      accent: 'border-purple-500/30 hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(162,89,255,0.3)]',
      proficiency: 'Advanced',
      description: 'UI/UX wireframing, high-fidelity prototypes, design system handoff, and translating designs into responsive OWL components.',
    },
  ];


  const filteredTechs = filter === 'all' ? technologies : technologies.filter((t) => t.category === filter);

  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 border border-purple-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Languages &amp; Technologies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 dark:text-white tracking-tight">
              Technologies &amp; Languages I Work With
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFilter(filter === 'all' ? 'erp' : 'all')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 dark:bg-[#101e1a] dark:border-white/10 dark:hover:border-purple-500/40 text-slate-700 dark:text-slate-300 dark:hover:text-white text-xs sm:text-sm font-medium transition-all group cursor-pointer shadow-xs"
            >
              <span>{filter === 'all' ? 'Filter ERP Only' : 'Show All Tech'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3D MOVING EARTH WITH TECHNOLOGIES REVEALING ONE-BY-ONE                    */}
        {/* ========================================================================= */}
        <div className="mb-12">
          <RotatingTechEarth isDark={isDark} />
        </div>

        {/* ========================================================================= */}
        {/* 3D MOVEMENT ON EVERY SINGLE TECH CARD                                     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4">
          {filteredTechs.map((tech) => {
            const Icon = tech.icon;
            const isSelected = selectedTech?.name === tech.name;
            return (
              <ThreeDCard
                key={tech.name}
                glare={true}
                maxTilt={18}
                scale={1.05}
                onClick={() => setSelectedTech(isSelected ? null : tech)}
                className={`p-4 bg-white dark:bg-[#0d1815]/90 hover:bg-slate-50 dark:hover:bg-[#132420] border transition-all duration-200 cursor-pointer flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md ${tech.accent} ${
                  isSelected
                    ? 'border-purple-500 dark:border-purple-400 bg-purple-50/50 dark:bg-purple-950/20 shadow-[0_0_20px_rgba(124,58,237,0.25)] -translate-y-1'
                    : 'border-slate-200/80 dark:border-white/5'
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-[#09110f] border border-slate-200/80 dark:border-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform translate-z-20">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors translate-z-10">
                  {tech.name}
                </span>
              </ThreeDCard>
            );
          })}
        </div>

        {/* Selected Tech Detail Drawer */}
        {selectedTech && (
          <ThreeDCard
            glare={false}
            maxTilt={6}
            className="mt-8 p-6 bg-white dark:bg-[#0f1d19] border border-purple-500/30 animate-fadeIn relative shadow-lg"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-[#09110f] border border-purple-500/30 flex items-center justify-center translate-z-20">
                  <selectedTech.icon className="w-7 h-7" />
                </div>
                <div className="translate-z-10">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    {selectedTech.name}
                    <span className="text-xs font-normal px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">
                      {selectedTech.proficiency}
                    </span>
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
                    {selectedTech.description}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedTech(null)}
                className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 cursor-pointer"
              >
                Close
              </button>
            </div>
          </ThreeDCard>
        )}
      </div>
    </section>
  );
}
