import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// GET: all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: 1 });
    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch projects.',
      error: error.message,
    });
  }
});

// GET: single project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found.',
      });
    }
    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch project.',
      error: error.message,
    });
  }
});

export default router;
