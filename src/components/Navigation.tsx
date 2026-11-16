'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import AudioPlayer from './AudioPlayer';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'AI Lab', href: '#ai-lab' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

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
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 sm:px-8 py-4 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="w-full max-w-7xl flex items-center justify-between">
          {/* Brand Identity: Editorial Serif */}
          <Link
            href="#hero"
            className="group flex items-center gap-2.5 text-primary hover:text-accent-cyan transition-colors"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-tight font-medium text-white group-hover:text-accent-cyan transition-colors">
              Srikanth Yadav
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange opacity-80 group-hover:scale-125 transition-transform" />
          </Link>

          {/* Floating Glass Pill Navigation (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 px-4 py-2 rounded-full glass-panel border border-white/10 shadow-2xl shadow-black/60"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 relative ${
                    isActive
                      ? 'text-white bg-white/10 font-medium'
                      : 'text-muted hover:text-primary hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-accent-cyan rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Sound + Resume CTA + Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <AudioPlayer />

            {/* Resume Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 hover:bg-accent-cyan/20 text-accent-cyan text-xs font-mono tracking-wider transition-all duration-300 hover:border-accent-cyan"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </a>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black hover:bg-primary/90 text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="lg:hidden p-2 rounded-full border border-white/10 bg-white/5 text-primary hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <div className="text-xs font-mono uppercase text-accent-cyan tracking-widest border-b border-white/10 pb-2">
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
          <div className="flex items-center justify-between text-xs font-mono text-muted">
            <span>LOCATION: HYDERABAD, INDIA</span>
            <span className="text-accent-cyan font-mono">IST (UTC+5:30)</span>
          </div>
          <a
            href="mailto:srikanthyadav.gorla@gmail.com"
            className="text-sm font-mono text-white hover:text-accent-cyan transition-colors"
          >
            srikanthyadav.gorla@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
