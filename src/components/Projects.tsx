'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PROJECTS, Project } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Github, ExternalLink, Cpu, Layers, Sparkles } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'featured' | 'all'>('featured');

  const displayedProjects = filter === 'featured' ? PROJECTS.filter((p) => p.featured) : PROJECTS;

  return (
    <section id="work" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-background border-t border-white/10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              <span>05 / SELECTED PORTFOLIO</span>
            </div>
            <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-serif text-white">
              Featured Systems & Applications
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10 self-start md:self-auto font-mono text-xs">
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === 'featured'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-muted hover:text-white'
              }`}
            >
              FEATURED ({PROJECTS.filter((p) => p.featured).length})
            </button>
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-muted hover:text-white'
              }`}
            >
              ALL SYSTEMS ({PROJECTS.length})
            </button>
          </div>
        </div>

        {/* Editorial Project Showcase: Alternating Asymmetric Cards */}
        <div className="space-y-16 sm:space-y-24">
          {displayedProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl glass-panel border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden p-6 sm:p-10 lg:p-12"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Visual Composition (5 Cols) */}
                  <div className={`lg:col-span-5 relative ${isEven ? '' : 'lg:col-start-8'}`}>
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-black group-hover:border-accent-cyan/50 transition-colors shadow-2xl"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-center filter grayscale contrast-110 group-hover:scale-105 group-hover:filter-none transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      {/* Interactive Inspect Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white flex items-center gap-1.5 opacity-90 group-hover:bg-accent-cyan group-hover:text-black transition-all">
                        <span>INSPECT</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Editorial Details & Content (7 Cols) */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? '' : 'lg:col-start-1'}`}>
                    {/* Category & Year */}
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="text-accent-cyan uppercase tracking-widest">
                        {project.category}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="text-muted">{project.year}</span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="cursor-pointer editorial-title text-3xl sm:text-4xl lg:text-5xl font-serif text-white hover:text-accent-cyan transition-colors"
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted font-mono mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-primary/80 font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metric Highlights Pill Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="p-3 rounded-xl bg-black/40 border border-white/5">
                          <div className="text-[10px] text-muted uppercase">{m.label}</div>
                          <div className="text-sm font-bold text-accent-cyan mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 text-[11px] font-mono text-muted/60">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 hover:bg-accent-cyan transition-all"
                      >
                        <span>CASE STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-muted hover:text-white transition-colors"
                          title="View Source on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
