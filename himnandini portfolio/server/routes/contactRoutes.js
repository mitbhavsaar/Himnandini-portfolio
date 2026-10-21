import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST: submit a new contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, message, service } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message.',
      });
    }

    const newContact = await Contact.create({
      name,
      email,
      message,
      service: service || 'General Inquiry',
    });

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received successfully. Himnandini will get back to you shortly.',
      data: newContact,
    });
  } catch (error) {
    console.error('Contact error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit message. Please try again later.',
      error: error.message,
    });
  }
});

// GET: list all messages (for admin or review)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch messages.',
      error: error.message,
    });
  }
});

export default router;
