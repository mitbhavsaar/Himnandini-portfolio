import express from 'express';
import ChatMessage from '../models/ChatMessage.js';

const router = express.Router();

// Knowledge base responses for Himnandini's portfolio
const getAIResponse = (query) => {
  const q = query.toLowerCase();

  if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('built')) {
    return {
      response: `Himnandini has developed several standout enterprise projects:\n\n1. **Offline Odoo Dashboard & Sync**: A progressive offline dashboard built with OWL, IndexedDB, and JavaScript featuring two-way background auto-synchronization when connectivity restores.\n2. **Azure OCR Document Automation**: End-to-end automated invoice extraction integrating Microsoft Azure OCR cognitive services with Odoo Python backend.\n3. **Hörmann Product Configurator**: Dynamic sales configurator API that calculates real-time dimensions, finishes, and pricing inside Odoo Sales Orders.\n4. **Power BI Integration**: Direct ETL pipeline connecting Odoo PostgreSQL database to Microsoft Power BI for real-time executive analytics.`,
      topics: ['Tell me about OWL in Odoo', 'What is your Azure OCR project?', 'Odoo experience', 'How can I contact Himnandini?']
    };
  }

  if (q.includes('owl') || q.includes('odoo web library') || q.includes('frontend')) {
    return {
      response: `OWL (Odoo Web Library) is Odoo's modern, lightning-fast component framework inspired by React and Vue! Himnandini has extensive hands-on experience building custom OWL components, reactive views, field widgets, and offline-capable dashboard widgets in Odoo 17, 18, and 19. She leverages OWL hooks, stores, and XML templates to deliver smooth, app-like enterprise user experiences.`,
      topics: ['What projects have you worked on?', 'Tell me about your Odoo experience', 'What technologies do you use?']
    };
  }

  if (q.includes('experience') || q.includes('journey') || q.includes('career') || q.includes('entrivis') || q.includes('acespritech')) {
    return {
      response: `Himnandini's professional journey includes:\n\n• **Odoo Developer** at **Entrivis Tech Pvt. Ltd.** (Gandhinagar | 08/2025 - Present):\n  - Developing custom Odoo modules across Odoo 17, 18, and 19.\n  - Building custom OWL components and interactive analytics dashboards.\n  - Implementing REST APIs, Webhooks, and 3rd-party integrations.\n  - Deploying and maintaining Odoo instances on Linux VPS.\n\n• **Odoo Trainee** at **Acespritech Solutions Pvt. Ltd.** (Gandhinagar | 02/2025 - 07/2025):\n  - Mastered Odoo CRM, QWeb reporting, security rules, and ORM.\n  - Customized Sales, Purchase, and Inventory workflows for live client projects.`,
      topics: ['What projects have you worked on?', 'What technologies do you work with?', 'Is she available for hire?']
    };
  }

  if (q.includes('integration') || q.includes('api') || q.includes('rest') || q.includes('webhook') || q.includes('azure') || q.includes('power bi')) {
    return {
      response: `Himnandini specializes in seamless enterprise integrations with Odoo:\n\n• **REST APIs & Webhooks**: Building bidirectional sync between Odoo and external portals, e-commerce, and logistics.\n• **AI & OCR Services**: Integrating Azure Computer Vision / OCR to automatically ingest and validate invoices.\n• **Business Intelligence**: Power BI reporting via direct PostgreSQL queries and optimized SQL views.\n• **Payment & Hardware APIs**: Seamless connections for ERP sales and point-of-sale systems.`,
      topics: ['What is OWL in Odoo?', 'Show me your projects', 'Contact details']
    };
  }

  if (q.includes('tech') || q.includes('skills') || q.includes('stack') || q.includes('python') || q.includes('postgres')) {
    return {
      response: `Himnandini's core technology stack includes:\n\n• **ERP & Frameworks**: Odoo 17/18/19, OWL (Odoo Web Library), QWeb, XML\n• **Languages**: Python, JavaScript (ES6+), SQL, HTML5, CSS3\n• **Databases**: PostgreSQL, IndexedDB, MongoDB\n• **Cloud & DevOps**: AWS (EC2/S3), Nginx, Linux (Ubuntu/Debian VPS), Docker\n• **Data & Tools**: Power BI, Azure OCR, Git, REST APIs, Tailwind CSS`,
      topics: ['Tell me about your Odoo experience', 'What projects have you worked on?', 'How can I hire her?']
    };
  }

  if (q.includes('hire') || q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('available') || q.includes('location') || q.includes('reach')) {
    return {
      response: `Himnandini is currently **Open to Opportunities** for full-time roles, enterprise consulting, and specialized Odoo development contracts!\n\n• **Email**: sharmahimnandini@gmail.com\n• **Phone**: +91 6354 323 365\n• **Location**: Gandhinagar, Gujarat, India\n\nYou can also submit a direct message using the contact form at the bottom of this portfolio!`,
      topics: ['What projects have you worked on?', 'Tell me about your Odoo experience']
    };
  }

  // Default fallback response
  return {
    response: `Hello! I am Himnandini Sharma's AI Assistant. Himnandini is a specialized Odoo & Python developer based in Gandhinagar, Gujarat. She builds scalable ERP modules, custom OWL interfaces, and seamless API integrations (Azure OCR, Power BI, REST).\n\nFeel free to ask me about:\n1. Her experience at Entrivis Tech and Acespritech\n2. Her projects (Offline Dashboard, Azure OCR, Hörmann Configurator)\n3. Technical skills (OWL, Python, PostgreSQL, Nginx, AWS)\n4. Hiring and contact information!`,
    topics: ['What projects have you worked on?', 'Tell me about your Odoo experience', 'What is OWL in Odoo?', 'How can I hire Himnandini?']
  };
};

// POST: ask a question to AI Assistant (supports both /ask and /chat)
const handleAsk = async (req, res) => {
  try {
    const question = req.body.question || req.body.message;
    const { sessionId } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a question or message.',
      });
    }

    const { response, topics } = getAIResponse(question);

    // Save to database
    try {
      await ChatMessage.create({
        sessionId: sessionId || 'default',
        userQuestion: question,
        aiResponse: response,
        suggestedTopics: topics,
      });
    } catch (dbErr) {
      console.warn('Could not persist chat message to DB:', dbErr.message);
    }

    return res.status(200).json({
      success: true,
      data: {
        question,
        response,
        suggestedTopics: topics,
      },
    });
  } catch (error) {
    console.error('AI chat error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to generate AI response.',
      error: error.message,
    });
  }
};

router.post('/ask', handleAsk);
router.post('/chat', handleAsk);



// GET: recent questions
router.get('/history', async (req, res) => {
  try {
    const history = await ChatMessage.find().sort({ createdAt: -1 }).limit(20);
    return res.status(200).json({
      success: true,
      data: history,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch history.',
    });
  }
});

export default router;
