import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, RotateCcw, Bot, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const initialMessages = [
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hi there! 👋 I'm Himnandini's AI Assistant. I can answer questions about her Odoo ERP experience, custom OWL components, enterprise projects, Python skills, or how to hire her. How can I help you today?",
      timestamp: 'Just now',
      topics: [
        'What projects have you worked on?',
        'Tell me about your Odoo experience',
        'What is OWL in Odoo?',
        'Are you available for hire?',
      ],
    },
  ];

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('himnandini_ai_chat');
      return saved ? JSON.parse(saved) : initialMessages;
    } catch {
      return initialMessages;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('himnandini_ai_chat', JSON.stringify(messages));
    } catch (e) {
      console.warn('Could not save chat history to localStorage', e);
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen, messages]);

  // Client-side fallback knowledge in case server is unavailable
  const getFallbackResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('built')) {
      return {
        response: `Himnandini has delivered standout enterprise solutions:\n\n1. **Offline Odoo Dashboard & Sync**: Progressive dashboard with OWL, IndexedDB, and auto two-way sync.\n2. **Azure OCR Document Automation**: Automated invoice extraction integrating Azure OCR cognitive services with Odoo.\n3. **Hörmann Product Configurator**: Real-time sales order dimension and pricing calculator API.\n4. **Power BI Integration**: Real-time ETL analytics pipeline connecting Odoo PostgreSQL to Power BI.`,
        topics: ['Tell me about OWL in Odoo', 'What is your Odoo experience?', 'How to contact Himnandini?'],
      };
    }
    if (q.includes('owl') || q.includes('odoo web library') || q.includes('frontend')) {
      return {
        response: `OWL (Odoo Web Library) is Odoo's modern component framework inspired by React and Vue! Himnandini has deep experience developing custom OWL components, field widgets, and offline-capable dashboard widgets in Odoo 17, 18, and 19.`,
        topics: ['What projects have you worked on?', 'Tell me about your Odoo experience'],
      };
    }
    if (q.includes('experience') || q.includes('journey') || q.includes('career') || q.includes('entrivis') || q.includes('acespritech')) {
      return {
        response: `Himnandini's professional journey:\n\n• **Odoo Developer** at **Entrivis Tech Pvt. Ltd.** (08/2025 - Present):\n  Custom Odoo 17/18/19 modules, OWL components, REST APIs, Webhooks, Linux VPS deployment.\n\n• **Odoo Trainee** at **Acespritech Solutions Pvt. Ltd.** (02/2025 - 07/2025):\n  Odoo CRM, QWeb reports, security access rules, Sales and Purchase customizations.`,
        topics: ['What projects have you worked on?', 'What technologies do you use?', 'Are you available for hire?'],
      };
    }
    if (q.includes('hire') || q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('available')) {
      return {
        response: `Himnandini is currently **Open to Opportunities** for full-time roles, consulting, and Odoo development contracts!\n\n• **Email**: sharmahimnandini@gmail.com\n• **Phone**: +91 6354 323 365\n• **Location**: Gandhinagar, Gujarat, India`,
        topics: ['What projects have you worked on?', 'Tell me about your Odoo experience'],
      };
    }
    return {
      response: `I'm Himnandini Sharma's AI Career Assistant. Himnandini is an Odoo & Python developer based in Gandhinagar, Gujarat specializing in custom ERP modules, OWL frontend, and API integrations.\n\nFeel free to ask about her projects, experience at Entrivis Tech / Acespritech, or hiring details!`,
      topics: ['What projects have you worked on?', 'Tell me about your Odoo experience', 'What is OWL in Odoo?', 'How can I hire Himnandini?'],
    };
  };

  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isTyping) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text }),
      });

      if (!res.ok) throw new Error('Network error');
      const data = await res.json();

      const aiReply = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.data?.response || data.response,
        topics: data.data?.suggestedTopics || data.suggestedTopics || [],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch {
      // Fallback
      const fb = getFallbackResponse(text);
      const aiReply = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: fb.response,
        topics: fb.topics,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiReply]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages(initialMessages);
    localStorage.removeItem('himnandini_ai_chat');
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center">
        {/* Unread badge tooltip when closed */}
        {!isOpen && hasUnread && (
          <div className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-1.5 rounded-full bg-slate-900/95 dark:bg-[#12231f]/95 text-white dark:text-emerald-300 text-xs font-medium border border-emerald-500/30 shadow-xl backdrop-blur-md animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Chat with AI Assistant</span>
          </div>
        )}

        <button
          type="button"
          id="open-chatbot-btn"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close Chatbot' : 'Open Chatbot'}
          className={`relative group p-1 rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer ${
            isOpen
              ? 'bg-slate-900 text-white dark:bg-purple-600'
              : 'bg-gradient-to-tr from-purple-600 via-indigo-600 to-purple-400 text-white'
          }`}
        >
          {/* Animated radar rings */}
          {!isOpen && (
            <span className="absolute -inset-1 rounded-full bg-purple-400/30 animate-ping pointer-events-none" />
          )}

          <div className="relative w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-slate-900/30">
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <img
                src="/images/ai_robot_avatar_clean.png"
                alt="Himnandini AI"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Online green indicator dot */}
          {!isOpen && (
            <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-white dark:border-[#070d0c] rounded-full" />
          )}
        </button>
      </div>

      {/* Floating Chatbot Popup Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] h-[580px] max-h-[82vh] rounded-[28px] overflow-hidden shadow-2xl flex flex-col border border-slate-200/90 dark:border-purple-500/30 bg-white/95 dark:bg-[#0c0a17]/95 backdrop-blur-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-6">
          
          {/* Chat Window Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-purple-50 to-indigo-50/50 dark:from-[#17112d] dark:to-[#0e0a1f] border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-purple-500/30 shadow-xs flex-shrink-0 bg-purple-900/20">
                <img
                  src="/images/ai_robot_avatar_clean.png"
                  alt="AI Assistant"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-white dark:border-[#070d0c] rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-serif font-bold text-slate-900 dark:text-white text-sm">
                    Himnandini AI
                  </h3>
                  <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-[11px] text-purple-700 dark:text-purple-300 font-medium">
                  Active • Odoo Career Assistant
                </p>
              </div>
            </div>

            {/* Actions: Clear Chat & Minimize */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={clearChat}
                title="Restart Chat"
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close Chat"
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-br-xs'
                      : 'bg-slate-100 dark:bg-[#151226] text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-purple-500/20 rounded-bl-xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 px-1">
                  {msg.timestamp}
                </span>

                {/* Suggested prompt chips if present in AI reply */}
                {msg.sender === 'ai' && msg.topics && msg.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                    {msg.topics.map((topic, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSendMessage(topic)}
                        className="text-left text-xs px-2.5 py-1 rounded-full bg-purple-50 hover:bg-purple-100 dark:bg-[#1f1938] dark:hover:bg-[#28214a] text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 transition-all cursor-pointer font-medium"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-500 dark:text-purple-400 text-xs py-1">
                <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-[#1f1938] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-purple-600 dark:text-purple-400 animate-pulse" />
                </div>
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-[#151226] px-3 py-2 rounded-full border border-slate-200 dark:border-purple-500/20">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-bounce" />
                  <span className="ml-1 text-[11px] font-medium text-slate-500 dark:text-slate-400">Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Footer */}
          <div className="p-3 bg-slate-50/80 dark:bg-[#0c0a17] border-t border-slate-200/80 dark:border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask anything about my work..."
                className="flex-1 bg-white dark:bg-[#151226] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm px-4 py-2.5 rounded-full border border-slate-200 dark:border-purple-500/25 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 disabled:opacity-40 disabled:hover:bg-purple-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-md flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
