import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from '../models/Project.js';
import Blog from '../models/Blog.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/himnandini_portfolio';

const projects = [
  {
    title: 'Offline Odoo Dashboard & Sync',
    subtitle: 'Progressive offline dashboard with IndexedDB and auto sync engine.',
    description: 'A cutting-edge progressive web application (PWA) extension for Odoo ERP that allows enterprise staff to view, filter, and queue data changes even without internet connection, automatically reconciling with the server upon reconnection.',
    detailedOverview: 'Built utilizing Odoo Web Library (OWL) and client-side IndexedDB with an event-driven background sync worker. The architecture includes delta conflict resolution, client-side caching of transactional models, and intuitive offline indicators with zero data loss.',
    tags: ['OWL', 'IndexedDB', 'Javascript'],
    image: '/images/project_dashboard.jpg',
    category: 'Odoo Solutions',
    featured: true,
    metrics: [
      { label: 'Sync Latency', value: '< 120ms' },
      { label: 'Offline Persistence', value: 'IndexedDB' },
      { label: 'Odoo Versions', value: '17, 18, 19' },
    ],
    githubUrl: 'https://github.com/sharmahimnandini',
    demoUrl: '#',
  },
  {
    title: 'Azure OCR Document Automation',
    subtitle: 'Automated invoice data extraction using Azure OCR API.',
    description: 'End-to-end intelligent document processing pipeline that extracts invoice line items, dates, vendor details, and amounts using Azure Cognitive Services OCR and automatically generates draft vendor bills in Odoo.',
    detailedOverview: 'Implemented custom Python controllers and model extensions that ingest PDF/image invoices, dispatch them asynchronously to Azure Document Intelligence OCR, map parsed JSON responses to Odoo Account Move lines, and perform fuzzy matching on supplier names.',
    tags: ['Azure OCR', 'REST API', 'Python'],
    image: '/images/project_ocr.jpg',
    category: 'AI & Automation',
    featured: true,
    metrics: [
      { label: 'Extraction Accuracy', value: '99.8%' },
      { label: 'Processing Speed', value: '1.4s / doc' },
      { label: 'Manual Effort Reduction', value: '85%' },
    ],
    githubUrl: 'https://github.com/sharmahimnandini',
    demoUrl: '#',
  },
  {
    title: 'Hörmann Product Configurator',
    subtitle: 'Integrated product configurator API with dynamic pricing.',
    description: 'An advanced interactive sales configurator integrated seamlessly into Odoo Sales Orders, calculating multi-variable dimensions, finishes, accessories, and dynamic tier pricing on the fly.',
    detailedOverview: 'Connects third-party 3D visual configurators directly with Odoo product variants and Bill of Materials (BOM). Employs automated price matrix calculations and instant dynamic line generation for sales reps, reducing quotation turnaround time dramatically.',
    tags: ['REST API', 'Sales Order', 'Python'],
    image: '/images/project_configurator.jpg',
    category: 'Enterprise Integration',
    featured: true,
    metrics: [
      { label: 'Variant Combinations', value: '250+' },
      { label: 'Quotation Speed', value: '3x Faster' },
      { label: 'Pricing Accuracy', value: '100%' },
    ],
    githubUrl: 'https://github.com/sharmahimnandini',
    demoUrl: '#',
  },
  {
    title: 'Power BI Integration',
    subtitle: 'Real-time analytical reporting with Power BI and Odoo PostgreSQL.',
    description: 'Direct high-performance business intelligence bridge connecting Odoo PostgreSQL database to Microsoft Power BI dashboards with scheduled data transformations and multi-department visual KPIs.',
    detailedOverview: 'Engineered specialized materialized views, indexing strategies, and automated ETL pipelines in PostgreSQL. Delivered executive-level dashboards for executive boards tracking inventory turnover, sales forecasts, and cash flow trends.',
    tags: ['Power BI', 'PostgreSQL', 'ETL'],
    image: '/images/project_powerbi.jpg',
    category: 'Analytics & BI',
    featured: true,
    metrics: [
      { label: 'Refresh Frequency', value: 'Automated Daily' },
      { label: 'Custom Visuals', value: '24 Reports' },
      { label: 'Query Performance', value: '94% Faster' },
    ],
    githubUrl: 'https://github.com/sharmahimnandini',
    demoUrl: '#',
  },
];

const blogs = [
  {
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

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB for seeding...');

    await Project.deleteMany({});
    await Project.insertMany(projects);
    console.log(`Seeded ${projects.length} projects successfully.`);

    await Blog.deleteMany({});
    await Blog.insertMany(blogs);
    console.log(`Seeded ${blogs.length} blog posts successfully.`);

    console.log('Database seeding complete!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seed();
