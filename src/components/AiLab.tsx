'use client';

import React, { useState } from 'react';
import ParticleMeshCanvas from './ParticleMeshCanvas';
import { Sparkles, Sliders, Database, Search, ArrowRight, Bot, Check, FileText, Cpu } from 'lucide-react';

interface RagStep {
  id: number;
  name: string;
  detail: string;
}

const RAG_STEPS: RagStep[] = [
  { id: 1, name: "1. Query Tokenization", detail: "Input query converted into semantic embedding vector." },
  { id: 2, name: "2. Vector Distance Query", detail: "Cosine similarity search against high-dimensional vector store." },
  { id: 3, name: "3. Top-k Retrieval & Rerank", detail: "Reciprocal Rank Fusion (RRF) prioritizes top 4 authoritative chunks." },
  { id: 4, name: "4. Guardrail Synthesis", detail: "System prompt injects retrieved context with strict citation constraints." },
  { id: 5, name: "5. Grounded Generation", detail: "LLM synthesizes response with page-numbered source references." },
];

const SAMPLE_QUERIES = [
  {
    query: "How does the ESOP vesting cliff calculate leap year milestones?",
    retrievedSource: "equaily_vesting_engine.py #L142-L178",
    score: "0.942 Cosine Similarity",
    output: "The vesting engine normalizes anniversary dates against ISO-8601 UTC timestamps, calculating daily accruals via (vested_days / total_period_days) * grant_pool to prevent 29th February leap year drift.",
  },
  {
    query: "What is the indexing strategy for multi-tenant GA4 data tables?",
    retrievedSource: "schema_analytics_warehouse.sql #L34-L52",
    score: "0.968 Cosine Similarity",
    output: "PostgreSQL hash-partitions telemetry by client_tenant_id, paired with a composite B-Tree index on (tenant_id, event_timestamp DESC, metric_key), delivering median read latency under 12ms.",
  },
  {
    query: "How does the Agri-distribution algorithm minimize perishable produce decay?",
    retrievedSource: "cvrptw_perishability_decay.py #L88-L115",
    score: "0.921 Cosine Similarity",
    output: "The objective function multiplies Euclidean travel duration by ambient thermal exposure coefficients, rerouting delivery vans to refrigerated regional depots whenever temperature thresholds exceed 4°C.",
  },
];

export default function AiLab() {
  // Particle Shader Controls
  const [colorScheme, setColorScheme] = useState<'cyan-violet' | 'emerald' | 'amber' | 'electric-blue'>('cyan-violet');
  const [density, setDensity] = useState<number>(1.0);
  const [speed, setSpeed] = useState<number>(1.0);

  // RAG Simulator State
  const [selectedQueryIdx, setSelectedQueryIdx] = useState<number>(0);
  const [activeStep, setActiveStep] = useState<number>(5);

  const currentSample = SAMPLE_QUERIES[selectedQueryIdx];

  return (
    <section id="ai-lab" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-surface/40 border-t border-white/10 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              <span>06 / EXPERIMENTAL RESEARCH</span>
            </div>
            <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-serif text-white">
              AI & WebGL Laboratory
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base font-mono max-w-md">
            Interactive playground demonstrating generative GPU shaders and deterministic RAG knowledge architectures.
          </p>
        </div>

        {/* Experiment 1: Interactive Particle Shader Workbench */}
        <div className="mb-20 glass-panel rounded-3xl border border-white/10 p-6 sm:p-10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-violet text-xs font-mono font-medium">
                EXPERIMENT 01: REAL-TIME GPU PARTICLE MORPHER
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mt-2">
                Simulating Mathematical Harmonics in WebGL
              </h3>
            </div>

            {/* Controls Palette */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-muted mr-1">PALETTE:</span>
              <button
                onClick={() => setColorScheme('cyan-violet')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                  colorScheme === 'cyan-violet'
                    ? 'bg-accent-cyan text-black font-semibold'
                    : 'bg-white/5 text-muted hover:text-white border border-white/10'
                }`}
              >
                Cyan & Violet
              </button>
              <button
                onClick={() => setColorScheme('emerald')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                  colorScheme === 'emerald'
                    ? 'bg-emerald-400 text-black font-semibold'
                    : 'bg-white/5 text-muted hover:text-white border border-white/10'
                }`}
              >
                Cyber Emerald
              </button>
              <button
                onClick={() => setColorScheme('amber')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                  colorScheme === 'amber'
                    ? 'bg-accent-orange text-black font-semibold'
                    : 'bg-white/5 text-muted hover:text-white border border-white/10'
                }`}
              >
                Amber Plasma
              </button>
              <button
                onClick={() => setColorScheme('electric-blue')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                  colorScheme === 'electric-blue'
                    ? 'bg-accent-blue text-white font-semibold'
                    : 'bg-white/5 text-muted hover:text-white border border-white/10'
                }`}
              >
                Electric Blue
              </button>
            </div>
          </div>

          {/* Interactive Canvas Stage */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl bg-black border border-white/10 overflow-hidden">
            <ParticleMeshCanvas
              colorScheme={colorScheme}
              interactive={true}
              densityModifier={density}
              noiseSpeedModifier={speed}
            />

            {/* Overlay Telemetry HUD */}
            <div className="absolute top-4 left-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 font-mono text-xs text-muted pointer-events-none">
              <div className="text-white font-medium mb-1">// THREE.JS SHADER STATS</div>
              <div>RENDERER: WebGL2 HIGH-DPI</div>
              <div>POINTS: ~10,800 VERTICES</div>
              <div>HARMONIC FREQ: {(speed * 1.8).toFixed(2)} Hz</div>
            </div>

            {/* Floating Speed & Density Slider HUD */}
            <div className="absolute bottom-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 font-mono text-xs space-y-3 z-10 w-64">
              <div>
                <div className="flex justify-between text-muted text-[11px] mb-1">
                  <span>WAVE SPEED</span>
                  <span className="text-accent-cyan">{speed.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2.5"
                  step="0.1"
                  value={speed}
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  className="w-full accent-accent-cyan cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-muted text-[11px] mb-1">
                  <span>PARTICLE DENSITY</span>
                  <span className="text-accent-cyan">{density.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.6"
                  max="1.4"
                  step="0.1"
                  value={density}
                  onChange={(e) => setDensity(parseFloat(e.target.value))}
                  className="w-full accent-accent-cyan cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Experiment 2: Interactive Enterprise RAG Architecture Simulator */}
        <div className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-10 relative overflow-hidden">
          <div className="mb-8 border-b border-white/10 pb-6">
            <span className="px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono font-medium">
              EXPERIMENT 02: DETERMINISTIC RAG VECTOR PIPELINE
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif text-white mt-2 mb-2">
              Retrieval-Augmented Generation Architecture
            </h3>
            <p className="text-sm text-muted font-light max-w-2xl">
              Select a technical query below to visualize how vector embeddings and hybrid reciprocal rank fusion synthesize verifiable responses without LLM hallucination.
            </p>
          </div>

          {/* Sample Query Selectors */}
          <div className="flex flex-wrap gap-2 mb-8">
            {SAMPLE_QUERIES.map((q, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedQueryIdx(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono text-left transition-all max-w-sm ${
                  selectedQueryIdx === idx
                    ? 'bg-white text-black font-semibold shadow-lg'
                    : 'bg-black/50 text-muted hover:text-white border border-white/10'
                }`}
              >
                &ldquo;{q.query}&rdquo;
              </button>
            ))}
          </div>

          {/* 5-Stage Pipeline Visualizer */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8 font-mono text-xs">
            {RAG_STEPS.map((step) => {
              const isCurrent = step.id <= activeStep;
              return (
                <div
                  key={step.id}
                  className={`p-3.5 rounded-xl border transition-all ${
                    isCurrent
                      ? 'bg-white/10 border-accent-cyan text-white shadow-[0_0_15px_rgba(77,225,255,0.15)]'
                      : 'bg-black/40 border-white/5 text-muted'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-accent-cyan text-[11px]">{step.name}</span>
                    <Check className="w-3.5 h-3.5 text-accent-cyan" />
                  </div>
                  <p className="text-[10px] text-muted leading-tight">{step.detail}</p>
                </div>
              );
            })}
          </div>

          {/* Interactive Output Terminal */}
          <div className="rounded-2xl bg-[#080808] border border-white/10 p-6 font-mono text-xs sm:text-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4 text-xs">
              <div className="flex items-center gap-2 text-accent-cyan">
                <FileText className="w-4 h-4" />
                <span>GROUNDED SOURCE: {currentSample.retrievedSource}</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px]">
                {currentSample.score}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-muted text-xs">// SYNTHESIZED VERIFIED RESPONSE:</div>
              <p className="text-primary/95 text-sm sm:text-base leading-relaxed font-light font-sans bg-white/5 p-4 rounded-xl border border-white/5">
                {currentSample.output}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
