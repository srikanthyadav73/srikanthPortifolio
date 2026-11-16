'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const { education } = PERSONAL_INFO;

  return (
    <section id="education" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-background border-t border-white/10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              <span>07 / ACADEMIC FOUNDATIONS</span>
            </div>
            <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-serif text-white">
              Education & Research
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base font-mono max-w-md">
            Rigorous undergraduate education in Computer Science and Engineering principles.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-primary uppercase tracking-wider">
                  BACHELOR OF TECHNOLOGY (B.TECH)
                </span>
                <h3 className="editorial-title text-2xl sm:text-4xl font-serif text-white mt-2">
                  Computer Science and Engineering
                </h3>
                <div className="text-sm sm:text-base font-mono text-muted mt-1 flex flex-wrap items-center gap-3">
                  <span className="text-white font-medium">{education.institution}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-accent-cyan">
                    <MapPin className="w-3.5 h-3.5" /> {education.location}
                  </span>
                </div>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="flex items-center gap-4 bg-black/60 border border-white/10 rounded-2xl p-5 font-mono">
              <Award className="w-8 h-8 text-accent-orange" />
              <div>
                <div className="text-xs text-muted uppercase">Cumulative GPA</div>
                <div className="text-3xl font-bold text-accent-cyan">7.24 <span className="text-sm text-muted">/ 10</span></div>
              </div>
            </div>
          </div>

          {/* Academic Highlights & Key Coursework */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-muted flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent-cyan" />
                <span>ACADEMIC ACHIEVEMENTS & RESEARCH</span>
              </h4>
              <div className="space-y-3">
                {education.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-primary/80 font-light leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-muted flex items-center gap-2">
                <Award className="w-4 h-4 text-accent-violet" />
                <span>CORE UNDERGRADUATE MODULES</span>
              </h4>
              <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
                {[
                  'Data Structures & Algorithms',
                  'Database Management Systems',
                  'Operating Systems Architecture',
                  'Distributed Computing Systems',
                  'Computer Networks & Protocols',
                  'Software Engineering Practices',
                  'Object-Oriented Programming',
                  'Machine Learning & Analytics',
                ].map((course) => (
                  <div
                    key={course}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-muted hover:text-white transition-colors"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
