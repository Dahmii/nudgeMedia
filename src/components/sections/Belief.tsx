import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
export function Belief() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  return <section ref={containerRef} className="min-h-[80vh] flex items-center justify-center py-24 px-6 md:px-12 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true,
        margin: '-20%'
      }} transition={{
        duration: 0.8
      }}>
          <span className="text-nudge-accent text-sm tracking-[0.2em] uppercase mb-6 block">
            The Belief
          </span>
        </motion.div>

        <motion.div className="relative overflow-hidden">
          <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight md:leading-tight" initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-10%'
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: 'easeOut'
        }}>
            We believe in the power of{' '}
            <span className="text-nudge-accent italic">intentional</span>{' '}
            storytelling. Every frame, every word, every moment—crafted to
            connect and inspire.
          </motion.h2>
        </motion.div>

        <motion.div style={{
        y
      }} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }}>
            <h3 className="text-xl font-medium mb-4 text-white">
              Precision & Pace
            </h3>
            <p className="text-nudge-muted leading-relaxed">
              In a world of noise, we choose clarity. We strip away the
              unnecessary to reveal the core truth of your brand, delivering
              messages that resonate deeply rather than just loudly.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }}>
            <h3 className="text-xl font-medium mb-4 text-white">
              Cinematic Depth
            </h3>
            <p className="text-nudge-muted leading-relaxed">
              We bring a filmmaker's eye to digital content. Lighting,
              composition, and sound design aren't afterthoughts—they are the
              language we use to evoke emotion.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>;
}