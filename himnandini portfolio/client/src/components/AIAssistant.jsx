import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, RefreshCw } from 'lucide-react';

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I am Himnandini Sharma's AI Assistant. Ask me anything about her Odoo ERP development, custom OWL components, REST API integrations, or professional background!",
      topics: [
        'What projects have you worked on?',
        'Tell me about your Odoo experience',
        'What is OWL in Odoo?',
        'Your integration experience?'
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    'What projects have you worked on?',
    'Tell me about your Odoo experience',
    'What is OWL in Odoo?',
    'Your integration experience?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages, isLoading]);

  const handleSend = async (queryText) => {
    const textToSend = (queryText || input).trim();
    if (!textToSend || isLoading) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: textToSend,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: textToSend }),
      });

      if (res.ok) {
        const data = await res.json();
        const botReply = {
          id: Date.now() + 1,
          sender: 'bot',
          text: data.data.response,
          topics: data.data.suggestedTopics,
        };
        setMessages((prev) => [...prev, botReply]);
      } else {
        throw new Error('API request failed');
      }
    } catch (err) {
      // Local intelligent fallback response if backend is unreachable
      const lower = textToSend.toLowerCase();
      let fallbackText = `Himnandini Sharma is an Odoo Developer specializing in Python, OWL, and PostgreSQL. She has delivered enterprise projects including the Offline Odoo Dashboard & Sync, Azure OCR Document Automation, and Power BI reporting!`;
      let topics = ['Tell me about your Odoo experience', 'What projects have you worked on?', 'How to contact Himnandini?'];

      if (lower.includes('project')) {
        fallbackText = `Himnandini has delivered 4 flagship projects:\n• **Offline Odoo Dashboard & Sync** (OWL, IndexedDB, JavaScript)\n• **Azure OCR Document Automation** (Azure OCR, Python, REST API)\n• **Hörmann Product Configurator** (Sales Order dynamic pricing)\n• **Power BI Integration** (PostgreSQL direct analytics views).`;
      } else if (lower.includes('experience') || lower.includes('work')) {
        fallbackText = `Himnandini is currently an Odoo Developer at **Entrivis Tech Pvt. Ltd.** (08/2025 - Present) and previously trained at **Acespritech Solutions Pvt. Ltd.** (02/2025 - 07/2025) in Gandhinagar, Gujarat.`;
      } else if (lower.includes('owl')) {
        fallbackText = `OWL (Odoo Web Library) is Odoo's modern component framework. Himnandini uses OWL to build reactive views, offline-first dashboards, and custom field widgets for Odoo 17, 18, and 19.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: fallbackText,
          topics: topics,
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping inline-block" />
            <span>AI ASSISTANT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
            Ask About My Work
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            Get insights about my experience, projects, skills or anything related to my work.
          </p>
        </div>

        {/* AI Interaction Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#0d1815]/90 rounded-3xl border border-slate-200/80 dark:border-white/8 p-6 sm:p-8 lg:p-10 shadow-md dark:shadow-2xl relative overflow-hidden">
          
          {/* Ambient lighting inside card */}
          <div className="ambient-glow w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/10 -top-20 -left-20" />

          {/* Left Column: Robot Mascot + Speech Bubble */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-56 sm:w-64">
              {/* Floating Speech Bubble */}
              <div className="absolute -top-12 -right-4 sm:-right-8 bg-slate-100 dark:bg-[#182a25] border border-emerald-400/40 text-slate-900 dark:text-slate-100 px-4 py-2.5 rounded-2xl shadow-xl z-20 text-xs sm:text-sm font-medium animate-float">
                <p className="leading-snug">
                  Hi! I'm your <br />
                  <span className="text-emerald-700 dark:text-emerald-300 font-bold">AI Assistant</span> <br />
                  Ask me anything!
                </p>
                <div className="absolute -bottom-2 left-6 w-3 h-3 bg-slate-100 dark:bg-[#182a25] border-r border-b border-emerald-400/40 transform rotate-45" />
              </div>

              {/* Robot Avatar Image */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-500/30 shadow-[0_0_35px_rgba(52,211,153,0.25)] bg-slate-100 dark:bg-[#09110f]">
                <img
                  src="/images/ai_robot_avatar.jpg"
                  alt="AI Assistant Avatar"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Chat History & Input */}
          <div className="lg:col-span-7 flex flex-col h-[460px] bg-slate-50 dark:bg-[#070e0c]/90 rounded-2xl border border-slate-200 dark:border-white/8 p-5 relative shadow-inner">
            
            {/* Quick Prompt Chips (Matches Screenshot) */}
            <div className="flex flex-wrap gap-2 pb-3 mb-2 border-b border-slate-200 dark:border-white/8">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleSend(prompt)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-[#101f1b] border border-slate-300 dark:border-white/10 hover:border-emerald-500/40 text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-300 transition-all text-left cursor-pointer shadow-sm"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-emerald-600 text-white rounded-br-none shadow-md'
                        : 'bg-white dark:bg-[#12231f] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/8 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.sender === 'bot' && (
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
                        <Bot className="w-3.5 h-3.5" />
                        <span>Himnandini's AI Assistant</span>
                      </div>
                    )}
                    <div className="whitespace-pre-line">
                      {msg.text}
                    </div>
                  </div>

                  {/* Bot Suggested follow-ups */}
                  {msg.topics && msg.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[85%]">
                      {msg.topics.map((topic, tIdx) => (
                        <button
                          key={tIdx}
                          onClick={() => handleSend(topic)}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 dark:bg-[#152723] dark:hover:bg-[#1d3530] text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 transition-colors text-left cursor-pointer"
                        >
                          → {topic}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 bg-white dark:bg-[#12231f] px-3.5 py-2.5 rounded-2xl max-w-[200px] border border-slate-200 dark:border-white/8 shadow-sm">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar (Matches Screenshot) */}
            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-white/8">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything about my work..."
                  className="w-full bg-white dark:bg-[#0d1916] border border-slate-300 dark:border-white/10 focus:border-emerald-500 rounded-2xl pl-4 pr-14 py-3.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-inner"
                />
                <button
                  type="button"
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  aria-label="Send message"
                  className="absolute right-2 w-10 h-10 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 flex items-center justify-center transition-all disabled:opacity-40 disabled:hover:bg-emerald-400 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
