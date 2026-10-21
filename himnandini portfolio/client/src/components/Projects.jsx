import React, { useState } from 'react';
import {
  Briefcase,
  Users,
  Star,
  BarChart3,
  Search,
  ArrowRight,
  Layers,
} from 'lucide-react';
import ProjectModal from './ProjectModal';
import ThreeDCard from './ThreeDCard';

export const ALL_PROJECTS = [
  {
    _id: 'heritage-leaf',
    title: 'Heritage Leaf – Odoo Customization',
    subtitle: 'Complete Odoo customization for tea business including sales, inventory, manufacturing and custom integrations.',
    description: 'An end-to-end enterprise Odoo solution for Heritage Leaf, a premium tea brand. Covers multi-warehouse inventory tracking, agricultural batch lot traceability, custom blending Bill of Materials (BOM), and direct sales dispatch packing slips.',
    detailedOverview: 'Engineered specialized Python controllers and OWL views to manage perishable leaf blending processes, shelf-life quality control gates, automated reordering rules for packaging, and integrated third-party courier dispatch APIs.',
    badge: 'Odoo Development',
    category: 'Odoo Development',
    filterCategories: ['All Projects', 'Odoo Development', 'Industry Solutions', 'Custom Modules'],
    tags: ['Odoo', 'Inventory', 'Manufacturing', 'Custom Modules'],
    image: '/images/project_heritage_leaf.jpg',
    metrics: [
      { label: 'Order Processing', value: '4x Faster' },
      { label: 'Inventory Accuracy', value: '99.5%' },
      { label: 'Odoo Version', value: 'v17 & v18' },
    ],
    githubUrl: 'https://github.com/sharmahimnandini',
  },
  {
    _id: 'meal-plan',
    title: 'Meal Plan – Delivery Portal',
    subtitle: 'Customer portal with delivery management, driver tracking, Google Maps integration and order management.',
    description: 'A customer-facing web portal tightly coupled with Odoo backend for healthy meal subscriptions. Enables clients to select custom dietary plans, track real-time driver delivery status, and pause or resume recurring subscriptions.',
    detailedOverview: 'Integrated Google Maps Distance Matrix API with Odoo delivery route optimization. Designed a sleek mobile-first frontend using OWL and REST webhooks that updates delivery orders and driver assignments synchronously in real-time.',
    badge: 'Web Portal',
    category: 'API Integrations',
    filterCategories: ['All Projects', 'API Integrations', 'Custom Modules', 'Industry Solutions'],
    tags: ['Odoo', 'Portal', 'Delivery', 'Google Maps'],
    image: '/images/project_meal_plan.jpg',
    metrics: [
      { label: 'Daily Deliveries', value: '1,200+' },
      { label: 'Dispatch Latency', value: '-35%' },
      { label: 'Map Precision', value: 'Real-time GPS' },
    ],
    githubUrl: 'https://github.com/sharmahimnandini',
  },
  {
    _id: 'jeepumps',
    title: 'JEEPUMPS – Odoo ERP Implementation',
    subtitle: 'End-to-end Odoo setup for manufacturing business with inventory, production, and sales automation.',
    description: 'Full-cycle enterprise ERP deployment for an industrial pump manufacturer. Encompasses automated quotation generation, production order scheduling, multi-level Work Centers, and serialized component inventory tracking.',
    detailedOverview: 'Configured automated routing for machining, motor assembly, testing, and painting work centers. Implemented dynamic price tiering for industrial distributors and customized QWeb technical spec sheet PDF reports.',
    badge: 'Odoo Development',
    category: 'Odoo Development',
    filterCategories: ['All Projects', 'Odoo Development', 'Business Automation'],
    tags: ['Odoo', 'Manufacturing', 'Sales', 'Inventory'],
    image: '/images/project_jeepumps.jpg',
    metrics: [
      { label: 'Production Cycle', value: '-40% Delay' },
      { label: 'BOM Accuracy', value: '100%' },
      { label: 'Modules Deployed', value: '8 Core ERP' },
    ],
    githubUrl: 'https://github.com/sharmahimnandini',
  },
  {
    _id: 'recruitment-assessment',
    title: 'Recruitment Assessment Module',
    subtitle: 'Custom Odoo module with AI proctoring, question bank, automated evaluation and detailed reporting.',
    description: 'A smart human resources add-on for Odoo Recruitment that streamlines technical candidate evaluations. Includes automated online skill tests, webcam-based AI proctoring for cheating prevention, and auto-generated candidate scorecards.',
    detailedOverview: 'Built custom models for randomized question banks, timed quiz interfaces, automated grading algorithms, and comprehensive applicant evaluation dashboards stored directly under Odoo Recruitment Applicant records.',
    badge: 'Custom Module',
    category: 'Custom Modules',
    filterCategories: ['All Projects', 'Custom Modules', 'Business Automation', 'Odoo Development'],
    tags: ['Odoo', 'HR', 'AI', 'Assessment'],
    image: '/images/project_recruitment.jpg',
    metrics: [
      { label: 'Evaluation Speed', value: 'Instant Auto' },
      { label: 'Proctoring Accuracy', value: '99.2%' },
      { label: 'Candidates Evaluated', value: '5,000+' },
    ],
    githubUrl: 'https://github.com/sharmahimnandini',
  },
  {
    _id: 'recipe-management',
    title: 'Recipe Management – Enbatholdings',
    subtitle: 'Recipe management with versioning, carbon emission calculation, BOM integration and advanced reporting.',
    description: 'Specialized food product formulation software developed for corporate culinary conglomerate Enbatholdings. Features dynamic recipe versioning, nutritional analysis, carbon footprint calculation, and instant Odoo BOM recalculation.',
    detailedOverview: 'Engineered an interactive formulation workbench calculating cost fluctuations based on current commodity purchase prices, real-time GHG emissions per finished product kg, and multi-currency recipe export capabilities.',
    badge: 'Odoo Development',
    category: 'Dashboards',
    filterCategories: ['All Projects', 'Odoo Development', 'Dashboards', 'Custom Modules'],
    tags: ['Odoo', 'Manufacturing', 'BOM', 'Sustainability'],
    image: '/images/project_recipe_mgmt.jpg',
    metrics: [
      { label: 'Recipe Versions', value: 'Unlimited Log' },
      { label: 'Carbon Metric', value: 'Automated GHG' },
      { label: 'Cost Calculation', value: '< 1 sec' },
    ],
    githubUrl: 'https://github.com/sharmahimnandini',
  },
  {
    _id: 'marine-solutions',
    title: 'Marine Solutions – Inventory Setup',
    subtitle: 'Configured inventory locations, product categories, packages and imported master data for smooth operations.',
    description: 'Comprehensive inventory architecture and logistical overhaul for a maritime equipment and spare parts supplier. Features automated drop-shipping routes, cross-docking, barcode scanning packaging flows, and clean legacy catalog migration.',
    detailedOverview: 'Created automated multi-warehouse replenishment rules, custom package dimensions for seafreight compliance, and high-throughput Python ETL scripts that cleansed and imported 15,000+ marine parts master data without downtime.',
    badge: 'ERP Setup',
    category: 'Industry Solutions',
    filterCategories: ['All Projects', 'Business Automation', 'Dashboards', 'Industry Solutions'],
    tags: ['Odoo', 'Inventory', 'Product Master', 'Import'],
    image: '/images/project_marine_solutions.jpg',
    metrics: [
      { label: 'SKUs Cataloged', value: '15,000+' },
      { label: 'Inventory Sync', value: 'Multi-warehouse' },
      { label: 'Data Migration', value: 'Zero Errors' },
    ],
    githubUrl: 'https://github.com/sharmahimnandini',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    'All Projects',
    'Odoo Development',
    'API Integrations',
    'Business Automation',
    'Custom Modules',
    'Dashboards',
    'Industry Solutions',
  ];

  const statMetrics = [
    {
      value: '10+',
      label: 'Projects Delivered',
      icon: Briefcase,
      color: 'bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400',
    },
    {
      value: '8+',
      label: 'Happy Clients',
      icon: Users,
      color: 'bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400',
    },
    {
      value: '100%',
      label: 'Client Satisfaction',
      icon: Star,
      color: 'bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400',
    },
    {
      value: '3+',
      label: 'Industries',
      icon: BarChart3,
      color: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400',
    },
  ];

  // Filter projects by category and search query
  const filteredProjects = ALL_PROJECTS.filter((proj) => {
    const matchesCategory =
      activeCategory === 'All Projects' ||
      proj.filterCategories?.includes(activeCategory);

    const matchesSearch =
      searchQuery.trim() === '' ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-200/25 dark:bg-purple-900/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-blue-100/25 dark:bg-blue-900/15 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* ========================================================================= */}
        {/* HEADER SECTION (Person-Free): Title, Subtitle & 4-Metric Floating Pill   */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 sm:mb-12">
          
          {/* Left Title & Description */}
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-700 dark:text-purple-400 block mb-2">
              MY PROJECTS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight leading-[1.08]">
              <span className="font-serif font-black text-slate-950 dark:text-white block">
                Real Solutions.
              </span>
              <span className="block mt-1">
                <span className="font-serif font-black text-slate-950 dark:text-white">Real </span>
                <span className="font-serif italic font-extrabold text-purple-600 dark:text-purple-400">Impact</span>
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
              A collection of my Odoo developments, integrations and custom solutions built for real business needs.
              Each project reflects problem solving, creativity and a focus on measurable impact.
            </p>
          </div>

          {/* Right: 4-Metric Pill Bar */}
          <div className="w-full lg:w-auto flex-shrink-0">
            <div className="rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#111d1a]/95 backdrop-blur-md p-3.5 sm:p-4 border border-slate-200/90 dark:border-white/10 shadow-lg shadow-slate-200/40 dark:shadow-black/40 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
              {statMetrics.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-xl ${stat.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-black text-slate-950 dark:text-white leading-tight font-sans">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* FILTER CATEGORIES & LIVE SEARCH BAR                                       */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300 border border-slate-200/80 dark:border-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full text-xs font-medium bg-white dark:bg-[#111d1a] border border-slate-200/90 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 shadow-xs"
            />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 6 PROJECT CARDS GRID (3 Columns x 2 Rows)                                 */}
        {/* ========================================================================= */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProjects.map((project) => (
              <ThreeDCard
                key={project._id}
                glare={true}
                maxTilt={12}
                scale={1.02}
                onClick={() => setSelectedProject(project)}
                className="group rounded-2xl sm:rounded-3xl bg-white dark:bg-[#111d1a] border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  {/* Card Thumbnail Image with Badge */}
                  <div className="relative aspect-[16/7.5] sm:aspect-[16/7] overflow-hidden bg-slate-100 dark:bg-[#070d0c] translate-z-20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 dark:bg-[#070d0c]/90 text-[10px] font-bold text-purple-700 dark:text-purple-300 border border-slate-200/80 dark:border-white/10 shadow-xs backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 translate-z-10">
                    <h3 className="font-bold text-sm sm:text-base text-slate-950 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Tags & View Details */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 flex items-center justify-between gap-2 border-t border-slate-100 dark:border-white/5 mt-auto translate-z-10">
                  <div className="flex flex-wrap gap-1.5 min-w-0">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[10.5px] font-medium bg-slate-100 dark:bg-[#070d0c] text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </ThreeDCard>
            ))}
          </div>

        ) : (
          <div className="text-center py-16 bg-white dark:bg-[#111d1a] rounded-3xl border border-slate-200/80 dark:border-white/10 p-8">
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="font-bold text-base text-slate-900 dark:text-white">No projects found</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Try adjusting your search query or select another category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All Projects');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-purple-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Detailed Interactive Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
