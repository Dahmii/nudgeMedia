import React from 'react';
import { motion } from 'framer-motion';
export function Closing() {
  return <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <motion.div initial={{
      opacity: 0,
      scale: 0.9
    }} whileInView={{
      opacity: 1,
      scale: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 1
    }} className="relative z-10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 tracking-tight">
          Let's create.
        </h2>
        <p className="text-xl md:text-2xl text-nudge-muted font-light mb-12 max-w-xl mx-auto">
          Ready to tell a story that moves the world?
        </p>

        <motion.a href="mailto:hello@nudgemedia.com" className="inline-block px-8 py-4 border border-nudge-gray hover:border-nudge-accent text-white hover:text-nudge-accent transition-all duration-300 rounded-sm uppercase tracking-widest text-sm" whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }}>
          Start a Project
        </motion.a>
      </motion.div>

      {/* Footer Info */}
      <div className="absolute bottom-8 left-0 w-full px-8 flex flex-col md:flex-row justify-between items-center text-xs text-nudge-muted/40 uppercase tracking-wider">
        <span>© 2025 Nudge Media</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-nudge-accent transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-nudge-accent transition-colors">
            Vimeo
          </a>
          <a href="#" className="hover:text-nudge-accent transition-colors">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-nudge-accent/5 to-transparent pointer-events-none" />
    </section>;
}