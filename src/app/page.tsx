import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import AiLab from '@/components/AiLab';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background text-primary selection:bg-accent-orange selection:text-background">
        {/* Floating Navigation */}
        <Navigation />

        {/* Main Content Flow */}
        <main className="relative z-10 flex flex-col w-full">
          {/* SECTION 01: HERO */}
          <Hero />

          {/* SECTION 02: ABOUT */}
          <About />

          {/* SECTION 03: PROFESSIONAL EXPERIENCE */}
          <Experience />

          {/* SECTION 04: TECHNICAL SKILLS */}
          <Skills />

          {/* SECTION 05: SELECTED PROJECTS */}
          <Projects />

          {/* SECTION 06: AI EXPERIMENTAL LABORATORY */}
          <AiLab />

          {/* SECTION 07: EDUCATION */}
          <Education />

          {/* SECTION 08: CONTACT */}
          <Contact />
        </main>

        {/* SECTION 09: FOOTER */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
