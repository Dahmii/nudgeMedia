import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollIndicator } from '../ui/ScrollIndicator';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const words = ['Stories', 'that', 'nudge.'];

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/bg.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 space-y-10"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-4 last:mr-0 align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2 + i * 0.15,
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="text-lg md:text-xl text-nudge-muted font-light tracking-wide max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Nudge Media is a creative venture focused on intentional storytelling
          and cinematic branding.
        </motion.p>

        {/* Start Project Button (now visible) */}
        <motion.button
          onClick={() => window.location.href = "mailto:hello@nudgemedia.com"}
          className="px-8 py-4 border border-nudge-gray hover:border-nudge-accent text-white hover:text-nudge-accent transition-all duration-300 rounded-sm uppercase tracking-widest text-sm mx-auto z-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start a Project
        </motion.button>
      </motion.div>

      {/* Abstract Glow */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-gradient-to-br from-nudge-accent to-transparent rounded-full blur-[120px]" />
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
