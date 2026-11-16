'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);

  const toggleSound = () => {
    if (isPlaying) {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5);
        setTimeout(() => {
          osc1Ref.current?.stop();
          osc2Ref.current?.stop();
          audioCtxRef.current?.close();
          audioCtxRef.current = null;
          setIsPlaying(false);
        }, 500);
      }
    } else {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0, ctx.currentTime);
        masterGain.gain.setTargetAtTime(0.06, ctx.currentTime, 1.5);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Warm ambient sub-drone
        const osc1 = ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(55, ctx.currentTime); // 55Hz (A1)

        // Subtle shimmering upper harmonic
        const osc2 = ctx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(110.5, ctx.currentTime); // 110Hz + detune

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, ctx.currentTime);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(masterGain);

        osc1.start();
        osc2.start();

        osc1Ref.current = osc1;
        osc2Ref.current = osc2;

        setIsPlaying(true);
      } catch (err) {
        console.warn('Web Audio playback error:', err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      aria-label={isPlaying ? 'Mute ambient soundscape' : 'Play ambient soundscape'}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-muted hover:text-primary transition-all duration-300"
      title={isPlaying ? 'Mute Soundscape' : 'Play Cinematic Ambient Sound'}
    >
      {isPlaying ? (
        <>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
          </span>
          <Volume2 className="w-3.5 h-3.5 text-accent-cyan" />
          <span className="hidden sm:inline text-[11px] text-accent-cyan tracking-wider">AUDIO ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-muted" />
          <span className="hidden sm:inline text-[11px] tracking-wider">SOUND</span>
        </>
      )}
    </button>
  );
}
