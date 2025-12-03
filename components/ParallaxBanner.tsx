import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBanner: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0.6]);

  return (
    <div ref={ref} className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center bg-stone-900">
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 h-[140%] -top-[20%]"
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            // High energy sparks/fire background
            backgroundImage: "url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop')",
            filter: 'brightness(0.6) saturate(1.1)'
          }}
        />
      </motion.div>

      <motion.div 
        style={{ opacity: opacityOverlay }}
        className="absolute inset-0 bg-academy-dark/80 z-0" 
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto border-y border-academy-gold/30 py-12 bg-black/20 backdrop-blur-sm">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-6 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Discipline. Strength. <span className="text-transparent bg-clip-text bg-gradient-to-r from-academy-gold to-yellow-100">Tradition.</span>
            </h2>
            <p className="text-lg md:text-2xl text-stone-200 mb-8 font-light tracking-wide">
            "The stick is not a weapon. It is an extension of your soul."
            </p>
            <a 
            href="#contact"
            className="inline-block px-10 py-4 bg-academy-maroon text-white font-bold uppercase tracking-wider rounded hover:bg-red-800 transition-all shadow-[0_0_20px_rgba(127,29,29,0.5)] border border-red-500/30"
            >
            Start Your Journey
            </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxBanner;