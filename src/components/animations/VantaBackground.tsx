'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface VantaBackgroundProps {
  effect?: 'net' | 'waves' | 'dots';
  color?: number | string;
  backgroundColor?: number | string;
  className?: string;
  children?: React.ReactNode;
}

export default function VantaBackground({
  effect = 'net',
  color = 0x4de1ff,
  backgroundColor = 0x050505,
  className = '',
  children,
}: VantaBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaEffectRef = useRef<{ destroy: () => void } | null>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Only execute on client
    if (typeof window === 'undefined' || !containerRef.current) return;

    let isCancelled = false;

    const initVanta = async () => {
      try {
        if (effect === 'net') {
          const NET = (await import('vanta/dist/vanta.net.min')).default;
          if (isCancelled || !containerRef.current) return;

          vantaEffectRef.current = NET({
            el: containerRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: color,
            backgroundColor: backgroundColor,
            points: 10.0,
            maxDistance: 22.0,
            spacing: 16.0,
            showDots: true,
          });
        } else if (effect === 'waves') {
          const WAVES = (await import('vanta/dist/vanta.waves.min')).default;
          if (isCancelled || !containerRef.current) return;

          vantaEffectRef.current = WAVES({
            el: containerRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: color,
            shininess: 35.0,
            waveHeight: 15.0,
            waveSpeed: 0.75,
            zoom: 0.85,
          });
        } else if (effect === 'dots') {
          const DOTS = (await import('vanta/dist/vanta.dots.min')).default;
          if (isCancelled || !containerRef.current) return;

          vantaEffectRef.current = DOTS({
            el: containerRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: color,
            backgroundColor: backgroundColor,
            size: 3.0,
            spacing: 25.0,
          });
        }
      } catch (err) {
        console.warn('Vanta initialization warning:', err);
        setIsSupported(false);
      }
    };

    initVanta();

    return () => {
      isCancelled = true;
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, [effect, color, backgroundColor]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
