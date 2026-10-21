import React from 'react';
import { X, Calendar, Clock, User, Share2 } from 'lucide-react';

export default function BlogModal({ blog, isOpen, onClose }) {
  if (!isOpen || !blog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 dark:bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0d1715] border border-slate-200 dark:border-emerald-500/30 rounded-3xl p-6 sm:p-8 text-slate-800 dark:text-slate-200 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 dark:bg-[#151226] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-purple-500 transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 mb-6 max-h-72 bg-slate-100 dark:bg-[#09110f]">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>{blog.readTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>{blog.author || 'Himnandini Sharma'}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 dark:text-white tracking-tight mb-4">
          {blog.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {blog.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-500/20 text-purple-800 dark:text-purple-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Article Body */}
        <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-white/10 pt-4">
          {blog.content ? (
            blog.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h4 key={idx} className="text-base font-semibold text-slate-900 dark:text-white pt-2">
                    {paragraph.replace('### ', '')}
                  </h4>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })
          ) : (
            <p>{blog.excerpt}</p>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: blog.title, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Article link copied to clipboard!');
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-[#1f1938] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-purple-500 transition-all cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Share Article</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-slate-950 hover:bg-purple-950 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer shadow-sm hover:shadow-md"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
}
