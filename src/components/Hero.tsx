'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Terminal, Cpu, Database } from 'lucide-react';
import ParticleMeshCanvas from './ParticleMeshCanvas';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 overflow-hidden bg-background"
    >
      {/* Background Interactive 3D Generative Particle Mesh (Blue, Cyan, Violet) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <ParticleMeshCanvas colorScheme="cyan-violet" interactive={true} />
      </div>

      {/* Subtle radial ambient vignette */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-transparent via-background/60 to-background pointer-events-none" />

      {/* Top Technical Metadata Bar (Editorial Layout) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-accent-orange font-semibold">01 / PRESENCE</span>
          <span className="text-white/20">|</span>
          <span className="text-muted tracking-wider uppercase">
            SOFTWARE DEVELOPER. PYTHON BACKEND DEVELOPER. BUILDER.
          </span>
        </div>
        <div className="flex items-center gap-4 text-muted">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-primary font-medium tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
          </div>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="hidden md:inline tracking-wider">BASED IN HYDERABAD, INDIA</span>
        </div>
      </div>

      {/* Central Visual Composition: Srikanth's Formal Suit Portrait with Halftone & Lighting */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-8 sm:py-12 flex flex-col items-center justify-center text-center">
        {/* Portrait Container with Monochrome and Halftone Ring */}
        <div className="relative group w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 mb-8">
          {/* Subtle luminous halo */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent-cyan/20 via-accent-blue/20 to-accent-violet/20 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Masked Portrait Container */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/15 bg-surface shadow-2xl halftone-effect">
            <Image
              src="/images/srikanth-hero-formal.jpg"
              alt="Srikanth Yadav Gorla - Formal Black Suit Portrait"
              fill
              priority
              sizes="(max-width: 768px) 240px, 300px"
              className="object-cover object-top filter grayscale contrast-110 brightness-95 group-hover:scale-105 group-hover:filter-none transition-all duration-700 ease-out"
            />
            {/* Fine gradient vignette on the portrait */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
          </div>

          {/* Technical Pill Tags on Portrait */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 border border-white/20 backdrop-blur-md flex items-center gap-2 whitespace-nowrap shadow-xl">
            <Terminal className="w-3 h-3 text-accent-cyan" />
            <span className="text-[11px] font-mono tracking-widest text-primary uppercase">
              PYTHON ARCHITECT
            </span>
          </div>
        </div>

        {/* Micro Subtitle */}
        <div className="mb-3 flex items-center gap-2 text-xs sm:text-sm font-mono tracking-[0.25em] text-accent-cyan uppercase">
          <span>17.3850° N, 78.4867° E</span>
          <span className="text-white/30">•</span>
          <span>HYDERABAD, INDIA</span>
        </div>

        {/* Hero Name: Oversized Editorial Serif */}
        <h1 className="editorial-title text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-white tracking-tight mb-4 select-none">
          Srikanth Yadav
        </h1>

        {/* Supporting Tri-statement */}
        <div className="text-xs sm:text-sm md:text-base font-mono tracking-[0.3em] uppercase text-muted mb-4 max-w-2xl">
          I BUILD SOFTWARE. I EXPLORE IDEAS. I ENGINEER SOLUTIONS.
        </div>

        {/* Hero Description */}
        <p className="text-base sm:text-lg md:text-xl text-primary/80 font-light max-w-2xl mx-auto leading-relaxed mb-8">
          Building backend systems, scalable REST APIs, multi-tenant SaaS platforms, and intelligent digital experiences.
        </p>

        {/* Call to Actions (CTA) */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#work"
            className="group px-7 py-3.5 rounded-full bg-white text-black font-mono text-xs sm:text-sm uppercase tracking-widest font-semibold flex items-center gap-2 hover:bg-accent-cyan transition-all duration-300 hover:shadow-[0_0_30px_rgba(77,225,255,0.4)]"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Link>

          <Link
            href="#contact"
            className="group px-7 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs sm:text-sm uppercase tracking-widest font-medium flex items-center gap-2 transition-all duration-300 hover:border-white/40"
          >
            <span>LET&apos;S CONNECT</span>
            <ArrowUpRight className="w-4 h-4 text-accent-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Bottom Technical Indicators & Storytelling Ribbon */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
            <span>FASTAPI & DJANGO SPECIALIST</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Database className="w-3.5 h-3.5 text-accent-violet" />
            <span>POSTGRESQL & REDIS OPTIMIZED</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[11px] tracking-widest uppercase text-white/50">
            SCROLL TO COMMENCE
          </span>
          <div className="w-4 h-7 rounded-full border border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-accent-cyan animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
