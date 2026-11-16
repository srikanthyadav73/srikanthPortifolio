'use client';

import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react';
import * as THREE from 'three';

export interface ParticlePortraitHandle {
  setProgress: (progress: number) => void;
}

interface ParticlePortraitProps {
  imageSrc?: string;
  className?: string;
}

const ParticlePortraitCanvas = forwardRef<ParticlePortraitHandle, ParticlePortraitProps>(
  ({ imageSrc = '/images/srikanth-hero-formal.jpg', className = '' }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<number>(0);
    const materialRef = useRef<THREE.ShaderMaterial | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useImperativeHandle(ref, () => ({
      setProgress: (progress: number) => {
        progressRef.current = progress;
        if (materialRef.current) {
          materialRef.current.uniforms.uProgress.value = progress;
        }
      },
    }));

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // 1. Scene, Camera, Renderer
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 5.0);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });

      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2.0);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // Subtle mouse tracking for resting parallax
      const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
      const onMouseMove = (e: MouseEvent) => {
        if (isMobile) return;
        const rect = container.getBoundingClientRect();
        mouse.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      };
      window.addEventListener('mousemove', onMouseMove, { passive: true });

      // 2. Load and Sample Portrait Image
      let geometry: THREE.BufferGeometry | null = null;
      let material: THREE.ShaderMaterial | null = null;
      let pointsMesh: THREE.Points | null = null;

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = imageSrc;

      img.onload = () => {
        const offCanvas = document.createElement('canvas');
        // High density sampling for crisp, photographic halftone screen
        const sampleW = isMobile ? 180 : 320;
        const aspect = img.naturalHeight / img.naturalWidth;
        const sampleH = Math.round(sampleW * aspect);

        offCanvas.width = sampleW;
        offCanvas.height = sampleH;
        const ctx = offCanvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        ctx.drawImage(img, 0, 0, sampleW, sampleH);
        const imgData = ctx.getImageData(0, 0, sampleW, sampleH).data;

        const positions: number[] = [];
        const randoms: number[] = [];
        const colors: number[] = [];
        const sizes: number[] = [];
        const alphas: number[] = [];

        // World scale: broad shoulders & natural proportions
        const scaleX = isMobile ? 2.9 : 3.65;
        const scaleY = scaleX * aspect;

        for (let y = 0; y < sampleH; y++) {
          for (let x = 0; x < sampleW; x++) {
            const idx = (y * sampleW + x) * 4;
            const r = imgData[idx] / 255;
            const g = imgData[idx + 1] / 255;
            const b = imgData[idx + 2] / 255;
            const a = imgData[idx + 3] / 255;

            // Normalized coordinates (0.0 to 1.0)
            const normX = x / sampleW;
            const normY = y / sampleH;

            // Elliptical radial vignette mask centered on head/chest
            // Completely eliminates rectangular borders / studio backdrop noise
            const dx = (normX - 0.50) / 0.44;
            const dy = (normY - 0.46) / 0.50;
            const distFromCenter = Math.sqrt(dx * dx + dy * dy);

            if (distFromCenter > 1.0) continue;

            // Smooth cosine edge falloff
            let edgeFalloff = 1.0;
            if (distFromCenter > 0.70) {
              const t = (distFromCenter - 0.70) / (1.0 - 0.70);
              edgeFalloff = 0.5 * (1.0 + Math.cos(t * Math.PI));
            }

            // Raw luminance
            const rawLum = r * 0.299 + g * 0.587 + b * 0.114;

            // Discard deep studio background
            if (a < 0.15 || rawLum < 0.045) continue;

            // Centered world coordinates
            const posX = (normX - 0.5) * scaleX;
            const posY = -(normY - 0.5) * scaleY;
            const posZ = (rawLum - 0.5) * 0.25;

            // High-contrast tone mapping: S-curve for crisp editorial halftone
            let brightLum: number;
            if (rawLum > 0.40) {
              brightLum = Math.min(1.0, Math.pow(rawLum, 0.70) * 1.55);
            } else if (rawLum > 0.18) {
              brightLum = Math.pow(rawLum, 0.85) * 1.25;
            } else {
              brightLum = rawLum * 1.1;
            }

            // Pure monochrome high-contrast tone mapping (natural, crisp, no blotches)
            const colR = brightLum * edgeFalloff;
            const colG = brightLum * 0.98 * edgeFalloff;
            const colB = brightLum * 0.96 * edgeFalloff;

            // Halftone dot sizing: shrinks smoothly to zero at outer elliptical perimeter
            const dotSize = Math.max(0.013, Math.pow(brightLum, 0.65) * 0.046) * edgeFalloff;

            positions.push(posX, posY, posZ);
            colors.push(colR, colG, colB);
            sizes.push(dotSize);

            // 3D dispersion vectors for scroll animation
            const angle = Math.random() * Math.PI * 2;
            const radius = 0.3 + Math.random() * 1.6;
            const rX = Math.cos(angle) * radius;
            const rY = 1.0 + Math.random() * 2.6; // Upward drift
            const rZ = (Math.random() - 0.5) * 2.2;
            randoms.push(rX, rY, rZ);
          }
        }

        geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('aRandom', new THREE.Float32BufferAttribute(randoms, 3));
        geometry.setAttribute('aColor', new THREE.Float32BufferAttribute(colors, 3));
        geometry.setAttribute('aSize', new THREE.Float32BufferAttribute(sizes, 1));

        // Custom GLSL Halftone Shader Material
        material = new THREE.ShaderMaterial({
          uniforms: {
            uProgress: { value: progressRef.current },
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0, 0) },
            uPixelRatio: { value: dpr },
          },
          vertexShader: `
            uniform float uProgress;
            uniform float uTime;
            uniform vec2 uMouse;
            uniform float uPixelRatio;

            attribute vec3 aRandom;
            attribute vec3 aColor;
            attribute float aSize;

            varying vec3 vColor;
            varying float vAlpha;

            void main() {
              vColor = aColor;

              vec3 pos = position;

              // 1. Interactive parallax tilt at rest
              float mouseFactor = 1.0 - smoothstep(0.0, 0.35, uProgress);
              pos.x += uMouse.x * 0.12 * mouseFactor;
              pos.y += uMouse.y * 0.12 * mouseFactor;

              // 2. Upward elevation as scroll begins
              pos.y += uProgress * 3.4;

              // 3. 3D particle dispersion (Stage 3)
              float disperse = pow(smoothstep(0.06, 0.95, uProgress), 1.5);
              pos.x += aRandom.x * disperse * 2.2;
              pos.y += aRandom.y * disperse * 3.0;
              pos.z += aRandom.z * disperse * 2.4;

              // 4. Subtle turbulence curl wave
              if (uProgress > 0.08) {
                pos.x += sin(pos.y * 3.5 + uTime * 2.2) * 0.09 * disperse;
                pos.z += cos(pos.x * 3.5 + uTime * 2.2) * 0.09 * disperse;
              }

              vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
              gl_Position = projectionMatrix * mvPosition;

              // Crisp halftone dot screen sizing
              float sizeMultiplier = 1.0 + disperse * 0.35;
              gl_PointSize = max(1.5, aSize * sizeMultiplier * (420.0 / -mvPosition.z) * uPixelRatio);

              // Smooth fade out towards end of scroll
              float scrollFade = 1.0 - smoothstep(0.40, 0.92, uProgress);
              vAlpha = scrollFade;
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
            varying float vAlpha;

            void main() {
              // Sharp circular halftone dot with anti-aliasing
              vec2 coord = gl_PointCoord - vec2(0.5);
              float dist = length(coord);
              if (dist > 0.5) discard;

              float edge = smoothstep(0.5, 0.38, dist);
              gl_FragColor = vec4(vColor, vAlpha * edge);
            }
          `,
          transparent: true,
          depthWrite: false,
          blending: THREE.NormalBlending,
        });

        materialRef.current = material;
        pointsMesh = new THREE.Points(geometry, material);
        // Vertical placement: generous headroom above head, centering face & collar perfectly
        pointsMesh.position.y = isMobile ? 0.12 : 0.14;
        scene.add(pointsMesh);
        setIsLoaded(true);
      };

      // 3. Animation Loop
      let animationFrameId: number;
      const clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        if (materialRef.current) {
          materialRef.current.uniforms.uTime.value = elapsedTime;
          materialRef.current.uniforms.uMouse.value.set(mouse.x, mouse.y);
          materialRef.current.uniforms.uProgress.value = prefersReducedMotion ? 0 : progressRef.current;
        }

        renderer.render(scene, camera);
      };

      animate();

      // 4. Resize Handling
      const handleResize = () => {
        if (!container) return;
        const newW = container.clientWidth;
        const newH = container.clientHeight;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
        if (materialRef.current) {
          materialRef.current.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio || 1, 2.0);
        }
      };

      window.addEventListener('resize', handleResize);

      // 5. Cleanup
      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', handleResize);

        if (geometry) geometry.dispose();
        if (material) material.dispose();
        renderer.dispose();

        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    }, [imageSrc]);

    return (
      <div
        ref={containerRef}
        className={`w-full h-full pointer-events-none ${className}`}
      />
    );
  }
);

ParticlePortraitCanvas.displayName = 'ParticlePortraitCanvas';

export default ParticlePortraitCanvas;
