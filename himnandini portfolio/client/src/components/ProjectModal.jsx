import React from 'react';
import { X, Layers } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 dark:bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0d1715] border border-slate-200 dark:border-emerald-500/30 rounded-3xl p-6 sm:p-8 text-slate-800 dark:text-slate-200 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 dark:bg-[#151226] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-purple-500 transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 mb-6 max-h-72 bg-slate-100 dark:bg-[#09110f]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-[#09110f]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 text-xs font-semibold text-purple-700 dark:text-purple-300 shadow-xs">
            {project.category || 'Odoo Enterprise'}
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-4">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 dark:text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-purple-700 dark:text-purple-400 font-medium mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-500/20 text-purple-800 dark:text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Detailed description */}
        <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-white/10 pt-4">
          <p>{project.description}</p>
          {project.detailedOverview && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#151226] border border-slate-200 dark:border-white/5 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                Technical Architecture &amp; Implementation
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {project.detailedOverview}
              </p>
            </div>
          )}
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#151226] border border-slate-200 dark:border-white/5 text-center">
                <span className="text-xs text-slate-500 dark:text-slate-400 block">{m.label}</span>
                <span className="text-lg font-bold text-purple-700 dark:text-purple-400 font-mono mt-0.5 block">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Actions Footer */}
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl || 'https://github.com/sharmahimnandini'}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 dark:bg-[#1f1938] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white hover:border-purple-500 text-xs sm:text-sm font-medium transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Repository</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-slate-950 hover:bg-purple-950 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer shadow-sm hover:shadow-md"
          >
            Close Project
          </button>
        </div>
      </div>
    </div>
  );
}
