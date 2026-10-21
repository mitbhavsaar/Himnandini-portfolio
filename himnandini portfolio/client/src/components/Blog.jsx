import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import BlogModal from './BlogModal';

const DEFAULT_BLOGS = [
  {
    _id: '1',
    title: 'Automating Invoices with Azure OCR',
    excerpt: 'How we streamlined invoice processing in Odoo using Microsoft Azure Cognitive Services OCR and asynchronous Python jobs.',
    content: `Processing paper and PDF invoices manually is one of the most time-consuming back-office tasks for growing enterprises. By connecting Azure Document Intelligence with Odoo ERP, we automated the end-to-end ingestion pipeline.\n\n### Architectural Overview\nWhen an invoice email arrives or a user drops a PDF into the Odoo chatter, an asynchronous Python worker triggers an Azure OCR extraction pipeline. Azure identifies structured fields: vendor name, invoice date, due date, line items, quantities, and totals.\n\n### Fuzzy Matching & Tax Reconciliation\nVendor matching uses Levenshtein distance against partner records in Odoo, handling slight variations in vendor naming seamlessly. Line items are automatically mapped to internal product codes, calculating taxes and creating draft accounting moves with 99.8% precision.`,
    date: 'Mar 15, 2026',
    readTime: '5 min read',
    image: '/images/blog_ocr.jpg',
    tags: ['Azure OCR', 'Odoo ERP', 'Python', 'Automation'],
    author: 'Himnandini Sharma',
  },
  {
    _id: '2',
    title: 'Building Offline Odoo Dashboards',
    excerpt: 'A practical guide to leveraging OWL (Odoo Web Library) and browser IndexedDB for progressive offline capabilities.',
    content: `Field sales and warehouse teams frequently face spotty internet connections. Standard ERP web applications freeze or crash when connection is lost, interrupting critical workflows. In this article, we explore building offline-first dashboards in Odoo 17 and 18.\n\n### Leveraging OWL Components\nOWL's reactive state management makes it ideal for handling network status events. By pairing OWL components with the browser's IndexedDB, local mutations can be queued with timestamped action logs.\n\n### Auto-Sync & Conflict Handling\nWhen network connectivity is restored, the sync manager broadcasts delta changes to the Odoo backend controller. If multiple users edit the same entity, last-write-wins or semantic merge rules guarantee clean state reconciliation.`,
    date: 'Feb 28, 2026',
    readTime: '6 min read',
    image: '/images/blog_offline.jpg',
    tags: ['OWL', 'IndexedDB', 'Progressive Web Apps', 'Javascript'],
    author: 'Himnandini Sharma',
  },
  {
    _id: '3',
    title: 'Best Practices for Odoo API Integrations',
    excerpt: 'Essential techniques for high-throughput, secure REST and webhook integrations between Odoo and external cloud systems.',
    content: `Integrating third-party systems with Odoo requires careful planning around authentication, rate limiting, and database concurrency.\n\n### Authentication & Security\nAlways prefer API keys with restricted access rights rather than generic administrator credentials. Implement IP whitelisting in your Nginx reverse proxy configuration for sensitive integration endpoints.\n\n### Batching and Asynchronous Execution\nFor bulk data imports (e-commerce orders, external inventory updates), avoid synchronous transactional commits in the main HTTP thread. Utilize Odoo's queue_job or Celery workers to decouple incoming webhook ingestion from heavy database writes.`,
    date: 'Feb 10, 2026',
    readTime: '4 min read',
    image: '/images/blog_api.jpg',
    tags: ['REST API', 'PostgreSQL', 'Webhooks', 'Odoo 18'],
    author: 'Himnandini Sharma',
  },
];

export default function Blog() {
  const [blogs, setBlogs] = useState(DEFAULT_BLOGS);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs');
        if (res.ok) {
          const data = await res.json();
          if (data?.data && data.data.length > 0) {
            setBlogs(data.data);
          }
        }
      } catch (err) {
        console.warn('Using default blog data:', err.message);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section id="blog" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-purple-700 dark:text-purple-400 block mb-2">
              LATEST BLOG
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 dark:text-white tracking-tight">
              Insights &amp; Learnings
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Sharing knowledge about Odoo development, integrations and modern technologies.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSelectedBlog(blogs[0])}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 dark:bg-[#101e1a] dark:border-white/10 dark:hover:border-purple-500/40 text-slate-700 dark:text-slate-300 dark:hover:text-white text-xs sm:text-sm font-medium transition-all group cursor-pointer shadow-xs"
          >
            <span>View All Posts</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Blog Cards (matches screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id || blog.title}
              onClick={() => setSelectedBlog(blog)}
              className="group rounded-2xl bg-white dark:bg-[#0e1a17]/90 hover:bg-slate-50 dark:hover:bg-[#132420] border border-slate-200/80 dark:border-white/8 hover:border-purple-500/40 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col shadow-xs hover:shadow-md dark:shadow-lg hover:-translate-y-1.5"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-[#070d0c]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-[#0e1a17] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                    {blog.title}
                  </h3>
                </div>

                {/* Footer with Date & Read time */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        <BlogModal
          blog={selectedBlog}
          isOpen={!!selectedBlog}
          onClose={() => setSelectedBlog(null)}
        />

      </div>
    </section>
  );
}
