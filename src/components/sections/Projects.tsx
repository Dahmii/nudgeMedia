// import React from 'react';
import { motion } from 'framer-motion';
const projects = [{
  client: 'Hyperscalers',
  type: 'Rebrand & Strategy',
  year: '2025'
}, {
  client: 'Film Trybe',
  type: 'Design Direction',
  year: '2025'
}, {
  client: 'Cifi',
  type: 'Content Creation',
  year: '2022'
}, {
  client: 'Seventh-Day Adventist Church',
  type: 'Design Materials',
  year: '2022'
}, {
  client: 'Total Energies',
  type: 'Content Creation',
  year: '2025'
}];
export function Projects() {
  return <section className="py-32 px-6 md:px-12 bg-nudge-black">
      <div className="max-w-5xl mx-auto">
        <motion.div className="flex items-baseline justify-between mb-16 border-b border-nudge-gray/30 pb-4" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }}>
          <h2 className="text-3xl font-serif">Selected Projects</h2>
          <span className="text-nudge-muted text-sm">2021 — 2025</span>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, index) => <motion.div key={index} className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-nudge-gray/20 cursor-pointer" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-5%'
        }} transition={{
          delay: index * 0.1,
          duration: 0.5
        }} whileHover={{
          x: 10
        }}>
              <h3 className="text-2xl md:text-4xl font-serif text-nudge-muted group-hover:text-white transition-colors duration-300">
                {project.client}
              </h3>
              <div className="flex items-center gap-8 mt-2 md:mt-0">
                <span className="text-sm text-nudge-muted/60 uppercase tracking-wider group-hover:text-nudge-accent transition-colors duration-300">
                  {project.type}
                </span>
                <span className="text-sm text-nudge-muted/40 font-mono hidden md:block">
                  {project.year}
                </span>
              </div>
            </motion.div>)}
        </div>

        <div className="mt-16 text-center">
          <motion.button className="text-sm uppercase tracking-[0.2em] text-nudge-muted hover:text-white transition-colors border-b border-transparent hover:border-white pb-1" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            View Full Archive
          </motion.button>
        </div>
      </div>
    </section>;
}