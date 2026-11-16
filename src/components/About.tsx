'use client';

import React from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Terminal, ShieldCheck, Database, Sparkles, MapPin, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-surface/50 border-t border-white/10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              <span>02 / BACKGROUND & PHILOSOPHY</span>
            </div>
            <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-serif text-white">
              Behind the Terminal
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base font-mono max-w-md">
            Bridging rigorous mathematical thinking with modern, production-hardened software engineering.
          </p>
        </div>

        {/* 2-Column Editorial Grid: Outdoor Photograph + Biography & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Column 1: Outdoor Photograph with Editorial Treatment */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl group">
              <Image
                src="/images/srikanth-about-outdoor.jpg"
                alt="Srikanth Yadav Gorla - Outdoor Editorial Portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center filter grayscale contrast-105 brightness-95 group-hover:scale-105 group-hover:filter-none transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Editorial Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono">
                <div className="flex items-center justify-between text-muted mb-1">
                  <span className="text-white font-medium">SRIKANTH YADAV GORLA</span>
                  <span className="text-accent-cyan flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> HYDERABAD
                  </span>
                </div>
                <div className="text-[11px] text-white/70">
                  Computer Science Engineer • Backend & SaaS Specialist
                </div>
              </div>
            </div>

            {/* Academic Credentials Callout */}
            <div className="mt-4 p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-accent-orange" />
                <div>
                  <div className="text-xs font-semibold text-white">Malla Reddy Inst. of Tech & Science</div>
                  <div className="text-[11px] font-mono text-muted">B.Tech in Computer Science & Engineering</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono font-bold text-accent-cyan">7.24 CGPA</div>
                <div className="text-[10px] font-mono text-muted">GRADUATED</div>
              </div>
            </div>
          </div>

          {/* Column 2: Narrative & Editorial Statements */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-primary/90 text-base sm:text-lg leading-relaxed font-light">
              <p className="text-xl sm:text-2xl text-white font-serif italic">
                &ldquo;Clean code is not simply an aesthetic preference; it is an architectural contract ensuring that critical systems remain predictable under high concurrency.&rdquo;
              </p>

              <p>
                I am a Python-focused Software Developer based in Hyderabad, India. My journey in technology centers on architecting resilient backend engines, low-latency RESTful APIs, multi-tenant databases, and modern full-stack web platforms.
              </p>

              <p>
                During my professional internship at <span className="text-white font-medium border-b border-accent-cyan/40">Ealkay Consulting Pvt. Ltd.</span> (Feb 2026 – Oct 2026), I was entrusted with engineering production backend microservices for complex enterprise applications, including an automated ESOP Management SaaS and a comprehensive digital analytics aggregation platform.
              </p>

              <p>
                Whether designing high-speed Redis caching layers, tuning complex PostgreSQL queries with EXPLAIN ANALYZE, or orchestrating Retrieval-Augmented Generation (RAG) vector pipelines with LangChain and FAISS, I approach engineering with a focus on mathematical clarity, speed, and real-world reliability.
              </p>
            </div>

            {/* Core Architectural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="p-4 rounded-xl glass-panel border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue mb-3">
                  <Terminal className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Backend Precision</h4>
                <p className="text-xs font-mono text-muted">
                  Strict schema contracts with FastAPI & Pydantic v2, guaranteeing zero runtime validation failures.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center text-accent-violet mb-3">
                  <Database className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Data Optimization</h4>
                <p className="text-xs font-mono text-muted">
                  PostgreSQL multi-tenant partitioning, indexing strategies, and sub-millisecond Redis caches.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">AI Integration</h4>
                <p className="text-xs font-mono text-muted">
                  Contextual RAG systems, vector embeddings, and LangChain orchestration with verifiable citations.
                </p>
              </div>
            </div>

            {/* Quantitative Impact Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 font-mono text-center">
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-bold text-accent-cyan">9+</div>
                <div className="text-[11px] text-muted uppercase mt-1">Projects Built</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-bold text-accent-orange">&lt;15ms</div>
                <div className="text-[11px] text-muted uppercase mt-1">API Latency</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-bold text-accent-violet">100k+</div>
                <div className="text-[11px] text-muted uppercase mt-1">Rows Streamed</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">99.9%</div>
                <div className="text-[11px] text-muted uppercase mt-1">Test Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
