import React from 'react';
import { X, CheckCircle, GraduationCap, Award, Briefcase, Download, Mail } from 'lucide-react';

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 dark:bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0d1715] border border-slate-200 dark:border-emerald-500/30 rounded-3xl p-6 sm:p-8 text-slate-800 dark:text-slate-200 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 dark:bg-[#151226] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-purple-500 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-200 dark:border-white/10">
          <img
            src="/images/about_portrait.jpg"
            alt="Himnandini Sharma"
            className="w-24 h-24 rounded-2xl object-cover border-2 border-purple-500/40 shadow-md"
          />
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              Odoo Developer &amp; Consultant
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 dark:text-white mt-1">
              Himnandini Sharma
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Gandhinagar, Gujarat, India • Open to Enterprise Opportunities
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 pt-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <div>
            <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Professional Summary
            </h4>
            <p>
              I am an energetic and results-driven Odoo Developer specializing in Python, OWL (Odoo Web Library), PostgreSQL, and enterprise API integrations. Having completed rigorous training at Acespritech Solutions and currently spearheading enterprise modules at Entrivis Tech Pvt. Ltd., I focus on high-impact business applications that transform organizational productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#151226] border border-slate-200 dark:border-white/5 space-y-2">
              <h5 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                Key Competencies
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  Custom Odoo 17, 18 &amp; 19 Module Engineering
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  OWL Component Architecture &amp; Reactive Widgets
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  REST API &amp; Azure Cognitive Services OCR Integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  High-Performance PostgreSQL Queries &amp; Power BI ETL
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#151226] border border-slate-200 dark:border-white/5 space-y-2">
              <h5 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                Education &amp; Foundation
              </h5>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white block">Bachelor of Engineering in Computer Science / IT</strong>
                Gandhinagar University, Gujarat
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Rigorous grounding in data structures, algorithms, relational database theory, and software development lifecycles.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">My Engineering Philosophy</h4>
            <p className="text-slate-600 dark:text-slate-300 italic">
              "Every ERP customization must enhance clarity rather than add complexity. Clean code, defensive error handling, intuitive user interfaces, and thorough security rules are non-negotiable."
            </p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
          <a
            href="mailto:sharmahimnandini@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-50 dark:bg-[#1f1938] border border-purple-200 dark:border-purple-500/40 text-purple-800 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-[#28214a] text-sm font-medium transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>sharmahimnandini@gmail.com</span>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="/Himnandini_Sharma_CV.pdf"
              download="Himnandini_Sharma_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-purple-950 text-white font-semibold text-sm transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-full text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
