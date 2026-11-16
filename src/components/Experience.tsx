'use client';

import React, { useState } from 'react';
import { EXPERIENCES } from '@/data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers, Cpu, Database } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const exp = EXPERIENCES[activeTab];

  return (
    <section id="experience" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-background border-t border-white/10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              <span>03 / CAREER MILESTONES</span>
            </div>
            <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-serif text-white">
              Professional Experience
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base font-mono max-w-md">
            Verified production engineering experience delivering scalable enterprise software and data pipelines.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="glass-panel rounded-2xl border border-white/10 p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle gradient accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet" />

          {/* Top Metadata Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono font-medium">
                  {exp.type}
                </span>
                <span className="text-xs font-mono text-muted flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-accent-orange" />
                  {exp.duration}
                </span>
                <span className="text-xs font-mono text-muted flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-accent-violet" />
                  {exp.location}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif text-white font-medium mb-1">
                {exp.role}
              </h3>
              <div className="text-base sm:text-lg text-accent-cyan font-mono">
                {exp.company}
              </div>
            </div>

            {/* Quick Metrics Badge */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 font-mono text-xs">
              <div className="border-r border-white/10 pr-4">
                <div className="text-muted text-[10px] uppercase">Latency Cut</div>
                <div className="text-lg font-bold text-accent-cyan">38%</div>
              </div>
              <div className="border-r border-white/10 pr-4">
                <div className="text-muted text-[10px] uppercase">Test Coverage</div>
                <div className="text-lg font-bold text-accent-orange">90%+</div>
              </div>
              <div>
                <div className="text-muted text-[10px] uppercase">Duration</div>
                <div className="text-lg font-bold text-white">9 Mos</div>
              </div>
            </div>
          </div>

          {/* Core Summary */}
          <div className="py-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent-cyan" />
              <span>ROLE MISSION & SCOPE</span>
            </h4>
            <p className="text-base sm:text-lg text-primary/90 font-light leading-relaxed">
              {exp.summary}
            </p>
          </div>

          {/* Key Deliverables & Architectural Contributions */}
          <div className="py-6 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-accent-violet" />
              <span>VERIFIED KEY CONTRIBUTIONS</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exp.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 transition-colors flex items-start gap-3.5"
                >
                  <div className="mt-0.5 p-1 rounded-full bg-accent-cyan/10 text-accent-cyan">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-primary/80 font-light leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div className="pt-6 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-3 flex items-center gap-2">
              <Database className="w-4 h-4 text-accent-orange" />
              <span>DEPLOYED TECHNOLOGIES</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-accent-cyan/40 text-xs font-mono text-muted hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
