'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ParticleMeshProps {
  colorScheme?: 'cyan-violet' | 'emerald' | 'amber' | 'electric-blue';
  interactive?: boolean;
  densityModifier?: number;
  noiseSpeedModifier?: number;
  className?: string;
}

export default function ParticleMeshCanvas({
  colorScheme = 'cyan-violet',
  interactive = true,
  densityModifier = 1.0,
  noiseSpeedModifier = 1.0,
  className = '',
}: ParticleMeshProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setWebGLSupported(false);
      return;
    }

    // Scene, Camera, Renderer
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });

    const isMobile = window.innerWidth < 768;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2.0);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create Generative Particle Grid Mesh
    // Use an organized UV sphere or deformed parametric grid that curls into an organic volumetric shape
    const resolutionU = Math.floor((isMobile ? 70 : 120) * densityModifier);
    const resolutionV = Math.floor((isMobile ? 50 : 90) * densityModifier);
    const particleCount = resolutionU * resolutionV;

    const positions = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const uvs = new Float32Array(particleCount * 2);

    // Colors mapping
    let colorA = new THREE.Color('#3295FF'); // Electric Blue
    let colorB = new THREE.Color('#4DE1FF'); // Cyan
    let colorC = new THREE.Color('#9D70FF'); // Violet

    if (colorScheme === 'emerald') {
      colorA = new THREE.Color('#00F0A0');
      colorB = new THREE.Color('#10B981');
      colorC = new THREE.Color('#064E3B');
    } else if (colorScheme === 'amber') {
      colorA = new THREE.Color('#FF784F');
      colorB = new THREE.Color('#F59E0B');
      colorC = new THREE.Color('#D97706');
    } else if (colorScheme === 'electric-blue') {
      colorA = new THREE.Color('#3295FF');
      colorB = new THREE.Color('#0066FF');
      colorC = new THREE.Color('#4DE1FF');
    }

    let idx = 0;
    for (let i = 0; i < resolutionU; i++) {
      const u = (i / (resolutionU - 1)) * Math.PI * 2;
      for (let j = 0; j < resolutionV; j++) {
        const v = (j / (resolutionV - 1)) * Math.PI - Math.PI / 2;

        // Base organic folded torus/sphere formula
        const radius = 2.4 + 0.3 * Math.sin(u * 3) * Math.cos(v * 2);
        const x = radius * Math.cos(v) * Math.cos(u);
        const y = radius * Math.sin(v) + 0.2 * Math.sin(u * 2);
        const z = radius * Math.cos(v) * Math.sin(u) * 0.75;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        initialPositions[idx * 3] = x;
        initialPositions[idx * 3 + 1] = y;
        initialPositions[idx * 3 + 2] = z;

        uvs[idx * 2] = i / resolutionU;
        uvs[idx * 2 + 1] = j / resolutionV;

        // Interpolate colors between Cyan, Electric Blue, and Violet
        const mixRatio = (Math.sin(u * 2.0) + Math.cos(v * 3.0) + 2.0) / 4.0;
        const vertexColor = colorA.clone().lerp(colorB, mixRatio).lerp(colorC, Math.sin(v) * 0.5 + 0.5);

        colors[idx * 3] = vertexColor.r;
        colors[idx * 3 + 1] = vertexColor.g;
        colors[idx * 3 + 2] = vertexColor.b;

        idx++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

    // Custom Particle Texture with soft feathered circular falloff
    const createParticleTexture = () => {
      const texCanvas = document.createElement('canvas');
      texCanvas.width = 64;
      texCanvas.height = 64;
      const ctx = texCanvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.25, 'rgba(255, 255, 255, 0.85)');
        gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.CanvasTexture(texCanvas);
      texture.generateMipmaps = true;
      return texture;
    };

    const particleTexture = createParticleTexture();

    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.055 : 0.048,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Mouse Interaction Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onPointerMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x;
      targetMouseY = y;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });

    // Scroll-linked transformation
    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime() * noiseSpeedModifier;

      // Smooth pointer interpolation (lerp)
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Base rotation + mouse tilt + scroll
      particleSystem.rotation.y = elapsedTime * 0.12 + mouseX * 0.4 + scrollY * 0.0006;
      particleSystem.rotation.x = 0.2 + mouseY * 0.3 + Math.sin(elapsedTime * 0.2) * 0.1;
      particleSystem.rotation.z = Math.cos(elapsedTime * 0.15) * 0.08;

      // Dynamic vertex deformation simulating organic wave harmonics
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let k = 0; k < particleCount; k++) {
        const i3 = k * 3;
        const initX = initialPositions[i3];
        const initY = initialPositions[i3 + 1];
        const initZ = initialPositions[i3 + 2];

        // Harmonic sinusoidal wave deformation
        const wave1 = Math.sin(initX * 1.5 + elapsedTime * 1.8) * 0.18;
        const wave2 = Math.cos(initY * 2.0 + elapsedTime * 1.4) * 0.15;
        const wave3 = Math.sin((initX + initZ) * 1.2 + elapsedTime * 1.2) * 0.12;

        // Pointer distance repulsion / magnet effect
        let mouseDisplacement = 0;
        if (interactive) {
          const dx = initX - mouseX * 2.5;
          const dy = initY - mouseY * 2.5;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 2.0) {
            mouseDisplacement = (2.0 - dist) * 0.25;
          }
        }

        const totalDeformation = 1.0 + wave1 + wave2 + wave3 + mouseDisplacement;
        posArray[i3] = initX * totalDeformation;
        posArray[i3 + 1] = initY * totalDeformation;
        posArray[i3 + 2] = initZ * totalDeformation;
      }

      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);

      // Dispose Three.js objects
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [colorScheme, interactive, densityModifier, noiseSpeedModifier]);

  if (!webGLSupported) {
    return (
      <div
        className={`w-full h-full bg-cover bg-center opacity-40 mix-blend-screen ${className}`}
        style={{ backgroundImage: `url('/images/particle-mesh-orb.jpg')` }}
      />
    );
  }

  return <div ref={containerRef} className={`w-full h-full pointer-events-none ${className}`} />;
}
