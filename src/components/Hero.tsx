'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Cpu, Database } from 'lucide-react';
import ParticlePortraitCanvas, { ParticlePortraitHandle } from './ParticlePortraitCanvas';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<ParticlePortraitHandle>(null);

  // GSAP ScrollTrigger: Fluid scroll-driven particle dispersion as hero scrolls (Matching Video 1)
  useGSAP(
    () => {
      if (!heroContainerRef.current) return;

      ScrollTrigger.create({
        trigger: heroContainerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.4,
        onUpdate: (self) => {
          // Direct WebGL uniform update for smooth 60fps upward particle dispersion
          portraitRef.current?.setProgress(self.progress);
        },
      });
    },
    { scope: heroContainerRef }
  );

  return (
    <section
      id="hero"
      ref={heroContainerRef}
      className="relative w-full min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-6 px-4 sm:px-8 overflow-hidden bg-background"
    >
      {/* Layer 1: Three.js Halftone Particle Portrait Canvas (Full-bleed, centered) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-6xl h-full">
          <ParticlePortraitCanvas
            ref={portraitRef}
            imageSrc="/images/srikanth-hero-formal.jpg"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Delicate warm ambient key-light glow behind hair silhouette (Matching Video 1) */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_62%_32%,rgba(255,145,55,0.12)_0%,transparent_48%)] pointer-events-none" />

      {/* Subtle radial ambient vignette for editorial lighting */}
      <div className="absolute inset-0 z-[2] bg-gradient-radial from-transparent via-background/25 to-background/90 pointer-events-none" />

      {/* Layer 2: Top Technical Metadata Bar (Subtle, uncluttered, matching Video 1) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between text-[11px] sm:text-xs font-mono select-none">
        <div className="flex items-center gap-2 text-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
          <span className="tracking-wider uppercase">
            ENGINEER. BACKEND DEVELOPER. BUILDER.
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-white/40 tracking-wider uppercase">
          <span>BASED IN HYDERABAD</span>
          <span className="text-white/20">·</span>
          <span>THINKING BEYOND</span>
        </div>
      </div>

      {/* Layer 3: Central Hero Typography Positioned Across Lower Chest / Neck */}
      <div className="relative z-20 w-full max-w-6xl mx-auto my-auto py-4 flex flex-col items-center justify-center text-center pointer-events-auto">
        {/* Eyebrow Annotation sitting directly below chin / across collar */}
        <div className="mb-2 flex items-center gap-2 text-[11px] sm:text-xs font-mono tracking-[0.28em] text-[#A0A0A8] uppercase select-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          <span>A HUMAN PERSPECTIVE ON COMPUTATIONAL SYSTEMS</span>
        </div>

        {/* Large Editorial Serif Name (Exact Instrument Serif Styling & Tight Tracking) */}
        <h1 className="editorial-title text-7xl sm:text-9xl md:text-[10rem] lg:text-[11.5rem] font-serif text-white tracking-[-0.05em] leading-[0.92] mb-3 select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]">
          Srikanth <em>Yadav</em>
        </h1>

        {/* Description directly below the name */}
        <p className="text-sm sm:text-base md:text-lg text-[#B5B5BC] font-light max-w-xl mx-auto leading-relaxed mb-6 select-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          I build high-scale backend architectures, distributed cloud systems, and intelligent digital products.
        </p>

        {/* Call to Actions (CTAs - Exact Reference Sentence Case Styling) */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#work"
            className="group px-6 py-2.5 sm:py-3 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-300 font-sans text-xs sm:text-sm font-medium flex items-center gap-2 backdrop-blur-sm"
          >
            <span>Explore my work</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="#contact"
            className="group px-5 py-2.5 sm:py-3 rounded-full hover:bg-white/10 text-[#C0C0C8] hover:text-white transition-all duration-300 font-sans text-xs sm:text-sm font-medium flex items-center gap-1.5"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Layer 4: Bottom Technical Indicators & Storytelling Ribbon */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-2 flex items-center justify-between text-[11px] font-mono text-white/40 select-none">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5 text-white/50">
            <Cpu className="w-3 h-3 text-accent-cyan" />
            <span>FASTAPI & DJANGO SPECIALIST</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-white/40">
            <Database className="w-3 h-3 text-accent-violet" />
            <span>POSTGRESQL & REDIS</span>
          </div>
        </div>

        <div className="hidden sm:block text-white/30 tracking-widest uppercase text-[10px]">
          BUILDING & OPTIMIZING SYSTEMS
        </div>

        <div className="flex items-center gap-3">
          <span className="tracking-widest uppercase text-white/40 text-[10px]">
            SCROLL TO DISCOVER
          </span>
          <div className="w-3.5 h-6 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-1.5 rounded-full bg-accent-cyan animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
