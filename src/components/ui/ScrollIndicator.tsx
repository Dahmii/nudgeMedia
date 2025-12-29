import React from 'react';
import { motion } from 'framer-motion';
export function ScrollIndicator() {
  return <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    delay: 2,
    duration: 1
  }}>
      <span className="text-[10px] uppercase tracking-[0.2em] text-nudge-muted">
        Scroll
      </span>
      <div className="w-[1px] h-12 bg-nudge-gray overflow-hidden">
        <motion.div className="w-full h-1/2 bg-nudge-accent" animate={{
        y: ['-100%', '200%']
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatDelay: 0.5
      }} />
      </div>
    </motion.div>;
}