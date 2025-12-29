import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function WorkShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0.2, 0.8], [0.95, 1]);

  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handlePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
      const overlay = video.parentElement?.querySelector(".video-overlay");
      if (overlay) overlay.remove();
    }
  };

  return (
    <section ref={containerRef} className="py-32 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="mb-24 text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Work in Motion
          </motion.h2>
        </div>

        {/* Project 1 - Full Width */}
        <motion.div
          style={{ scale }}
          className="relative aspect-video w-full rounded-sm overflow-hidden mb-32 group"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/grublane.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">
              Grublane
            </h3>
            <p className="text-nudge-accent uppercase tracking-widest text-sm">
              Restaurant Promo Video
            </p>
          </div>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">

          {/* Left Split Card */}
          <motion.div style={{ y: y1 }} className="space-y-8">
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
              <video
                ref={(el) => el && (videoRefs.current[0] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                src="/assets/tare.mp4"
                playsInline
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center video-overlay z-10">
                <button
                  onClick={() => handlePlay(0)}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-5xl w-20 h-20 flex items-center justify-center rounded-full transition"
                >
                  ▶
                </button>
              </div>

              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-2xl font-serif text-white">Tare Premier</h3>
                <p className="text-nudge-muted text-sm mt-1">Golden Moments</p>
              </div>
            </div>

            <div className="max-w-sm">
              <p className="text-xl font-serif italic text-nudge-muted">
                "Capturing the pulse of the movie premier through rapid cuts and sound-driven editing."
              </p>
            </div>
          </motion.div>

          {/* Right Split Card */}
          <motion.div style={{ y: y2 }} className="space-y-8 pt-12 md:pt-0">
            <div className="max-w-sm ml-auto text-right">
              <p className="text-xl font-serif italic text-nudge-muted">
                "Documenting the process. Showing how it is done, our work flow."
              </p>
            </div>

            <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
              <video
                ref={(el) => el && (videoRefs.current[1] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                src="/assets/BTS.mp4"
                playsInline
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center video-overlay z-10">
                <button
                  onClick={() => handlePlay(1)}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-5xl w-20 h-20 flex items-center justify-center rounded-full transition"
                >
                  ▶
                </button>
              </div>

              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-2xl font-serif text-white">Behind The Scene</h3>
                <p className="text-nudge-muted text-sm mt-1">Documentary Short</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
