'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, FileText } from 'lucide-react';
import AudioPlayer from './AudioPlayer';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section scrollspy
      const sections = ['hero', 'about', 'experience', 'skills', 'work', 'ai-lab', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Single Unified Floating Glass Pill Navigation Bar (Matching Reference Video 1) */}
      <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex items-center justify-center px-4 pointer-events-none">
        <div
          className={`pointer-events-auto w-full max-w-4xl flex items-center justify-between px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl sm:rounded-full bg-[#121214]/80 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.65)] transition-all duration-300 ${
            isScrolled ? 'border-white/15 bg-[#0e0e10]/90 shadow-[0_16px_50px_rgba(0,0,0,0.8)]' : ''
          }`}
        >
          {/* Brand Identity: Elegant Editorial Serif */}
          <Link
            href="#hero"
            className="group flex items-center gap-2 text-white hover:text-accent-cyan transition-colors select-none"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-tight text-white font-normal group-hover:text-white/90 transition-colors">
              Srikanth Yadav
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm tracking-wide transition-all duration-200 select-none ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-[#9A9A9F] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Pill CTA + Audio Toggle + Mobile Menu */}
          <div className="flex items-center gap-3">
            <AudioPlayer />

            {/* Let's Talk CTA Pill Button (Exact Reference Styling) */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white text-white hover:text-black text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] select-none"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="md:hidden p-1.5 rounded-full border border-white/10 bg-white/5 text-primary hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <div className="text-xs font-mono uppercase text-[#A0A0A5] tracking-widest border-b border-white/10 pb-2">
            // INDEX NAVIGATION
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-3xl text-primary hover:text-accent-cyan transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-5 h-5 text-muted opacity-60" />
            </Link>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 rounded-full bg-white text-black text-center font-mono text-xs uppercase tracking-wider font-semibold"
          >
            LET&apos;S TALK ↗
          </a>
        </div>
      </div>
    </>
  );
}
