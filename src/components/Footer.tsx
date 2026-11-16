'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Heart, Terminal, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-black border-t border-white/10 pt-20 pb-12 px-4 sm:px-8 overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-cyan/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Large Cinematic Editorial Statement */}
        <div className="mb-16 border-b border-white/10 pb-16">
          <div className="text-xs font-mono text-accent-cyan uppercase tracking-widest mb-4">
            // ENGINEERING THE FUTURE
          </div>
          <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[0.95]">
            Engineering Resilient <br />
            <span className="text-shimmer italic font-light">Digital Architecture.</span>
          </h2>
        </div>

        {/* 4-Column Footer Navigation & Information */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-xs font-mono">
          {/* Navigation Column */}
          <div className="space-y-3">
            <div className="text-white uppercase tracking-widest font-semibold">// SECTIONS</div>
            <ul className="space-y-2 text-muted">
              <li>
                <Link href="#about" className="hover:text-accent-cyan transition-colors">
                  01. About Philosophy
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-accent-cyan transition-colors">
                  02. Experience Timeline
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-accent-cyan transition-colors">
                  03. Technical Arsenal
                </Link>
              </li>
              <li>
                <Link href="#work" className="hover:text-accent-cyan transition-colors">
                  04. Selected Systems
                </Link>
              </li>
              <li>
                <Link href="#ai-lab" className="hover:text-accent-cyan transition-colors">
                  05. AI & WebGL Lab
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-accent-cyan transition-colors">
                  06. Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Specializations */}
          <div className="space-y-3">
            <div className="text-white uppercase tracking-widest font-semibold">// ARCHITECTURES</div>
            <ul className="space-y-2 text-muted">
              <li>Python 3.12+ Async Microservices</li>
              <li>FastAPI & Pydantic Schemas</li>
              <li>PostgreSQL Multi-Tenant Sharding</li>
              <li>Redis Distributed In-Memory Caches</li>
              <li>LangChain Vector RAG Pipelines</li>
              <li>Next.js Full-Stack Integrations</li>
            </ul>
          </div>

          {/* Geographic Coordinates & Identity */}
          <div className="space-y-3">
            <div className="text-white uppercase tracking-widest font-semibold">// LOCATION & TIME</div>
            <div className="space-y-2 text-muted">
              <div className="flex items-center gap-1.5 text-white">
                <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Hyderabad, India</span>
              </div>
              <div>17.3850° N, 78.4867° E</div>
              <div>Standard Time: IST (UTC+5:30)</div>
              <div className="text-emerald-400 font-medium">Available Worldwide</div>
            </div>
          </div>

          {/* Direct Communication Channels */}
          <div className="space-y-3">
            <div className="text-white uppercase tracking-widest font-semibold">// CHANNELS</div>
            <ul className="space-y-2 text-muted">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-accent-cyan transition-colors text-white"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-cyan transition-colors"
                >
                  GitHub @srikanthyadav
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-cyan transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href="/llms.txt"
                  target="_blank"
                  className="text-accent-cyan hover:underline transition-colors"
                >
                  /llms.txt (AI Index)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Back to Top Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Srikanth Yadav Gorla. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-white/40">
              CRAFTED WITH PYTHONIC RIGOR & WEBGL IMMERSION
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/20 text-white transition-all flex items-center justify-center hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
