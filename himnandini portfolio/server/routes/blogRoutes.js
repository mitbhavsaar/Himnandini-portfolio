import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

// GET: all blog posts
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch blogs.',
      error: error.message,
    });
  }
});

// GET: single blog post
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found.',
      });
    }
    return res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch blog post.',
      error: error.message,
    });
  }
});

export default router;
