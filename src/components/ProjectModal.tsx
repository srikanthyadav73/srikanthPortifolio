'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/data/portfolioData';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart3, Layers, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-surface border border-white/15 shadow-2xl z-10 flex flex-col">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 px-6 sm:px-8 py-4 bg-surface/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono font-medium">
              {project.category}
            </span>
            <span className="text-xs font-mono text-muted">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Project Details"
            className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-8">
          {/* Title & Subtitle */}
          <div>
            <h3 className="editorial-title text-3xl sm:text-5xl font-serif text-white mb-2">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-muted font-mono">
              {project.subtitle}
            </p>
          </div>

          {/* Project Image Banner */}
          <div className="relative aspect-[16/8] rounded-2xl overflow-hidden border border-white/10 bg-black">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Metric Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-4 rounded-xl glass-panel border border-white/10 text-center font-mono">
                <div className="text-xs text-muted uppercase tracking-wider mb-1">
                  {metric.label}
                </div>
                <div className="text-2xl font-bold text-accent-cyan">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent-violet" />
              <span>SYSTEM ARCHITECTURE & OVERVIEW</span>
            </h4>
            <p className="text-sm sm:text-base text-primary/90 font-light leading-relaxed">
              {project.longDescription}
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80">
              <strong className="text-accent-cyan">Architecture Pattern: </strong>
              {project.architecture}
            </div>
          </div>

          {/* Verified Engineering Contributions */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted flex items-center gap-2">
              <Cpu className="w-4 h-4 text-accent-orange" />
              <span>INDIVIDUAL ENGINEERING CONTRIBUTIONS</span>
            </h4>
            <div className="space-y-2.5">
              {project.contributions.map((contribution, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-primary/80 font-light leading-relaxed">
                    {contribution}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted">
              // IMPLEMENTATION TECHNOLOGIES
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 hover:bg-accent-cyan transition-colors"
              >
                <span>OPEN LIVE DEMO</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider font-medium flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>INSPECT REPOSITORY</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto px-5 py-3 rounded-full border border-white/10 text-xs font-mono text-muted hover:text-white transition-colors"
            >
              CLOSE PREVIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
