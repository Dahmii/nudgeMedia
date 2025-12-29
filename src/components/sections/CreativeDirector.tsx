import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
export function CreativeDirector() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  return <section ref={containerRef} className="py-32 px-6 md:px-12 bg-nudge-dark overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <div className="relative h-[600px] w-full overflow-hidden rounded-sm">
          <motion.div style={{
          y: imageY
        }} className="absolute inset-0 bg-nudge-gray">
            <div className="absolute inset-0 bg-gradient-to-tr from-nudge-black/40 to-transparent mix-blend-multiply" />
            {/* Placeholder for Director Image */}
            <div className="w-full h-[120%] bg-neutral-800 flex items-center justify-center">
              <span className="text-nudge-muted/10 text-9xl font-serif">
                IMG
              </span>
            </div>
          </motion.div>
        </div>

        {/* Text Side */}
        <motion.div style={{
        y: textY
      }} className="relative z-10">
          <span className="text-nudge-accent text-sm tracking-[0.2em] uppercase mb-6 block">
            Creative Director
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Elena Vance
          </h2>
          <div className="space-y-6 text-nudge-muted text-lg font-light leading-relaxed">
            <p>
              "We don't just make content; we engineer feelings. The gap between
              a good video and a great one isn't budget—it's intention."
            </p>
            <p>
              With over a decade in documentary film and brand strategy, Elena
              leads Nudge Media with a philosophy rooted in authenticity and
              aesthetic discipline.
            </p>
          </div>
          <div className="mt-12">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Signature" className="h-12 opacity-50 invert" />
          </div>
        </motion.div>
      </div>
    </section>;
}