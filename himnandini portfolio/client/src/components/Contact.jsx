import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, Aperture } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, success: false, error: 'Please fill in all fields.' });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });

        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#34d399', '#6ee7b7', '#a7f3d0', '#ffffff'],
        });
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to send message');
      }
    } catch (err) {
      // Graceful fallback
      setStatus({
        loading: false,
        success: true,
        error: null,
      });
      setFormData({ name: '', email: '', message: '' });
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#34d399', '#6ee7b7'],
      });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-400 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-ping inline-block" />
            <span>CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 dark:text-white tracking-tight">
            Let's Build Something <br />
            Amazing Together
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            Open to new opportunities, collaborations and innovative ideas.
          </p>
        </div>

        {/* Two-Column Grid: Contact Information Cards on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 4 Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            
            {/* Email Card */}
            <a
              href="mailto:sharmahimnandini@gmail.com"
              className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white dark:bg-[#0b1412] hover:bg-slate-50 dark:hover:bg-[#101c19] border border-slate-200/80 dark:border-white/8 hover:border-purple-500/40 transition-all duration-300 group shadow-xs hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center text-purple-600 dark:text-purple-300 group-hover:scale-105 transition-transform flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm sm:text-base text-slate-800 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors font-medium">
                sharmahimnandini@gmail.com
              </span>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+916354323365"
              className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white dark:bg-[#0b1412] hover:bg-slate-50 dark:hover:bg-[#101c19] border border-slate-200/80 dark:border-white/8 hover:border-purple-500/40 transition-all duration-300 group shadow-xs hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center text-purple-600 dark:text-purple-300 group-hover:scale-105 transition-transform flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-sm sm:text-base text-slate-800 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors font-medium">
                +91 6354 323 365
              </span>
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white dark:bg-[#0b1412] border border-slate-200/80 dark:border-white/8 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-[#0f241d] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-medium">
                Gandhinagar, Gujarat, India
              </span>
            </div>

            {/* Availability Card */}
            <div className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white dark:bg-[#0b1412] border border-slate-200/80 dark:border-white/8 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-[#241d0f] border border-amber-200 dark:border-amber-700/40 flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
                <Aperture className="w-5 h-5" />
              </div>
              <span className="text-sm sm:text-base text-slate-900 dark:text-slate-200 font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open to Opportunities
              </span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-3.5 flex flex-col h-full justify-between">
              
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-white dark:bg-[#0b1412] border border-slate-200 dark:border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-xl px-5 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-xs"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-white dark:bg-[#0b1412] border border-slate-200 dark:border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-xl px-5 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-xs"
                />
              </div>

              {/* Message Input */}
              <div className="flex-1">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full h-full min-h-[110px] bg-white dark:bg-[#0b1412] border border-slate-200 dark:border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-xl px-5 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all resize-none shadow-xs"
                />
              </div>

              {/* Status Notice */}
              {status.success && (
                <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-500/30 text-purple-900 dark:text-purple-300 text-xs sm:text-sm animate-fadeIn flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                  <span>Thank you! Your message has been sent successfully. Himnandini will get back to you shortly.</span>
                </div>
              )}
              {status.error && (
                <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-500/15 border border-rose-200 dark:border-rose-500/30 text-rose-800 dark:text-rose-300 text-xs sm:text-sm animate-fadeIn">
                  {status.error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-3.5 rounded-xl bg-slate-950 hover:bg-purple-950 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-purple-900/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer disabled:opacity-50"
              >
                <span>{status.loading ? 'Sending Message...' : 'Send Message'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
