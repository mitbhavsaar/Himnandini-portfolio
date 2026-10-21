import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import projectRoutes from './routes/projectRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import aiRoutes from './routes/aiRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/himnandini_portfolio';

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully to', MONGO_URI);
  })
  .catch((err) => {
    console.warn('MongoDB connection error (fallback in place if needed):', err.message);
  });

// API Routes
app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/ai', aiRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    dbState: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

// Root / Frontend serving
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '../client/dist');
  app.use(express.static(distPath));

  // Catch-all for SPA client routing (excluding API routes)
  app.get('*', (req, res, next) => {
    if (req.originalUrl.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.resolve(distPath, 'index.html'));
  });
} else {
  // Development mode fallback
  app.get('/', (req, res) => {
    res.send('Himnandini Sharma Portfolio API is running in development mode.');
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('API Error:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'production' ? null : err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
