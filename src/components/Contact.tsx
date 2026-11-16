'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Github, Linkedin, MapPin, Clock, ArrowUpRight, CheckCircle2, Copy, Check, FileDown, Send } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Engineering Opportunity / Collaboration',
    message: '',
  });

  // Live Hyderabad Timezone Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-surface/30 border-t border-white/10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              <span>08 / DIRECT COMMUNICATION</span>
            </div>
            <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-serif text-white">
              Initiate Dialogue
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base font-mono max-w-md">
            Available for full-time backend engineering positions, distributed systems roles, and software consultancy.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Coordinates, Real-time Clock & Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-medium tracking-wider text-emerald-400 uppercase">
                  STATUS: OPEN TO ENGAGEMENTS
                </span>
              </div>

              <div>
                <h3 className="editorial-title text-2xl sm:text-3xl font-serif text-white mb-2">
                  Let&apos;s Build Together
                </h3>
                <p className="text-sm text-muted font-light leading-relaxed">
                  Whether discussing Python microservice architecture, API design, high-volume data streams, or new product engineering, my inbox is always open.
                </p>
              </div>

              {/* Hyderabad Live Clock */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-muted">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-cyan" /> HYDERABAD, INDIA
                  </span>
                  <span className="text-accent-cyan">UTC+5:30 (IST)</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-white/10">
                  <span className="text-muted flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent-orange" /> LOCAL TIME:
                  </span>
                  <span className="text-base font-bold text-white tracking-wider">
                    {currentTime || '08:00:00 PM'}
                  </span>
                </div>
              </div>

              {/* Direct Email with One-Click Copy */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase text-muted tracking-widest">
                  // PRIMARY EMAIL
                </div>
                <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs sm:text-sm font-mono text-white truncate">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Resume Download Action */}
              <div className="pt-2">
                <a
                  href="/llms.txt"
                  target="_blank"
                  download="Srikanth_Yadav_Gorla_Profile.txt"
                  className="w-full py-3.5 px-6 rounded-xl border border-accent-cyan/40 bg-accent-cyan/10 hover:bg-accent-cyan/20 text-accent-cyan font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>DOWNLOAD VERIFIED PROFILE / RESUME</span>
                </a>
              </div>
            </div>

            {/* Social Network Pills */}
            <div className="flex flex-wrap gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass-panel border border-white/10 hover:border-white/25 text-xs font-mono text-white hover:text-accent-cyan transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass-panel border border-white/10 hover:border-white/25 text-xs font-mono text-white hover:text-accent-cyan transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl border border-white/10 p-6 sm:p-10">
              {formSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="editorial-title text-2xl sm:text-3xl font-serif text-white">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-sm text-muted font-mono max-w-md mx-auto">
                    Thank you, {formData.name}. Srikanth will review your correspondence and respond via {formData.email} promptly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Engineering Opportunity', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full border border-white/10 text-xs font-mono text-white hover:bg-white/10 transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-muted tracking-wider uppercase">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 focus:border-accent-cyan focus:outline-none text-white text-sm font-sans transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-muted tracking-wider uppercase">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ada@computing.org"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 focus:border-accent-cyan focus:outline-none text-white text-sm font-sans transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-muted tracking-wider uppercase">
                      INQUIRY TOPIC
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 focus:border-accent-cyan focus:outline-none text-white text-sm font-sans transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-mono text-muted tracking-wider uppercase">
                        YOUR MESSAGE *
                      </label>
                      <span className="text-[11px] font-mono text-muted">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project details, engineering requirements, or scheduling availability..."
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 focus:border-accent-cyan focus:outline-none text-white text-sm font-sans transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-8 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-accent-cyan transition-all duration-300 hover:shadow-[0_0_30px_rgba(77,225,255,0.4)]"
                  >
                    <span>TRANSMIT MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
