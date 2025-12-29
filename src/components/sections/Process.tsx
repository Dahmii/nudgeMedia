import React from 'react';
import { motion } from 'framer-motion';
const phases = [{
  id: '01',
  title: 'Discover',
  description: 'We immerse ourselves in your world. Uncovering the raw narrative threads that define your purpose and audience.'
}, {
  id: '02',
  title: 'Create',
  description: 'Production begins. We shape the story through disciplined design, cinematography, and editorial rhythm.'
}, {
  id: '03',
  title: 'Amplify',
  description: 'The story meets the world. Strategic deployment ensures your message lands with impact and resonance.'
}];
export function Process() {
  return <section className="py-32 px-6 md:px-12 bg-nudge-dark border-y border-nudge-gray/20">
      <div className="max-w-6xl mx-auto">
        <motion.div className="mb-20" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <span className="text-nudge-accent text-sm tracking-[0.2em] uppercase">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4">
            From concept to connection.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {phases.map((phase, index) => <motion.div key={phase.id} className="relative pt-8 border-t border-nudge-gray/30" initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-10%'
        }} transition={{
          delay: index * 0.2,
          duration: 0.8,
          ease: 'easeOut'
        }}>
              <span className="absolute top-0 left-0 -translate-y-1/2 bg-nudge-dark pr-4 text-4xl font-serif text-nudge-gray/50">
                {phase.id}
              </span>
              <h3 className="text-2xl font-medium mb-4 text-white">
                {phase.title}
              </h3>
              <p className="text-nudge-muted leading-relaxed">
                {phase.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}