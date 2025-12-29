import React, { useEffect } from 'react';
import { Hero } from './components/sections/Hero';
import { Belief } from './components/sections/Belief';
import { Process } from './components/sections/Process';
import { WorkShowcase } from './components/sections/WorkShowcase';
import { Projects } from './components/sections/Projects';
import { CreativeDirector } from './components/sections/CreativeDirector';
import { Closing } from './components/sections/Closing';
export function App() {
  // Smooth scroll setup could go here if using a library like Lenis,
  // but for now we rely on CSS scroll-behavior: smooth and native scrolling
  // combined with Framer Motion's useScroll which works with native scroll.
  return <main className="bg-nudge-black min-h-screen w-full text-nudge-text selection:bg-nudge-accent selection:text-white">
      <Hero />
      <Belief />
      <Process />
      <WorkShowcase />
      <Projects />
      <CreativeDirector />
      <Closing />
    </main>;
}